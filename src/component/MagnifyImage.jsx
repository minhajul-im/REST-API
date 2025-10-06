import { useRef, useState } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Target = styled(Image)`
  position: absolute;
  left: ${(props) => props.offset.left}px;
  top: ${(props) => props.offset.top}px;
  transform: scale(2); /* Zoom effect */
  transform-origin: top left;
  pointer-events: none; /* Prevent interfering with mouse events */
  opacity: ${(props) => props.opacity};
  transition: opacity 0.2s ease-in-out;
  border: none;
`;

const Container = styled.div`
  position: relative;
  display: inline-block; /* To fit the image size */
  width: auto; /* Adjust dynamically to the image */
  height: auto;
  overflow: hidden;
`;

const MagnifyImage = ({ image, onPrevious, onNext }) => {
  const sourceRef = useRef(null);
  const containerRef = useRef(null);

  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = (e) => {
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

    if (offsetY > sourceRect.height) {
      offsetY = sourceRect.height;
    }
    if (offsetX > sourceRect.width) {
      offsetX = sourceRect.width;
    }

    setOffset({ left: -offsetX, top: -offsetY });
  };

  return (
    <div className="App">
      <Container
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}>
        <Image ref={sourceRef} alt="source" src={image} />

        <button
          onClick={onPrevious}
          className=" absolute top-1/2 left-0 -translate-y-1/2 z-10 p-3 bg-primary-500 rounded-full">
          <ChevronLeftIcon className="text-white w-10 h-10" />
        </button>

        <button
          onClick={onNext}
          className=" absolute top-1/2 right-0 -translate-y-1/2 z-10 p-3 bg-primary-500 rounded-full">
          <ChevronRightIcon className="text-white w-10 h-10" />
        </button>

        <Target alt="target" opacity={opacity} offset={offset} src={image} />
      </Container>
    </div>
  );
};

export default MagnifyImage;
