import AppointmentPanel from './AppointmentPanel'
import Appointment from '../Models/Appointment'

function AppointmentQueue(props: { appointments: Appointment[] }) {
    return (
        props.appointments.forEach(appointment => {
            <AppointmentPanel appointment={appointment}/>
        })
    )
}

export default AppointmentQueue