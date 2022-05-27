import { useState, useEffect } from "react";
import GetTrendingGifs from "../../services/getTrendingGifs";
import Gif from "../gif/gif";
import "./styles/trendingGifs.scss";

function TrendingGifs() {
  const [trendingGifsData, setTrendingGifsData] = useState([]);

  useEffect(() => {
    GetTrendingGifs(setTrendingGifsData);
  }, []);

  return (
    <div className="trending-container">
      <div className="trending-container__content">
        <h1 className="trending-container__content--title">Trending</h1>
        <div className="trending-container__content__gifs">
          {trendingGifsData.map((trendingGif) => (
            <Gif
              key={trendingGif.url}
              url={trendingGif.images.fixed_width.url}
              title={trendingGif.title === " " ? "Not available" : trendingGif.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingGifs;
