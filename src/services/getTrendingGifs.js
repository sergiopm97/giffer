import axios from "axios";

const trendingGifsEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=100&offset=0&rating=g`;

async function GetTrendingGifs(props) {
  return await axios.get(trendingGifsEndpoint).then((response) => {
    return props(response.data.data.map((trendingGif) => trendingGif));
  });
}

export default GetTrendingGifs;
