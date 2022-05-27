import Heart from "./icons/heart";
import "./styles/gif.scss";

function Gif(props) {
  return (
    <div className="gif-container">
      <Heart />
      <img className="gif-container--media" src={props.url} alt="gif"></img>
      <div className="gif-container__title-block">
        <h1 className="gif-container__title-block--title">{props.title}</h1>
      </div>
    </div>
  );
}

export default Gif;
