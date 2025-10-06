import React from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PaymentsIcon from '@mui/icons-material/Payments';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useGetSlidersQuery } from '../../redux/features/api';
import BannerSkeleton from '../Skeleton/BannerSkeleton';

const Banner = () => {
  const { data, isLoading } = useGetSlidersQuery();

  return (
    <div>
      {isLoading ? (
        <BannerSkeleton />
      ) : (
        <>
          <Swiper
            navigation={true}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {data?.data?.map((slider, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slider?.imageUrl}
                  alt="slider"
                  className="rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* customer trust */}
          <div className="hidden lg:block">
            <div className="my-5 flex flex-wrap items-center justify-between">
              <div className="mx-auto text-center shadow-md p-4 rounded-md border w-full lg:w-72 my-2 xl:my-0">
                <CurrencyExchangeIcon color="primary" />
                <h4 className="font-semibold">Value for money</h4>
                <p>We Offer competitive price.</p>
              </div>
              <div className="mx-auto text-center shadow-md p-4 rounded-md border w-full lg:w-72 my-2 xl:my-0">
                <DeliveryDiningIcon color="primary" />
                <h4 className="font-semibold">Fast Delivery</h4>
                <p>Faster delivery on selected items.</p>
              </div>
              <div className="mx-auto text-center shadow-md p-4 rounded-md border w-full lg:w-72 my-2 xl:my-0">
                <PaymentsIcon color="primary" />
                <h4 className="font-semibold">Safe payments</h4>
                <p>Safe payments method</p>
              </div>
              <div className="mx-auto text-center shadow-md p-4 rounded-md border w-full lg:w-72 my-2 xl:my-0">
                <VerifiedIcon color="primary" />
                <h4 className="font-semibold">100% Authentic products</h4>
                <p>We provide authentic products.</p>
              </div>
              <div className="mx-auto text-center shadow-md p-4 rounded-md border w-full lg:w-72 my-2 xl:my-0">
                <LocalShippingIcon color="primary" />
                <h4 className="font-semibold">National Delivery</h4>
                <p>National Cash on delivery.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;
