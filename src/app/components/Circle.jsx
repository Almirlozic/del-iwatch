const Circle = ({ activeCircle }) => {
  return (
    <div className="timeline">
      <div className="timeline_items">
        <div className="timeline_line"></div>
        <div className={`timeline_circle circel-1 ${activeCircle === 1 ? "active" : ""}`}></div>
        <div className={`timeline_circle circel-2 ${activeCircle === 2 ? "active" : ""}`}></div>
        <div className={`timeline_circle circel-3 ${activeCircle === 3 ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default Circle;
