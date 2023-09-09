import './Styles/AppointmentPanel.scss'
import { Appointment } from '../Models/Appointment'
import { useState } from 'react'
import { deleteAppointment } from '../Service'
import { formatTime } from '../Utilities'
import Spacer from './Spacer'

const AppointmentPanel = (props: { appointment: Appointment, reload: () => void }) => {
    const [error, setError] = useState<string>('')

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
            <div className="menu">
                <span className="title">{props.appointment.issue.title}</span>
                <span className="date">{formatDateTime(props.appointment.date)}</span>
                <Spacer/>
                <span className="error">{error}</span>
                <Spacer/>
                <button type="button">Edit</button>
                <button type="button" onClick={removeAppointment}>Delete</button>
            </div>
            <div className="inner">
                <p>{props.appointment.description}</p>
                <span>{props.appointment.issue.price} NIS</span>
                <span>Duration: {secondsToHMS(props.appointment.issue.duration)}</span>
            </div>
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