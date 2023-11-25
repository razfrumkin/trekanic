export type HashMap<Value> = { [key: string]: Value }

export const shortenedWeekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export function formatTime(time: number) {
    return time < 10 ? `0${time}` : time.toString()
}

export function startDayTimestamp(date: Date): number {
    const copy = new Date(date)
    copy.setHours(0)
    copy.setMinutes(0)
    copy.setSeconds(0)
    copy.setMilliseconds(0)
    return copy.getTime()
}

export function minutesFromStartDay(date: Date): number {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return hours * 60 + minutes
}

export function map(value: number, start1: number, stop1: number, start2: number, stop2: number): number {
    return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2
}