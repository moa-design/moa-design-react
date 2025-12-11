function PortfolioRow({ img1, video, img2 }) {
  return (
    <ul className="feed1">
      <li>
        <img src={img1} alt="" />
      </li>

      <li>
        <video src={video} autoPlay loop muted playsInline />
      </li>

      <li>
        <img src={img2} alt="" />
      </li>
    </ul>
  );
}

export default PortfolioRow;
