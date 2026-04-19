const key = "morglia"

export function getLocalStorege(): string[] | null {
    const response = localStorage.getItem(key);

    if (typeof response == "string") {
        return JSON.parse(response).datalocal
    }

    return null;
}


export function setLocalStorege(history: string[]): void {
    const response = localStorage.getItem(key);
    let data: string[] = []
    if (typeof response == "string") {
        data = JSON.parse(response).datalocal
    }

    localStorage.setItem(key, JSON.stringify({ datalocal: history }))

}