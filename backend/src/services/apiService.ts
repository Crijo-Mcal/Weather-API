
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;
const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";


export async function getWeatherByLocation(location: string): Promise<object> {


    if (!apiKey) {
        console.error("API KEY MISSING")
        throw { status: 500, message: "Internal Server Error" }
    }

    const dates = getDatesange();
    const res = await fetch(`${baseUrl}${location}/${dates.date1}/${dates.date2}?key=${apiKey}&unitGroup=metric`)

    if (!res.ok) {
        console.error("fetch failed")
        throw { status: res.status, message: "Internal Server Error" }
    }

    const data: object = await res.json();

    return data;

}


function getDatesange(): { date1: string | undefined, date2: string | undefined } {
    const today = new Date();
    const next7Days = new Date();

    next7Days.setDate(today.getDate() + 6);

    const date1 = today.toISOString().split('T')[0];
    const date2 = next7Days.toISOString().split('T')[0];

    return { date1, date2 }
}



