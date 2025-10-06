import React, { useEffect, useRef, useState } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Badge, Button, Skeleton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CartDropdown from './CartDropdown';
import MenuSidebar from './MenuSidebar';
import CategoriesList from './CategoriesList';
import HomeIcon from '@mui/icons-material/Home';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {
  useCountCartsQuery,
  useGeneralDataQuery,
  useGetCategoriesQuery,
} from '../../redux/features/api';
import axios from 'axios';
import NavbarSkeleton from '../Skeleton/NavbarSkeleton';

const Nav = [
  { nav: 'Home', id: 1, route: '/' },
  { nav: 'Shop', id: 2, route: '/shop' },
  { nav: 'Contact us', id: 3, route: '/contact-us' },
  { nav: 'Return process', id: 4, route: '/refund' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [ip, setIp] = useState();
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const categoriesRef = useRef();

  const handleClickOutside = (event) => {
    if (
      categoriesRef.current &&
      !categoriesRef.current.contains(event.target)
    ) {
      setIsCategoryOpen(false);
    }
  };

  const { data, isLoading } = useGeneralDataQuery();
  const { data: categories } = useGetCategoriesQuery();
  const { data: count } = useCountCartsQuery(ip);

  useEffect(() => {
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

    if (isCategoryOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCategoryOpen]);

  const searchHandler = (e) => {
    e.preventDefault();

    const search = e.target.search.value;
    navigate(`/product-search/${search}`);
  };

  return (
    <>
      {isLoading ? (
        <NavbarSkeleton />
      ) : (
        <header className="">
          {/* Navbar for large device */}
          <nav className="border-y hidden md:block fixed top-0 left-0 right-0 bg-secondary-50 z-50">
            {/* part 1 */}
            <div className="flex items-center justify-between mx-auto container px-4 gap-4 py-2">
              <Link to={'/'}>
                {isLoading ? (
                  <Skeleton width={100} height={60} />
                ) : (
                  <img
                    src={data?.generalData?.logo_url}
                    alt="logo"
                    className="w-60"
                  />
                )}
              </Link>
              <div className="">
                <form
                  className="pt-2 flex items-center mx-auto"
                  onSubmit={searchHandler}
                >
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      className="xl:w-[600px] lg:w-[400px] bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5"
                      placeholder="Search..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-primary-500 rounded-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                  >
                    <svg
                      className="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    Search
                  </button>
                </form>
                <div className="py-2 mx-auto hidden lg:block ">
                  <ul className="flex items-center justify-start gap-4 text-sm">
                    {categories?.data?.slice(0, 6)?.map((c, index) => (
                      <li key={index}>
                        <Link
                          to={`/product-category/${c?.slug}`}
                          className="hover:text-primary-500"
                        >
                          {c?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between border rounded-md p-2 gap-4">
                <div>
                  <LocalPhoneIcon className="text-primary-500" />
                </div>
                <div>
                  <p>Call us:</p>
                  <Link to={`tel: ${data?.generalData?.phone}`}>
                    {data?.generalData?.phone}
                  </Link>
                </div>
              </div>
              <div
                className="relative inline-block text-left"
                onMouseLeave={() => setIsOpenCart(false)}
              >
                <button onMouseEnter={() => setIsOpenCart(true)}>
                  <Badge badgeContent={count?.data} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </button>
                <div className="origin-top-right absolute right-0 w-80 rounded-md shadow-lg bg-white focus:outline-none z-30">
                  <CartDropdown
                    isOpen={isOpenCart}
                    setIsOpen={setIsOpenCart}
                    ip={ip}
                  />
                </div>
              </div>
            </div>
            {/* part 2 */}
            <div className="bg-primary-200 py-3">
              <div className="container mx-auto flex items-center justify-start gap-10 px-2">
                <div
                  className="relative"
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  <Button
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    variant="contained"
                    type="button"
                    className="space-x-20"
                  >
                    <span>Categories</span>
                    <svg
                      className="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </Button>

                  <div
                    onMouseLeave={() => setIsCategoryOpen(false)}
                    className="absolute w-full bg-white"
                  >
                    {/* <!-- Dropdown menu --> */}
                    <div>{isCategoryOpen && <CategoriesList />}</div>
                  </div>
                </div>
                <div>
                  <ul className="flex items-center mx-auto gap-5 font-medium">
                    {Nav?.map((n) => (
                      <li key={n?.id}>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? 'text-primary-500 bg-white px-4 py-2 rounded-md shadow-md shadow-primary-200'
                              : 'px-4 py-2 rounded-md shadow-md shadow-primary-200 text-secondary-950'
                          }
                          to={n?.route}
                        >
                          {n?.nav}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          {/*Navbar for small device */}
          <nav className="block md:hidden top-0 left-0 right-0 bg-secondary-50 z-50">
            <div className=" bg-white border">
              <div className="w-full flex items-center px-2  justify-between ">
                <Link to={'/'}>
                  {isLoading ? (
                    <Skeleton width={100} height={60} />
                  ) : (
                    <img
                      src={data?.generalData?.logo_url}
                      alt="logo"
                      className="sm:w-52 w-60"
                    />
                  )}
                </Link>
                <div className="px-2 pb-2 hidden sm:block">
                  <form
                    className="flex items-center max-w-sm mx-auto"
                    onSubmit={searchHandler}
                  >
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <input
                        type="text"
                        id="search"
                        className="bg-secondary-50 border  border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[300px] mx-auto p-2.5"
                        placeholder="Search..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-primary-500 rounded-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </form>
                </div>
                <div className="flex items-center gap-4 ">
                  <div
                    className="relative inline-block text-left"
                    onMouseLeave={() => setIsOpenCart(false)}
                  >
                    <button onMouseEnter={() => setIsOpenCart(true)}>
                      <Badge badgeContent={count?.data} color="primary">
                        <ShoppingCartIcon />
                      </Badge>
                    </button>
                    <div className="origin-top-right absolute right-0 w-60 md:w-80 rounded-md shadow-lg bg-white focus:outline-none z-30">
                      <CartDropdown
                        isOpen={isOpenCart}
                        setIsOpen={setIsOpenCart}
                        ip={ip}
                      />
                    </div>
                  </div>
                  <button onClick={() => setIsOpenSidebar(true)}>
                    <MenuIcon />
                  </button>
                </div>
              </div>
              <div className="px-2 pb-2 block sm:hidden">
                <form
                  className="flex items-center max-w-sm mx-auto"
                  onSubmit={searchHandler}
                >
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="search"
                      className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full mx-auto p-2.5"
                      placeholder="Search..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-primary-500 rounded-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
            </div>

            {/* fixed */}
            <div className="fixed bottom-0 left-0 right-0 mx-auto bg-secondary-50 z-30 p-2 shadow-md border-t-2">
              <div className="flex items-center justify-between">
                <Link to={'/'} className="mx-auto text-center">
                  <HomeIcon />
                  <p>Home</p>
                </Link>
                <Link to={'/categories'} className="mx-auto text-center">
                  <WidgetsIcon />
                  <p>Categories</p>
                </Link>
                <Link className="mx-auto text-center" to={'/shop'}>
                  <LocalMallIcon />
                  <p>Products</p>
                </Link>
                <Link className="mx-auto text-center" to={'/cart'} title="Cart">
                  <Badge badgeContent={count?.data} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                  <p>Cart</p>
                </Link>
              </div>
            </div>
            <MenuSidebar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;
