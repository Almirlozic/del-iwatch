import Image from "next/image";

const Iwatch = ({ src, alt, width = 100, height = 100 }) => {
  return (
    <Image class="h-auto w-full object-cover" src={src} alt={alt} width={width} height={height} />
  );
};

export default Iwatch;
