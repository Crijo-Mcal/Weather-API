import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;
const baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export async function getWeatherByLocation(location: string): Promise<object> {
    try {
        if (!apiKey) {
            console.error("API KEY MISSING");
            throw { status: 500, message: "Internal Server Error" };
        }

        const dates = getDateRange();
        const res = await fetch(
            `${baseUrl}${location}/${dates.date1}/${dates.date2}?key=${apiKey}&unitGroup=metric`
        );

        if (!res.ok) {
            console.error("Fetch failed");

            if (res.status === 420) {
                throw { status: 429, message: "API limit reached for today" };
            }

            if (res.status === 400) {
                throw { status: 400, message: `No location found with name "${location}"` };
            }

            throw { status: res.status, message: "Internal error" };
        }

        const data: object = await res.json();
        return data;

    } catch (err: any) {
        throw {
            status: err.status || 500,
            message: err.message || "Internal Server Error"
        };
    }
}

function getDateRange(): { date1: string | undefined; date2: string | undefined } {
    const today = new Date();
    const next7Days = new Date();

    next7Days.setDate(today.getDate() + 6);

    const date1 = today.toISOString().split("T")[0];
    const date2 = next7Days.toISOString().split("T")[0];

    return { date1, date2 };
}