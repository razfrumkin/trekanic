export type HashMap<Value> = { [key: string]: Value }

export const months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

export function formatTime(time: number) {
    return time < 10 ? `0${time}` : time.toString()
}