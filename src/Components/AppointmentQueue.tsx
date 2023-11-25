import AppointmentPanel from './AppointmentPanel'
import { AppointmentCollection, ObjectID } from '../Models/Appointment'

const AppointmentQueue = (props: { appointments: AppointmentCollection, editAppointment: (appointmentId: ObjectID) => void, reload: () => void }) => {    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {
                Object.values(props.appointments).map(appointment => {
                    return <AppointmentPanel key={appointment.id} appointment={appointment} editAppointment={props.editAppointment} reload={props.reload}/>
                })
            }
        </div>
    )
}

export default AppointmentQueue