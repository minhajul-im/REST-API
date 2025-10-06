/* eslint-disable no-constant-binary-expression */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import { Button } from '@mui/material';
import Title from '../component/helmet/Title';
import {
  useDeleteCartMutation,
  useGetCartsProductsQuery,
  useUpdateCartQtyMutation,
} from '../redux/features/api';
import ViewCartSkeleton from '../component/Skeleton/ViewCartSkeleton';
import toast from 'react-hot-toast';
import YouMayLike from '../component/YouMayLike';

// view cart page.
const ViewCart = () => {
  const [ip, setIp] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setIp(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
        setIp('127.0.0.1');
      }
    };
    fetchIpAddress();
  }, []);

  const { data: cartProducts, isLoading } = useGetCartsProductsQuery(ip);
  const [deleteCart] = useDeleteCartMutation();
  const [updateCartQty] = useUpdateCartQtyMutation();

  //Datalayer Code...
  useEffect(() => {
    if (cartProducts?.data?.carts && Array.isArray(cartProducts.data.carts)) {
      const items = cartProducts.data.carts.map((cartItem) => ({
        item_name: cartItem.product.name,
        item_id: cartItem.product.id,
        price:
          cartItem.product.discount_price || cartItem.product.regular_price,
        item_brand: 'Unknown',
        item_category: cartItem.product.category.name,
        item_variant: '',
        item_list_name: '',
        item_list_id: '',
        index: 0,
        quantity: cartItem.qty,
      }));

      const total_price = cartProducts.data.subTotal;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        event: 'view_cart',
        ecommerce: {
          currency: 'BDT',
          value: total_price,
          items: items,
        },
      });
    } else {
      console.error('Cart data is not an array:', cartProducts);
    }
  }, [cartProducts]);
  //Datalayer Code...

  const deleteHandler = async (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this product!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const res = await deleteCart(id);
          toast.success(res?.data?.message);
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.error('Your product is safe!');
      }
    });
  };
  const handleQtyChange = async (id, currentQty, type) => {
  const newQty = type === 'inc' ? currentQty + 1 : currentQty - 1;

  if (newQty < 1) return toast.error('Minimum quantity is 1');

  try {
    await updateCartQty({ id, qty: newQty }).unwrap();
    toast.success('Cart updated!');
  } catch (error) {
    toast.error('Failed to update cart');
  }
};


  return (
    <>
      {isLoading ? (
        <ViewCartSkeleton />
      ) : (
        <section className="">
          <Title title="View Cart" content={'This is view cart page.'} />
          <div className="my-5 lg:my-10">
            <p className="font-semibold text-xl lg:text-2xl text-center uppercase">
              পণ্যের জন্য এক টাকাও অগ্রিম দিতে হবে না।
            </p>
          </div>
          {/* <!-- Table --> */}
          <div>
            <div className="relative overflow-x-auto mt-10 border-y">
              <table className="w-full text-sm text-left rtl:text-right text-base_500">
                <thead className="text-md text-base_700 uppercase bg-base">
                  <tr>
                    <th scope="col" className="px-4 py-4">
                      Image
                    </th>
                    <th scope="col" className="py-4">
                      Product Name
                    </th>
                    <th scope="col" className="p-4">
                      Price
                    </th>
                    <th scope="col" className="px-4 py-4">
                      Quantity
                    </th>
                    <th scope="col" className="p-4">
                      Total
                    </th>
                    <th scope="col" className="p-2">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts?.data?.carts?.length > 0 && (
                    <>
                      {cartProducts?.data?.carts?.map((cProduct, index) => (
                        <tr
                          className="text-black border-b bg-base_300"
                          key={index}
                        >
                          <td className="px-4 py-2">
                            <img
                              src={cProduct?.product?.imageUrl}
                              alt={cProduct?.product?.name}
                              className="w-20 h-20"
                            />
                          </td>
                          <td className="p-2 font-medium text-md">
                            <h2 className="w-44 lg:w-96">
                              {cProduct?.product?.name}
                            </h2>
                          </td>
                          <td className="px-4 py-2 font-medium whitespace-nowrap text-md">
                            {cProduct?.price} TK.
                          </td>
                          <td className="font-medium whitespace-nowrap">
                            <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleQtyChange(cProduct?.id, cProduct?.qty, 'dec')}
                                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                  -
                                </button>
                                <span className="w-8 text-center">{cProduct?.qty}</span>
                                <button
                                  onClick={() => handleQtyChange(cProduct?.id, cProduct?.qty, 'inc')}
                                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                  +
                                </button>
                              </div>
                          </td>
                          <td className="px-4 py-2 font-medium whitespace-nowrap text-md">
                            <p className="">
                              {Number(cProduct?.price * cProduct.qty)} TK.
                            </p>
                          </td>
                          <td className="px-6 py-2 text-center">
                            <button
                              onClick={() => deleteHandler(cProduct?.id)}
                              className="text-primary-500 active:text-danger"
                            >
                              <DeleteIcon />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
              {!cartProducts?.data?.carts && (
                <div className="my-10">
                  <p className="text-center">There is no products</p>
                </div>
              )}
            </div>
            <div className="text-center my-8">
              {cartProducts?.data?.carts?.length === 0 ? (
                <Button variant="contained" disabled>
                  Proceed to checkout
                </Button>
              ) : (
                <Button variant="contained">
                  <Link to="/checkout">Proceed to checkout</Link>
                </Button>
              )}
            </div>
          </div>

          <div>
            <YouMayLike />
          </div>
        </section>
      )}
    </>
  );
};

export default ViewCart;
