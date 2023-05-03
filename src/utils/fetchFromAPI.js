import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {

  params: {
    

    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'ffcfed3e9fmsh41eab0e8e30fa94p116bc4jsn6df4af55c54c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

  export const fetchFromAPI = async(url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`,
   options);

   return data;
  }