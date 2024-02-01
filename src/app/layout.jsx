import "./globals.css";

export const metadata = {
  title: "PacknJar",
  description: "PacknJar",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <link
        className='rounded-full w-14 h-14'
        rel='shortcut icon'
        href='/logo.jpg'
        type='image/x-icon'
      />
      <body className={"bg-[#283469]"}>{children}</body>
    </html>
  );
}
