import { useState } from "react";

function Heart() {
  let [active, setActive] = useState(false);

  function likeGif() {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <svg
      onClick={likeGif}
      className={!active ? "gif-container__heart-icon" : "gif-container__heart-icon active"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      ></path>
    </svg>
  );
}

export default Heart;
