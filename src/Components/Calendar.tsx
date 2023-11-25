import './Styles/Calendar.scss'
import { useState, useEffect, useRef } from 'react'
import { getAppointments } from '../Service'
import { AppointmentCollection, Appointment } from '../Models/Appointment'
import { formatTime, startDayTimestamp, map, shortenedWeekdays, minutesFromStartDay } from '../Utilities'

const START_HOUR: number = 7
const END_HOUR: number = 22 // up to 21:59

class TableTransformation {
    firstRowY: number
    bodyHeight: number

    constructor(firstRowY: number, height: number) {
        this.firstRowY = firstRowY
        this.bodyHeight = height
    }

    get top(): string {
        return `${this.firstRowY}px`
    }
    
    get height(): string {
        return `${this.height}px`
    }

    minutesToY(minutes: number): string {
        const y = map(minutes, START_HOUR * 60, END_HOUR * 60, this.firstRowY, this.firstRowY + this.bodyHeight)
        return `${y}px`
    }

    // 7:00 - 21:00 (15 * 60 minutes)
    // 2000px
    // 60 minutes input

    minutesToHeight(minutes: number): string {
        const totalMinutes = (END_HOUR - START_HOUR) * 60
        const ratio = minutes / totalMinutes
        const height = this.bodyHeight * ratio
        return `${height}px`
    }
}

const Calendar = () => {
    const [currentWeek, setCurrentWeek] = useState<Date>(new Date())

    const [appointments, setAppointments] = useState<{ [key: number]: Appointment[] }>({})

    const calendarRef = useRef<HTMLDivElement>(null)
    const [scrollHeight, setScrollHeight] = useState<number>()

    const tableTransform = tableTransformation()

    useEffect(() => {
        getAppointments().then(response => {
            const ordered = orderAppointmentsByDate(response)
            setAppointments(ordered)
            console.log(ordered)
        })
    }, [])

    function previous() {
        const newWeek = new Date(currentWeek)
        newWeek.setDate(currentWeek.getDate() - 7)
        setCurrentWeek(newWeek)
    }

    function next() {
        const newWeek = new Date(currentWeek)
        newWeek.setDate(currentWeek.getDate() + 7)
        setCurrentWeek(newWeek)
    }

    function isToday(date: Date): boolean {
        const today = new Date()
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    }

    const events = [
        { date: new Date(2023, 10, 1, 8, 0), duration: 2 * 60 * 60 * 1000 }, // Start at 8:00 AM, 2 hours
        { date: new Date(2023, 10, 1, 20, 0), duration: 3 * 60 * 60 * 1000 }, // Start at 8:00 PM, 3 hours
    ];

    function renderWeekHeaders() {
        const boxes = [<th></th>]

        const sunday = firstDayOfTheWeekDate()

        for (let weekday = 1; weekday <= 7; weekday += 1) {
            boxes.push(renderWeekHeader(sunday, weekday))
        }

        return boxes
    }

    function renderWeekHeader(sunday: Date, weekday: number) {
        const copy = new Date(sunday)
        copy.setDate(sunday.getDate() + weekday - 1)
        
        return (
            <th className="weekday">
                {shortenedWeekdays[weekday - 1]} {isToday(copy) ? <span className="today-date">{copy.getDate()}</span> : copy.getDate()}
                {renderEvents(copy)}
            </th>
        )
    }

    function renderEvents(date: Date) {
        const timestamp = startDayTimestamp(date)
        if (!appointments[timestamp]) return []

        const eventElements: JSX.Element[] = []

        appointments[timestamp].forEach(appointment => {
            const start = minutesFromStartDay(appointment.date)
            const duration = appointment.issue.duration / 1000 / 60 // convert milliseconds to minutes
            eventElements.push(
                <div className="event" style={{ top: tableTransform.minutesToY(start), height: tableTransform.minutesToHeight(duration) }}>
                    {appointment.issue.title}
                </div>
            )
        })

        return eventElements
    }

    /*
                            <th></th>
                        <th className="weekday">
                            Sun 19
                            <div className="event" style={{ top: tableTransform.minutesToY(60 * 9), height: tableTransform.minutesToHeight(120) }}>Event</div>
                        </th>
                        <th className="weekday">Mon <span className="today-date">20</span></th>
                        <th className="weekday">Tue 21</th>
                        <th className="weekday">Wed 22</th>
                        <th className="weekday">Thu 23</th>
                        <th className="weekday">Fri 24</th>
                        <th className="weekday">Sat 25</th>
                        */

    function renderColumn(hour: number) {
        const boxes = [<td className="hour">{formatTime(hour)}:00</td>]

        for (let weekday = 1; weekday <= 7; weekday += 1) {
            boxes.push(<td key={`week ${weekday} in hour ${hour}`}></td>)
        }

        return boxes
    }

    function renderRows() {
        const rows: JSX.Element[] = []

        for (let hour = START_HOUR; hour < END_HOUR; hour += 1) {
            rows.push(
                <tr key={`hour ${hour}`}>
                    {renderColumn(hour)}
                </tr>
            )
        }

        return rows
    }

    function outputTest() {
        //console.log(tableRef.current?.firstElementChild?.getBoundingClientRect())
    }

    function tableTransformation(): TableTransformation {
        if (!calendarRef.current) return new TableTransformation(0, 0)
        const tableRef = calendarRef.current!.querySelector('table')
        if (!tableRef) return new TableTransformation(0, 0)
        const tableBody = tableRef.querySelector('tbody')
        if (!tableBody) return new TableTransformation(0, 0)

        const firstRowY = tableBody.querySelector('tr')!.getBoundingClientRect().top
        const height = tableBody.getBoundingClientRect().height
        return new TableTransformation(firstRowY, height)
    }

    function triggerScrollHeight(event: React.UIEvent<HTMLDivElement, UIEvent>) {
        const height = (event.target as HTMLDivElement).scrollTop
        setScrollHeight(height)
    }

    function firstDayOfTheWeekDate(): Date {
        const dayOfWeek = currentWeek.getDay()
        const difference = (dayOfWeek + 6) % 7
        const copy = new Date(currentWeek)
        copy.setDate(currentWeek.getDate() - difference)
        return copy
    }

    return (
        <div className="calendar" ref={calendarRef} onScroll={event => triggerScrollHeight(event)}>
            <button onClick={outputTest}>Test</button>
            <h2>January <span className="year">2020</span></h2>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
            <table className="week">
                <thead>
                    <tr>
                        {renderWeekHeaders()}
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

function orderAppointmentsByDate(appointments: AppointmentCollection): { [key: number]: Appointment[] } {
    const ordered: { [key: number]: Appointment[] } = {}

    const keys = Object.keys(appointments)
    for (const key of keys) {
        const appointment = appointments[key]
        const timestamp = startDayTimestamp(appointment.date)
        if (timestamp in ordered) ordered[timestamp].push(appointment)
        else ordered[timestamp] = [appointment]
    }

    return ordered
}

export default Calendar