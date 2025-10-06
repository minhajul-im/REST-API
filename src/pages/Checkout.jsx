/* eslint-disable no-constant-condition */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import Title from '../component/helmet/Title';
import {
  useDeleteCartMutation,
  useGetCartsProductsQuery,
  usePlaceOrderMutation,
  useUpdateCartQtyMutation,
} from '../redux/features/api';
import toast from 'react-hot-toast';
import Loader from '../component/ui/Loader';
import CheckoutSkeleton from '../component/Skeleton/CheckoutSkeleton';


// checkout page
const Checkout = () => {
  const [ip, setIp] = useState();
  const navigate = useNavigate();

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
      window.dataLayer.push({ ecommerce: null }); // Clear previous ecommerce object to avoid data leakage
      window.dataLayer.push({
        event: 'begin_checkout',
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

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      delivery: '60', // default value for the radio button
    },
  });

  const deliveryValue = watch('delivery'); // watch the delivery field

  const handleDeliveryChange = (event) => {
    setValue('delivery', event.target.value); // set the value of the delivery field
  };
  // place order mutation
  const [confirmOrder, { isLoading: OrderIsLoading }] = usePlaceOrderMutation();

  // products details
  const productsDetails = cartProducts?.data?.carts
    ? cartProducts?.data?.carts?.map((c) => ({
        id: c?.product?.id,
        color: c?.color ? c?.color : null,
        price: c?.price,
        qty: c?.qty,
        size: c?.size ? c?.size : null,
      }))
    : [];

  // Total cards quantity
  const TotalQuantity = cartProducts?.data?.carts
    ? cartProducts?.data?.carts
        ?.reduce((total, currentProduct) => total + currentProduct.qty, 0)
        .toString()
    : 0;

  const onSubmit = async (data) => {
    const subTotal = (
      cartProducts?.data?.subTotal + Number(deliveryValue)
    ).toString();

    const order = {
      ip_address: ip,
      customer_name: data.name,
      customer_phone: data.phone,
      delivery_area: data.delivery,
      customer_address: data.address,
      price: subTotal,
      product_quantity: TotalQuantity,
      payment_type: 'cod',
      order_type: 'Website',
      products: productsDetails,
    };
    if (productsDetails.length > 0) {
      try {
        const res = await confirmOrder(order);
        if (res?.data?.success === true) {
          const orderId = res?.data?.data?.orderId;
          navigate(`/success-order/${orderId}`);
        }
      } catch (error) {
        // console.log(error);
      }
    } else {
      toast.error('Please add to cart products.');
    }
    reset();
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
  const [deleteCart] = useDeleteCartMutation();
  const [updateCartQty] = useUpdateCartQtyMutation();

  // carts delete handler
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
        toast.success('Your product is safe!');
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <CheckoutSkeleton />
      ) : (
        <>
          <section className=" my-10 lg:py-20 mt-14 md:mt-0">
            <Title title={'Checkout'} content={'This is checkout page.'} />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:flex justify-between items-start gap-5 mx-auto h-full"
              id="checkout_form"
            >
              <div className="w-full xl:w-2/3 rounded-md bg-white shadow-xl py-2 lg:py-10 px-2 lg:px-6 my-6 lg:my-0 h-full">
                <div className="py-2">
                  <p className="font-medium text-center text-lg">
                    আপনার পছন্দের পণ্যটি অর্ডার করুন কোনো অগ্রিম মূল্য ছাড়াই।
                    পণ্য হাতে পাওয়ার পরই ক্যাশ অন ডেলিভারিতে মূল্য পরিশোধ করুন!
                  </p>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold">
                  Billing / Shipping Details
                </h3>
                <div className="lg:flex justify-between items-center gap-4 my-2">
                  <div className="w-full">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter full Name*"
                      className="bg-primary-50 lg:py-4 w-full border border-primary-100 text-secondary-950 rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5"
                      {...register('name', { required: true })}
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    <p className="py-1">
                      {errors.name?.type === 'required' && (
                        <small role="alert" className="text-danger">
                          name is required
                        </small>
                      )}
                    </p>
                  </div>
                  <div className="w-full">
                    <input
                      type="text" // use text to get full control
                      name="phone"
                      placeholder="Phone*"
                      inputMode="numeric"
                      className="bg-primary-50 w-full lg:py-4 border border-primary-100 text-secondary-950 rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5"
                      {...register('phone', { required: true })}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, ''); // remove all non-digits
                      }}
                    />
                    <p className="py-1">
                      {errors.phone?.type === 'required' && (
                        <small role="alert" className="text-danger">
                          Phone is required
                        </small>
                      )}
                    </p>
                  </div>
                </div>
                <div className="my-2">
                  <textarea
                    name="address"
                    cols="30"
                    rows="5"
                    placeholder="Enter your full Address*"
                    className="bg-primary-50 w-full lg:py-4 border border-primary-100 text-secondary-950 rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5"
                    {...register('address', { required: true })}
                    aria-invalid={errors.address ? 'true' : 'false'}
                  ></textarea>
                  <p className="py-1">
                    {errors.address?.type === 'required' && (
                      <small role="alert" className="text-danger">
                        Address is required
                      </small>
                    )}
                  </p>
                </div>
                <div className="my-2">
                  <div className="mb-2 space-x-2">
                    <input
                      type="radio"
                      value="60"
                      name="delivery"
                      id="inside"
                      className="defaultChecked"
                      {...register('delivery', { required: true })}
                      defaultChecked
                      onChange={handleDeliveryChange}
                    />
                    <label htmlFor="inside">Inside Dhaka(60 TK.)</label>
                  </div>
                  <div className="space-x-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="120"
                      id="outside"
                      {...register('delivery', { required: true })}
                      onChange={handleDeliveryChange}
                    />
                    <label htmlFor="outside">Outside Dhaka(120 TK.)</label>
                  </div>
                  {/* <div className="mb-2 space-x-2">
                    <input
                      type="radio"
                      value="0"
                      name="delivery"
                      id="free"
                      className="defaultChecked"
                      {...register('delivery', { required: true })}
                      defaultChecked
                      onChange={handleDeliveryChange}
                    />
                    <label htmlFor="free">Free Delivery(0 TK.)</label>
                  </div> */}
                </div>
              </div>
              <div className="w-full xl:w-1/3 bg-white rounded-md shadow-xl p-2 lg:p-6 h-fit">
                <div className="overflow-y-scroll h-[200px]">
                  {isLoading && (
                    <div>
                      <p>Loading...</p>
                    </div>
                  )}
                  {cartProducts?.data?.carts?.map((cProducts, index) => (
  <div
    className="flex justify-between items-center gap-4 my-2 border border-gray-200 p-3 rounded-md shadow-sm"
    key={index}
  >
    <div className="flex gap-3">
      <img
        src={cProducts?.product?.imageUrl}
        alt={cProducts?.product?.name}
        className="w-20 h-20 object-cover rounded-md border"
      />
      <div className="flex flex-col justify-between">
        <h4 className="text-sm font-medium line-clamp-2">
          {cProducts?.product?.name}
        </h4>
        <p className="text-gray-600 text-sm">{cProducts?.price} TK</p>
        <div className="flex flex-wrap gap-4 text-xs text-gray-700">
          <p>Size: {cProducts?.size || 'N/A'}</p>
          <p>Color: {cProducts?.color || 'N/A'}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={() => handleQtyChange(cProducts?.id, cProducts?.qty, 'dec')}
            className={`w-8 h-8 flex justify-center items-center border text-xl font-semibold rounded ${
              cProducts?.qty <= 1
                ? 'bg-gray-200 cursor-not-allowed'
                : 'hover:bg-gray-100 transition'
            }`}
            disabled={cProducts?.qty <= 1}
          >
            -
          </button>
          <span className="w-10 text-center text-base font-medium">
            {cProducts?.qty}
          </span>
          <button
            type="button"
            onClick={() => handleQtyChange(cProducts?.id, cProducts?.qty, 'inc')}
            className="w-8 h-8 flex justify-center items-center border border-gray-300 text-xl font-semibold rounded hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <Button
      variant="text"
      onClick={() => deleteHandler(cProducts?.id)}
      className="text-red-500 hover:text-red-700"
    >
      <DeleteIcon />
    </Button>
  </div>
))}

                </div>

                <hr className="border my-2" />
                <div>
                  <div className="flex justify-between my-1 items-center">
                    <p className="font-semibold">Sub Total</p>
                    <p>{cartProducts?.data?.subTotal} Tk.</p>
                  </div>
                  <div className="flex justify-between my-1 items-center">
                    <p className="font-semibold">Delivery Charge</p>
                    <p>{deliveryValue} Tk.</p>
                  </div>
                  <hr className="border my-2" />
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">Grand Total</p>
                    <p>
                      {(
                        Number(cartProducts?.data?.subTotal) +
                        Number(deliveryValue)
                      ).toFixed()}{' '}
                      Tk.
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="space-x-2">
                      <p className="my-1 font-semibold">
                        Select Payment Method
                      </p>

                      <input
                        type="radio"
                        name="paymentMethod"
                        id=""
                        value="Cash on Delivery"
                        defaultChecked
                      />
                      <label htmlFor="paymentMethod">Cash on delivery</label>
                    </div>
                    <div>
                      {OrderIsLoading ? (
                        <button className="bg-primary-300 py-2 w-full mt-6 text-white rounded-md">
                          <Loader />
                        </button>
                      ) : (
                        <button className="bg-primary-500 py-2 w-full mt-6 text-white rounded-md">
                          Place an Order{' '}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </>
      )}
    </>
  );
};

export default Checkout;