const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const ClientAvatar = ({ name }: { name: string }) => {
  const firstLetter = name ? name.charAt(0).toUpperCase() : "";

  const backgroundColor = generateRandomColor();

  return (
    <div
      className={`flex justify-center items-center text-white font-bold h-14 w-14 rounded-full`}
      style={{
        backgroundColor: backgroundColor,
      }}>
      {firstLetter}
    </div>
  );
};
