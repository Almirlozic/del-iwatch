import Iwatch from "./Iwatch";

const ImageWithDot = ({ src, dotColor, onClick }) => {
  return (
    <div
      className="image-wrapper"
      style={{ "--dot-color": dotColor }}
      onClick={onClick} // click håndteres her
    >
      <Iwatch src={src} />
    </div>
  );
};

export default ImageWithDot;
