import './Styles/AppointmentPanel.scss'
import { Appointment, ObjectID } from '../Models/Appointment'
import { useState } from 'react'
import { deleteAppointment } from '../Service'
import { formatTime, months } from '../Utilities'
import Spacer from './Spacer'

const AppointmentPanel = (props: { appointment: Appointment, editAppointment: (appointmentId: ObjectID) => void, reload: () => void }) => {
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
                <button type="button" onClick={() => props.editAppointment(props.appointment.id)}>Edit</button>
                <button type="button" onClick={removeAppointment}>Delete</button>
            </div>
            <div className="inner">
                <p style={{ margin: '0px', padding: '0px' }}>{props.appointment.description}</p>
                <span>{props.appointment.issue.price} NIS</span>
                <span>Duration: {Math.floor(props.appointment.issue.duration / 60000)} minutes</span>
            </div>
        </div>
    )
}

function formatDateTime(date: Date): string {
    return `${months[date.getMonth()]} ${formatTime(date.getDate())} ${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`
}

export default AppointmentPanel