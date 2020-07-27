import axios from "axios";

const KEY = "AIzaSyA52mlIxTbLZWKuHTlUyM4or8aTASN8voI";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3"
});
