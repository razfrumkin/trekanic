import { useState, CSSProperties, useEffect } from 'react'
import './Styles/AppointmentManager.scss'
import { AppointmentCollection, ObjectID } from '../Models/Appointment'
import AppointmentQueue from './AppointmentQueue'
import { getAppointments } from '../Service'
import AppointmentModal from './AppointmentModal'

const AppointmentManager = (props: { logout: () => void, style?: CSSProperties }) => {
    const [appointments, setAppointments] = useState<AppointmentCollection>({})

    const [showNewAppointmentModal, setShowNewAppointmentModal] = useState<boolean>(false)
    const [createMode, setCreateMode] = useState<boolean>(true)

    const [id, setId] = useState<ObjectID>('')
    
    function reload() {
        getAppointments().then(response => {
            setAppointments({})
            setTimeout(() => {
                setAppointments(response)
            }, 0)
        })
    }

    useEffect(() => {
        reload()
    }, [])

    function createAppointment() {
        setId('')
        setCreateMode(true)
        setShowNewAppointmentModal(true)
    }

    function editAppointment(appointmentId: ObjectID) {
        setId(appointmentId)
        setCreateMode(false)
        setShowNewAppointmentModal(true)
    }

    return (
        <div className="appointment-manager" style={props.style || {}}>
            {showNewAppointmentModal && <AppointmentModal
                isActive={showNewAppointmentModal}
                setIsActive={setShowNewAppointmentModal}
                appointments={appointments}
                setAppointments={setAppointments}
                createMode={createMode}
                id={id}
                setId={setId}
                reload={reload}
            />}
            <div className="menu">
                <span>MANAGER</span>
                <div className="buttons">
                    <button className="create-appointment-button" type="button" onClick={createAppointment}>CREATE APPOINTMENT</button>
                    <button className="logout-button" onClick={props.logout}>LOGOUT</button>
                </div>
            </div>

            <AppointmentQueue appointments={appointments} editAppointment={editAppointment} reload={reload}/>
        </div>
    )
}

export default AppointmentManager