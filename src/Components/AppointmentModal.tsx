import ReactModal from 'react-modal'
import { AppointmentCollection, Appointment, ObjectID } from '../Models/Appointment';
import { useEffect, useState } from 'react'
import { createAppointment, editAppointment, getIssueCategories } from '../Service'
import { HashMap } from '../Utilities'
import { RawIssue } from '../Database';

type AppointmentModalProperties = {
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
    appointments: AppointmentCollection
    setAppointments: React.Dispatch<React.SetStateAction<AppointmentCollection>>
    createMode: boolean
    id: string
    setId: React.Dispatch<React.SetStateAction<string>>,
    reload: () => void
}

const AppointmentModal = (props: AppointmentModalProperties) => {
    const appointment: Appointment | null = props.appointments[props.id] ?? null
    const [issueCategories, setIssueCategories] = useState<HashMap<RawIssue[]>>({})

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [issueCategory, setIssueCategory] = useState<ObjectID>('?')
    const [issueIndex, setIssueIndex] = useState<number>(-1)

    useEffect(() => {
        if (appointment === null) {
            setTitle('')
            setDescription('')
        } else {
            setTitle(appointment.issue.title)
            setDescription(appointment.description)
        }

        getIssueCategories().then(response => {
            setIssueCategories(response)
            console.log(response)
        })
    }, [])

    function submit() {
        if (props.createMode) {
            createAppointment(issueCategories[issueCategory][issueIndex].id, new Date(), description, 'product lol').then(response => {
                if (response) {
                    props.reload()
                    cancel()
                }
            })
            return
        }

        editAppointment().then(response => {
            if (response) {
                props.reload()
                cancel()
            }
        })
    }

    function cancel() {
        props.setIsActive(false)
    }

    return (
        <ReactModal
            isOpen={props.isActive}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    border: '1px solid black',
                    borderRadius: '15px',
                }
            }}
        >
            <h2>New Appointment</h2>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="title" style={{ fontSize: '20px'}}>Title</label>
                    <input type="text" style={{ fontSize: '24px', padding: '10px' }} id="title" value={title} onChange={event => setTitle(event.target.value)} placeholder="Title here..."/>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="description" style={{ fontSize: '22px'}}>Description</label>
                    <textarea id="title" style={{ fontSize: '24px', padding: '10px' }} value={description} onChange={event => setDescription(event.target.value)} placeholder="Description here..."/>
                </div>

                <hr style={{ width: '100%', borderTop: '3px solid #ccc' }}/>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label htmlFor="issue-categories-id" style={{ fontSize: '18px' }}>Category</label>
                        <select id="issue-categories-id" style={{ fontSize: '20px', padding: '5px' }} value={issueCategory} onChange={event => setIssueCategory(event.target.value)}>
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

                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <button type="button" style={{ fontSize: '20px', padding: '10px' }} onClick={submit}>Save</button>
                    <button type="button" style={{ fontSize: '20px', padding: '10px' }} onClick={cancel}>Cancel</button>
                </div>
            </form>
        </ReactModal>
    )
}

export default AppointmentModal