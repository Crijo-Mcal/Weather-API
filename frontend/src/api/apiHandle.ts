const api_key = import.meta.env.VITE_API_KEY;


export default async function apicall(location: string) {

    try {
        const response = await fetch(`https://weather-api-oeta.onrender.com/api/weather/coimbra?key=JKJKJKJJkjkjgdgseybdiursiru12345454`)
        if (response.ok === false) {
            throw new Error("connection fale");
        }
        console.log(response);

        const data = await response.json();
        return data

    } catch (err: any) {
        console.log(err.message);
        return
    }

}