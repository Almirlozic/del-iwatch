import Iwatch from "./Iwatch";

const ImageWithDot = ({ src, dotColor, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ "--dot-color": dotColor }}
      className="
        relative inline-block 
        hover:-translate-y-2 transition duration-500 ease-in
        after:content-[''] after:absolute 
        after:top-[70%] after:left-1/2 
        after:-translate-x-1/2 after:-translate-y-1/2
        after:h-[65%] after:w-[120%]
        after:rounded-[10%]
        after:bg-[var(--dot-color)]
        after:z-[-1]
      "
    >
      <Iwatch src={src} />
    </div>
  );
};

export default ImageWithDot;
