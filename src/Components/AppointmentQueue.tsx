import AppointmentPanel from './AppointmentPanel'
import { AppointmentCollection } from '../Models/Appointment'

const AppointmentQueue = (props: { appointments: AppointmentCollection, reload: () => void }) => {
    return (
        <>
            {
                Object.values(props.appointments).map(appointment => {
                    return <AppointmentPanel key={appointment.product} appointment={appointment} reload={props.reload}/>
                })
            }
        </>
    )
}

export default AppointmentQueue