import Image from "next/image";

export const ImageContact = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center w-5/6 relative h-auto">
      <Image
        src={`https://res.cloudinary.com/dgzms5c9a/image/upload/v1731205435/vwlixmmoakiu9fde3hqc.webp`}
        fill
        alt="Contact logo"
        className="w-full h-full absolute"
      />
    </div>
  );
};
