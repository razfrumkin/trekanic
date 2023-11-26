import './Styles/AppointmentModal.scss'
import ReactModal from 'react-modal'
import { AppointmentCollection, Appointment, ObjectID } from '../Models/Appointment'
import { useEffect, useState } from 'react'
import { createAppointment, editAppointment, getIssueCategories } from '../Service'
import { HashMap } from '../Utilities'
import { RawIssue, AppointmentTime } from '../Database'
import TimeInput from './TimeInput'

type AppointmentModalProperties = {
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
    appointments: AppointmentCollection
    setAppointments: React.Dispatch<React.SetStateAction<AppointmentCollection>>
    createMode: boolean
    id: ObjectID
    setId: React.Dispatch<React.SetStateAction<string>>,
    reload: () => void
}

const AppointmentModal = (props: AppointmentModalProperties) => {
    const appointment: Appointment | null = props.appointments[props.id] ?? null
    const [issueCategories, setIssueCategories] = useState<HashMap<RawIssue[]>>({})

    const [description, setDescription] = useState<string>('')
    const [issueCategory, setIssueCategory] = useState<ObjectID>('?')
    const [issueIndex, setIssueIndex] = useState<number>(-1)
    const [time, setTime] = useState<AppointmentTime | null>(null)

    useEffect(() => {
        getIssueCategories().then(response => {
            setIssueCategories(response)

            if (appointment === null) {
                setDescription('')
                setIssueCategory('?')
                setIssueIndex(-1)
                setTime(null)
            } else {
                setDescription(appointment.description)
                setIssueCategory(appointment.issue.category.id)

                const issues = response[appointment.issue.category.id]
                let issueIndex = -1
                issues.forEach((issue, index) => {
                    if (issue.id === appointment.issue.id) {
                        issueIndex = index
                        return
                    }
                })
                setIssueIndex(issueIndex)

                setTime({ date: appointment.date, duration: appointment.issue.duration })
            }
        })
    }, [])

    function submit() {
        const issueId = issueCategories[issueCategory][issueIndex].id

        if (props.createMode) {
            createAppointment(issueId, time!, description, 'product lol').then(response => {
                if (response) {
                    props.reload()
                    cancel()
                }
            })
            return
        }

        editAppointment(props.id, issueId, time!, description, 'product lol').then(response => {
            if (response) {
                props.reload()
                cancel()
            }
        })
    }

    function cancel() {
        props.setIsActive(false)
    }
    
    function changeIssueCategory(category: string) {
        setIssueCategory(category)
        setIssueIndex(-1)
    }

    return (
        <ReactModal
            isOpen={props.isActive}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    border: 'none',
                    borderRadius: '15px',
                }
            }}
        >
            <form className="appointment-form">
                <h2>{props.createMode ? 'New Appointment' : 'Edit Appointment'}</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="description" style={{ fontSize: '22px'}}>Description</label>
                    <textarea id="description" value={description} onChange={event => setDescription(event.target.value)} placeholder="Description here..."/>
                </div>

                <hr style={{ width: '100%', borderTop: '3px solid #ccc' }}/>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label htmlFor="issue-categories-id" style={{ fontSize: '18px' }}>Category</label>
                        <select id="issue-categories-id" style={{ fontSize: '20px', padding: '5px' }} value={issueCategory} onChange={event => changeIssueCategory(event.target.value)}>
                            <option key="?" selected disabled value={'?'}>Select Category</option>
                            {
                                Object.keys(issueCategories).map(id => {
                                    return <option key={id} value={id}>{issueCategories[id][0].category.name}</option>
                                })
                            }
                        </select>
                    </div>

                    {
                        issueCategory in issueCategories ?
                        <>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label htmlFor="issue-index" style={{ fontSize: '18px' }}>Issue</label>
                                <select id="issue-index" style={{ fontSize: '20px', padding: '5px' }} value={issueIndex} onChange={event => setIssueIndex(Number(event.target.value))}>
                                    <option key="?" selected disabled value={-1}>Select Issue</option>
                                    {
                                        issueCategories[issueCategory].map((issue, index) => {
                                            return <option key={index} value={index}>{`${issue.title} - ${issue.price}₪`}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </> : <></>
                    }
                </div>

                <TimeInput time={time} setTime={setTime}/>

                <div className="buttons">
                    <button className="submit-button" type="button" onClick={submit}>SAVE</button>
                    <button className="cancel-button" type="button" onClick={cancel}>CANCEL</button>
                </div>
            </form>
        </ReactModal>
    )
}

export default AppointmentModal