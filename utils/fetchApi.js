import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
// headers: {
// 'x-rapidapi-host': 'bayut.p.rapidapi.com',
// 'x-rapidapi-key': '7ae670f2f4msh31f45694b37d835p19c6ddjsn50fdc0e526ac'
//   }

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "7ae670f2f4msh31f45694b37d835p19c6ddjsn50fdc0e526ac",
    },
  });
  return data;
};
