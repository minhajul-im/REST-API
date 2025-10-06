import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Skeleton from "@mui/material/Skeleton";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const ProductImage = ({ data }) => {
  const renderCustomSlide = (item) => {
    return (
      <div style={{ height: "500px", width: "100%" }}>
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={4}
          centerOnInit={true}
          wheel={{ step: 0.1 }}
          pinch={{ step: 5 }}
          doubleClick={{ disabled: true }}>
          <TransformComponent
            wrapperStyle={{
              width: "100%",
              height: "100%",
              cursor: "zoom-in",
            }}
            contentStyle={{
              width: "100%",
              height: "100%",
            }}>
            <img
              src={item.original}
              alt={item.originalAlt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    );
  };

  return (
    <div>
      {!data ? (
        <Skeleton variant="rectangular" height={500} />
      ) : (
        <ReactImageGallery
          items={
            data?.data?.product?.product_images?.length > 0
              ? data.data.product.product_images.map((images) => ({
                  original: images?.imageUrl,
                  thumbnail: images?.imageUrl,
                  originalAlt: data?.data?.product?.name,
                  thumbnailAlt: data?.data?.product?.name,
                }))
              : []
          }
          showPlayButton={true}
          showFullscreenButton={false}
          autoPlay={true}
          slideInterval={2500}
          showNav={true}
          showThumbnails={true}
          thumbnailPosition="bottom"
          renderItem={renderCustomSlide}
        />
      )}
    </div>
  );
};

import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const GalleryContainer = styled.div`
  .image-gallery-slide {
    position: relative;
    height: 500px; /* Match your Skeleton height */
  }

  .image-gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .magnify-glass {
    position: absolute;
    border: 2px solid #fff;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    pointer-events: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: none;
    width: 150px;
    height: 150px;
    overflow: hidden;
    z-index: 20;
  }

  .image-gallery-slide:hover .magnify-glass {
    display: block;
  }

  .magnify-glass img {
    position: absolute;
    width: 300px; /* 2x the glass size for zoom */
    height: auto;
    transform-origin: 0 0;
  }
`;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// MagnifyImage styles
const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Target = styled(Image)`
  position: absolute;
  left: ${(props) => props.offset.left}px;
  top: ${(props) => props.offset.top}px;
  transform: scale(2);
  transform-origin: top left;
  pointer-events: none;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.2s ease-in-out;
  border: none;
  z-index: 10;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  overflow: visible;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: visible;
`;

const MagnifyImage = ({ image }) => {
  const sourceRef = useRef(null);
  const containerRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => {
    console.log("Mouse Enter");
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave");
    setOpacity(0);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current || !sourceRef.current) {
      console.log("Refs not ready");
      return;
    }
    const containerRect = containerRef.current.getBoundingClientRect();
    const sourceRect = sourceRef.current.getBoundingClientRect();
    const xRatio =
      (sourceRect.width * 2 - containerRect.width) / sourceRect.width;
    const yRatio =
      (sourceRect.height * 2 - containerRect.height) / sourceRect.height;
    const left = e.pageX - containerRect.left;
    const top = e.pageY - containerRect.top;
    let offsetX = left * xRatio;
    let offsetY = top * yRatio;
    offsetX = Math.min(Math.max(offsetX, -sourceRect.width), 0);
    offsetY = Math.min(Math.max(offsetY, -sourceRect.height), 0);
    setOffset({ left: -offsetX, top: -offsetY });
  };

  return (
    <AppContainer>
      <Container
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}>
        <Image
          ref={sourceRef}
          alt="source"
          src={image || "https://via.placeholder.com/500"}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/500";
            console.log("Image failed to load");
          }}
        />
        <Target
          alt="target"
          opacity={opacity}
          offset={offset}
          src={image || "https://via.placeholder.com/500"}
        />
      </Container>
    </AppContainer>
  );
};

export const ProductSlider = ({ data }) => {
  const [image, setImage] = useState(
    data?.data?.product?.product_images?.[0]?.imageUrl || ""
  );
  const handleSlideChange = (swiper) => {
    setImage(swiper.slides[swiper.activeIndex].getAttribute("src"));
  };

  return (
    <div className="md:w-1/2 relative">
      {!image ? (
        <Skeleton variant="rectangular" height={500} />
      ) : (
        <MagnifyImage image={image} />
      )}
      <Swiper
        slidesPerView={4}
        loop={data?.data?.product?.product_images?.length >= 4}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 10 },
          768: { slidesPerView: 5, spaceBetween: 15 },
          1024: { slidesPerView: 8, spaceBetween: 20 },
        }}
        modules={[Navigation, Autoplay]}
        navigation={true}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 2500, // Changed to 2500 ms as requested
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="mt-4 space-x-2 mySwiper cursor-pointer">
        {data?.data?.product?.product_images?.length > 0 ? (
          data.data.product.product_images.map((images, index) => (
            <SwiperSlide key={index}>
              <img
                onClick={() => setImage(images?.imageUrl)}
                src={images?.imageUrl}
                alt={data?.data?.product?.name}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))
        ) : (
          <div>No images available</div>
        )}
      </Swiper>
    </div>
  );
};
