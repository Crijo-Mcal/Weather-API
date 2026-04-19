export type Hours = {
    datetime: string,
    temp: number
}


export type Day = {

    datetime: string,
    tempmax: number,
    tempmin: number,
    temp: number,
    humidity: number,
    windspeed: number,
    conditions: string,
    hours: Hours[]

}

export type WeatherData = {
    resolvedAddress: string,
    description: string,
    timezone: string,
    days: Day[]
}


