const api_key = import.meta.env.VITE_API_KEY;

import type { WeatherData } from "../types/WeatherData";

export default async function apicall(location: string): Promise<WeatherData> {

    try {
        const response = await fetch(`https://weather-api-oeta.onrender.com/api/weather/${location}?unitGroup=metric&key=${api_key}`)
        if (response.ok === false) {
            throw new Error("connection fale");
        }


        const data: WeatherData = await response.json();
        console.log(data);
        return data

    } catch (err: any) {
        console.log(err.message);
        throw null;
    }

}