import Video from "@/components/Video";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <h1 className='title text-2xl md:text-4xl lg:text-6xl font-extrabold text-center mt-10'>
        WelCome to PacknJar
      </h1>
      <Video />
      <Social />
      <Footer />
    </main>
  );
}
