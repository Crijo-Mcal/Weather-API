type unit = "C" | "F"

export function temperatureConverter(value: number, action: unit): number {
    if (action == "F") {
        const result = (value * 9 / 5) + 32
        return Math.round(result);
    }

    return Math.round(value);
}


export function dateToString(date: string) {
    return new Date(date).toLocaleDateString("en-US", { weekday: "long" })
}

export function isLatLng(input: string) {
    const lat = input.split(",")[0];
    const lng = input.split(",")[1];

    if (!isNaN(Number(lat)) && !isNaN(Number(lng))) {
        return true;
    }

    return false;
}
