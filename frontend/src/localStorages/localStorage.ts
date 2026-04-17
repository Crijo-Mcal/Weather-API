const key = "morglia"

export function getLocalStoreges(): string[] | null {
    const response = localStorage.getItem(key);

    if (typeof response == "string") {
        return JSON.parse(response).datalocal
    }

    return null;
}


export function setLocalStoreges(history: string[]): void {
    const response = localStorage.getItem(key);
    let data: string[] = []
    if (typeof response == "string") {
        data = JSON.parse(response).datalocal
    }

    localStorage.setItem(key, JSON.stringify({ datalocal: history }))

}