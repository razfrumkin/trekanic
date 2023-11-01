import { useState, CSSProperties, useEffect } from 'react'
import './Styles/AppointmentManager.scss'
import { AppointmentCollection, ObjectID } from '../Models/Appointment'
import AppointmentQueue from './AppointmentQueue'
import { getAppointments } from '../Service'
import AppointmentModal from './AppointmentModal'

const AppointmentManager = (props: { style?: CSSProperties }) => {
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
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', gap: '25px' }}>
                <span style={{ fontSize: '32px' }}>Manager</span>
                <button type="button" style={{ fontSize: '16px', padding: '10px' }} onClick={createAppointment}>Create Appointment</button>
            </div>
            <AppointmentQueue appointments={appointments} editAppointment={editAppointment} reload={reload}/>
        </div>
    )
}

export default AppointmentManager