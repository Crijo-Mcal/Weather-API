export type Day = {

    datetime: string,
    temp: number,
    humidity: number,
    windspeed: number,
    conditions: string

}

export type WeatherData = {
    resolvedAddress: string,
    description: string,
    days: Day[]
}


