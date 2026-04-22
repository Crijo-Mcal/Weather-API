export default async function getDataIpapi(): Promise<string> {

    try {
        const res = await fetch("https://ipapi.co/json/");

        if (!res.ok) {
            throw new Error('filed to fecth data ipapi.com')
        }

        const data = await res.json()
        return `${data.latitude},${data.longitude}`

    } catch (err: any) {
        console.error(err.message);

        return "Timor-Leste";
    }
}