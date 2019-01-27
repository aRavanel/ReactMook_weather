import axios from 'axios'; // plus leger que jQuery ~ (pour faire des requetes)

const API_KEY = '5b8cf446aabb72f2b0fb0808546635ae';
// const API_KEY = '6a78596d062df78380eff5944c4e5567';
// const ROOT_URL = 'https://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
// const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// fetchWeather est un action creator
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // nb payload sont des data supplmétnaires qui caracterisent une action
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}