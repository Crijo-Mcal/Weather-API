type LocalType = {
    location: string[]
}


const key = "morglia"

export function getLocalStorege(): string[] {
    const response = localStorage.getItem(key);
    if (response) return JSON.parse(response).location;
    return [];
}


export function setLocalStorege(value: string): void {
    const resLocalData = localStorage.getItem(key);
    const safeValue = value.toLocaleLowerCase().trim();


    if (resLocalData) {
        const locaData: LocalType = JSON.parse(resLocalData);

        if (locaData.location.includes(safeValue)) return

        const newHistory = [safeValue, ...locaData.location].slice(0, 6)
        localStorage.setItem(key, JSON.stringify({ location: newHistory }))
        return;
    }

    localStorage.setItem(key, JSON.stringify({ location: [value] }))

    return

}