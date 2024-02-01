import { soicals } from "@/db/socials";

export default function Social() {
  return (
    <div className='mt-[95%] md:mt-[65%] lg:mt-[50%] xl:mt-[40%]'>
      <p className='flex mt-24 md:mt-0 lg:mt-0 justify-center items-baseline gap-6'>
        {soicals.map((social) => (
          <a
            key={social.id}
            href={"https://wa.me/+8801301109244"}
            target='_blank'
          >
            <social.icon
              className='text-3xl md:text-4xl lg:text-5xl text-white transition-all
             hover:text-[#4267B2] bg-[4267B2] border border-[#4267B2] rounded-full hover:bg-white'
            />
          </a>
        ))}
      </p>
    </div>
  );
}
