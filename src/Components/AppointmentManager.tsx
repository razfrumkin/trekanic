import { CSSProperties } from 'react'
import './Styles/AppointmentManager.scss'

const AppointmentManager = (props: { style?: CSSProperties }) => {
    return (
        <div className="appointment-manager" style={props.style || {}}>
            <h1>Manager</h1>
        </div>
    )
}

export default AppointmentManager