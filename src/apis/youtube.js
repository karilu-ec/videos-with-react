import axios from "axios";

const KEY = "AIzaSyCP1MBFznIRgnekko3MHDOPogsXaMVnc58";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
