import './Styles/Account.scss'
import AppointmentManager from '../components/AppointmentManager'
import Page from '../Models/Page'
import { tryLogout } from '../Service'

const Account = (props: { setPage: React.Dispatch<React.SetStateAction<Page>> }) => {
    function logout() {
        tryLogout().then(response => {
            console.log(response)
            props.setPage(Page.Login)
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="account-container">
            <AppointmentManager logout={logout} style={{ width: '50%' }}/>
        </div>
    )
}

export default Account