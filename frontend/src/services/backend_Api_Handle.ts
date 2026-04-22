const api_key = import.meta.env.VITE_API_KEY;

import type { ResponseData } from "../types/WeatherData";
import getDataIpapi from "./ipapiApiHandle";

export default async function apicall(location: string): Promise<ResponseData | null> {

    try {

        if (!location) {
            location = await getDataIpapi();
        }

        const res = await fetch(`https://weather-api-oeta.onrender.com/api/weather/${location}?key=${api_key}`)


        const resData: ResponseData = await res.json();

        if (res.ok === false) {
            return { success: false, err: { status: res.status, message: resData.err?.message || "internal erros" } }
        }

        return { success: true, data: resData.data }


    } catch (err: any) {
        console.error(err.message);
        return { success: false, err: { status: 400, message: "no internet" } };
    }

}