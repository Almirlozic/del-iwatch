const Circle = ({ activeCircle }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute top-0 bottom-0 right-[35%] -translate-x-1/2 border-l-4 border-dotted border-white"></div>
        <div
          className={`w-8 h-8 rounded-full border-4 border-white z-10 bg-[#404354] ${
            activeCircle === 1 ? "scale-110" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-8 rounded-full border-4 border-white z-10 bg-[#58d7c4] ${
            activeCircle === 2 ? "scale-110" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-8 rounded-full border-4 border-white z-10 bg-[#c9e6e1] ${
            activeCircle === 3 ? "scale-110" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Circle;
