export type HashMap<Value> = { [key: string]: Value }

export function formatTime(time: number) {
    return time < 10 ? `0${time}` : time.toString()
}