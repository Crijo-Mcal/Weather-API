import { promises } from "dns";
import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.API_KEY;
const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
export default async function apiCall(location) {
    try {
        const dates = getDatesange();
        const respose = await fetch(`${baseUrl}${location}/${dates.date1}/${dates.date2}?key=${apiKey}&unitGroup=metric`);
        if (respose.ok === false) {
            throw new Error("page not found");
        }
        const data = await respose.json();
        return data;
    }
    catch (err) {
        return { err: err.message };
    }
}
function getDatesange() {
    const today = new Date();
    const next7Days = new Date();
    next7Days.setDate(today.getDate() + 6);
    const date1 = today.toISOString().split('T')[0];
    const date2 = next7Days.toISOString().split('T')[0];
    return { date1, date2 };
}
