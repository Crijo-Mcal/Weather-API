export function celsiusConverter(value: number): number {
    const result = (value - 32) * (5 / 9)
    return Math.round(result);
}