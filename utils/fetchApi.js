import axios from "axios";

const API_KEY= process.env.RapidAPI_Key;

export const baseUrl = 'https://bayut.p.rapidapi.com';

console.log(API_KEY);
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}