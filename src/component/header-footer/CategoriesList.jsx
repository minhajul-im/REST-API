import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useGetCategoriesQuery } from "../redux/Features/ServicesApi";
import { Card } from '@mui/material';
import { useGetCategoriesQuery } from '../../redux/features/api';

const CategoriesList = () => {
  const [isOpenSubcategory, setIsOpenSubcategory] = useState(false);
  const [subcategory, setSubcategory] = useState(null);

  const subCategoryHandler = (category) => {
    setIsOpenSubcategory(true);
    setSubcategory(category);
  };

  const categoryRef = useRef();

  const handleClickOutside = (event) => {
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      setIsOpenSubcategory(false);
    }
  };

  useEffect(() => {
    if (isOpenSubcategory) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenSubcategory]);

  const { data } = useGetCategoriesQuery();

  const subCategory = data?.data.find((c) => c?.slug === subcategory);

  return (
    <div
      className="relative w-full rounded-lg z-30"
      onMouseLeave={() => setIsOpenSubcategory(false)}
    >
      {/* Main category */}
      <Card className="h-96 lg:h-72 2xl:h-[455px] border border-primary-500">
        <ul className="overflow-y-scroll h-full">
          {data?.data?.map((c, index) => (
            <li key={index} onMouseEnter={() => subCategoryHandler(c?.slug)}>
              <Link
                to={`/product-category/${c?.slug}`}
                className="text-secondary-900 w-full hover:text-secondary-50 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium px-3 py-2.5 flex text-center items-center justify-between"
              >
                <span>
                  {c?.name?.length > 18
                    ? `${c?.name?.slice(0, 18)}...`
                    : c?.name}
                </span>
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
              </Link>
            </li>
          ))}
        </ul>
      </Card>

      {/* sub category */}
      {isOpenSubcategory && (
        <div className="">
          <Card className="absolute top-0 left-full w-52 bg-white z-20 overflow-y-scroll h-full">
            <ul>
              {subCategory?.subcategories?.map((s, index) => (
                <li key={index}>
                  <Link
                    to={`/product-subcategory/${s?.slug}`}
                    className="text-secondary-900 w-full hover:text-secondary-50 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium px-3 py-2 flex text-center items-center justify-between"
                    type="button"
                  >
                    <span>{s?.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CategoriesList;
