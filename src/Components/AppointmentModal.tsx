import ReactModal from 'react-modal'
import { AppointmentCollection, Appointment, Issue, MechanicCollection, CategoryCollection } from '../Models/Appointment'
import { useEffect, useState } from 'react'
import { createAppointment, editAppointment, getCategories, getIssue, getMechanics } from '../Service'
import Spacer from './Spacer'

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
    const [issue, setIssue] = useState<Issue | null>(null)
    const [mechanics, setMechanics] = useState<MechanicCollection>({})
    const [categories, setCategories] = useState<CategoryCollection>({})

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [mechanicId, setMechanicId] = useState<string>('?')
    const [categoryId, setCategoryId] = useState<string>('?')

    useEffect(() => {
        getMechanics().then(response => {
            setMechanics(response)
        })

        getCategories().then(response => {
            setCategories(response)
        })

        if (appointment === null) return
        getIssue(appointment.issue).then(response => {
            setIssue(response)

            setTitle(issue!.title)
            setDescription(appointment.description)
            setMechanicId(appointment.mechanic)
            setCategoryId(issue!.category)
        })
    }, [])

    function submit() {
        if (props.createMode) {
            createAppointment(title, description, mechanicId, categoryId).then(response => {
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

                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label htmlFor="appointment-mechanic-id" style={{ fontSize: '18px' }}>Mechanic</label>
                        <select id="appointment-mechanic-id" style={{ fontSize: '20px', padding: '5px' }} value={mechanicId} onChange={event => setMechanicId(event.target.value)}>
                            <option key="?" selected disabled value={'?'}>Select mechanic</option>
                            {
                                Object.keys(mechanics).map(id => {
                                    return <option key={id} value={id}>{mechanics[id]}</option>
                                })
                            }
                        </select>
                    </div>

                    <Spacer/>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <label htmlFor="appointment-category-id" style={{ fontSize: '18px' }}>Category</label>
                        <select id="appointment-category-id" style={{ fontSize: '20px', padding: '5px' }} value={categoryId} onChange={event => setCategoryId(event.target.value)}>
                            <option key="?" selected disabled value={'?'}>Select category</option>
                            {
                                Object.keys(categories).map(id => {
                                    return <option key={id} value={id}>{categories[id]}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <hr style={{ width: '100%', borderTop: '3px solid #ccc' }}/>

                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <button type="button" style={{ fontSize: '20px', padding: '10px' }} onClick={submit}>Save</button>
                    <button type="button" style={{ fontSize: '20px', padding: '10px' }} onClick={cancel}>Cancel</button>
                </div>
            </form>
        </ReactModal>
    )
}

export default AppointmentModal