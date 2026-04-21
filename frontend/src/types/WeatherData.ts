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
    address: string,
    description: string,
    timezone: string,
    days: Day[]
}

export type ErrData = {
    status: number,
    message: string
}

export type ResponseData = {
    success: boolean
    data?: WeatherData
    err?: ErrData
}



