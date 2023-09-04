import Appointment from '../Models/Appointment'

function AppointmentPanel(props: { appointment: Appointment }) {
    return <h2>{props.appointment.description}</h2>
}

export default AppointmentPanel