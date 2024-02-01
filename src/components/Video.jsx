export default function Video() {
  return (
    <video
      className='w-full h-full object-contain md:object-cover lg:object-cover top-0 left-0 absolute -z-10'
      controls={false}
      preload='none'
      muted
      loop
      autoPlay
    >
      <source src='/video.mp4' type='video/mp4' />
    </video>
  );
}
