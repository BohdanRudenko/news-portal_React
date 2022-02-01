import axios, {AxiosResponse, AxiosRequestConfig} from "axios";

const getNews = (): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig  = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: 'Elon Musk', lang: 'en'},
        headers: {
          'x-rapidapi-host': 'free-news.p.rapidapi.com',
          'x-rapidapi-key': 'f0c2ac8909msh756f85cb489cc9ap181d70jsn046f302e028a'
        }
      };
      
    return axios.request(options)
}

export default getNews;