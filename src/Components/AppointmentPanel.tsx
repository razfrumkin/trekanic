import './Styles/AppointmentPanel.scss'
import { Appointment, ObjectID } from '../Models/Appointment'
import { deleteAppointment } from '../Service'
import { formatTime, months } from '../Utilities'

const AppointmentPanel = (props: { appointment: Appointment, editAppointment: (appointmentId: ObjectID) => void, reload: () => void }) => {
    function removeAppointment() {
        deleteAppointment(props.appointment.id).then(response => {
            if (response) {
                props.reload()
            }
        })
    }

    return (
        <div className="appointment-panel">
            <div className="buttons">
                <button className="edit-button" type="button" onClick={() => props.editAppointment(props.appointment.id)}>EDIT</button>
                <button className="delete-button" type="button" onClick={removeAppointment}>DELETE</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="title">{props.appointment.issue.title}</span>
                <span className="date">{formatDateTime(props.appointment.date)}</span>
            </div>

            <p className="description">{props.appointment.description}</p>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span className="length-label">LENGTH</span>
                    <span className="length">{Math.floor(props.appointment.issue.duration / 60000)} MINUTES</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span className="price-label">PRICE</span>
                    <span className="price">{props.appointment.issue.price} NIS</span>
                </div>
            </div>
        </div>
    )
}

function formatDateTime(date: Date): string {
    return `${months[date.getMonth()]} ${formatTime(date.getDate())} ${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`
}

export default AppointmentPanel