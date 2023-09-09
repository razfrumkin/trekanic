import './Styles/AppointmentPanel.scss'
import { Appointment, Issue } from '../Models/Appointment'
import { useState, useEffect } from 'react'
import { deleteAppointment, getCategory, getIssue, getMechanic } from '../Service'
import { formatTime } from '../Utilities'
import Spacer from './Spacer'

const AppointmentPanel = (props: { appointment: Appointment, reload: () => void }) => {
    const [issue, setIssue] = useState<Issue | null>(null)
    const [mechanic, setMechanic] = useState<string>('')
    const [category, setCategory] = useState<string>('')

    const [error, setError] = useState<string>('')

    useEffect(() => {
        getIssue(props.appointment.issue).then(response => {
            setIssue(response)

            getMechanic(props.appointment.mechanic).then(value => {
                setMechanic(value)
            })

            getCategory(response.category).then(value => {
                setCategory(value)
            })
        })
    }, [])

    function removeAppointment() {
        deleteAppointment(props.appointment.product).then(response => {
            if (response) {
                setError('')
                props.reload()
            } else {
                setError('Could not delete appointment')
            }
        })
    }

    return (
        <div className="appointment-panel">
            {
                issue !== null ?
                    <>
                        <div className="menu">
                            <span className="title">{issue.title}</span>
                            <span className="date">{formatDateTime(props.appointment.date)}</span>
                            <Spacer/>
                            <span className="error">{error}</span>
                            <Spacer/>
                            <button type="button">Edit</button>
                            <button type="button" onClick={removeAppointment}>Delete</button>
                        </div>
                        <div className="inner">
                            <p>{props.appointment.description}</p>
                            <span>Mechanic: {mechanic}</span>
                            <span>Category: {category}</span>
                            <span>{issue.price} NIS</span>
                            <span>Duration: {secondsToHMS(issue.duration)}</span>
                        </div>
                    </>
                :
                    <span>Loading...</span>
            }
        </div>
    )
}

function formatDateTime(date: Date): string {
    return `${months[date.getMonth()]} ${formatTime(date.getDate())} ${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`
}

function secondsToHMS(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
}

const months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

export default AppointmentPanel