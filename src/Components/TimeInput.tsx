import { useState, useEffect } from 'react'
import { getAvailableDates } from '../Service'
import { AppointmentTime } from '../Database'
import { formatTime, months } from '../Utilities'

const TimeInput = (props: { time: AppointmentTime | null, setTime: React.Dispatch<React.SetStateAction<AppointmentTime | null>> }) => {
    const [availableDates, setAvailableDates] = useState<{ [key: number]: AppointmentTime[] }>([])
    const [timestampKeys, setTimestampKeys] = useState<number[]>([])

    const [selectedTimestamp, setSelectedTimestamp] = useState<number>(-1)
    const [selectedTimeIndex, setSelectedTimeIndex] = useState<number>(-1)

    useEffect(() => {
        getAvailableDates().then(dates => {
            const dictionary = createDateDictionary(dates)
            setAvailableDates(dictionary)
            const keys = Object.keys(dictionary).map(key => Number(key))
            setTimestampKeys(keys)

            console.log(props.time)

            if (props.time !== null) {
                const normalized = new Date(props.time.date)
                normalized.setHours(0)
                normalized.setMinutes(0)
                normalized.setSeconds(0)
                normalized.setMilliseconds(0)
                const timestamp = normalized.getTime()
                setSelectedTimestamp(timestamp)

                let timeIndex = -1
                dictionary[timestamp].forEach((time, index) => {
                    if (time.date === props.time!.date && time.duration === props.time!.duration) {
                        timeIndex = index
                        return
                    }
                })
                setSelectedTimeIndex(timeIndex)
            }
        })
    }, [props.time])

    function changeSelectedTimestamp(index: number) {
        setSelectedTimestamp(index)
        setSelectedTimeIndex(-1)
    }

    useEffect(() => {
        if (selectedTimeIndex < 0) props.setTime(null)
        else props.setTime(availableDates[selectedTimestamp][selectedTimeIndex])
    }, [selectedTimeIndex])

    useEffect(() => {
        console.log(selectedTimestamp)
    }, [selectedTimestamp])

    return (
        timestampKeys.length === 0 ? <span>No available dates</span> :
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="timestamps" style={{ fontSize: '18px' }}>Dates</label>
                <select id="timestamps" style={{ fontSize: '20px', padding: '5px' }} value={selectedTimestamp} onChange={event => changeSelectedTimestamp(Number(event.target.value))}>
                    <option key={-1} selected disabled value={-1}>Select Date</option>
                    {
                        timestampKeys.map(timestamp => {
                            return <option key={timestamp} value={timestamp}>{formateDateFromTimestamp(timestamp)}</option>
                        })
                    }
                </select>
            </div>

            {
                selectedTimestamp === -1 ? <></> :
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="times" style={{ fontSize: '18px' }}>Times</label>
                <select id="times" style={{ fontSize: '20px', padding: '5px' }} value={selectedTimeIndex} onChange={event => setSelectedTimeIndex(Number(event.target.value))}>
                    <option key={-1} selected disabled value={-1}>Select Time</option>
                    {
                        availableDates[selectedTimestamp].map((time, index) => {
                            return <option key={index} value={index}>{label(time)}</option>
                        })
                    }
                </select>
            </div>
            }
        </div>
    )
}

function createDateDictionary(dates: AppointmentTime[]): { [key: number]: AppointmentTime[] } {
    const dictionary: { [key: number]: AppointmentTime[] } = {}

    for (const date of dates) {
        const normalized = new Date(date.date)
        normalized.setHours(0)
        normalized.setMinutes(0)
        normalized.setSeconds(0)
        normalized.setMilliseconds(0)
        const timestamp = normalized.getTime()
        if (timestamp in dictionary) dictionary[timestamp].push(date)
        else dictionary[timestamp] = [date]
    }

    return dictionary
}

function formateDateFromTimestamp(timestamp: number): string {
    const date = new Date(timestamp)
    return `${months[date.getMonth()]} ${formatTime(date.getDate())}`
}

function label(time: AppointmentTime): string {
    const startHours = formatTime(time.date.getHours())
    const startMinutes = formatTime(time.date.getMinutes())
    const durationMinutes = Math.floor(time.duration / 60000)
    return `${startHours}:${startMinutes} for ${durationMinutes} minutes`
}

export default TimeInput