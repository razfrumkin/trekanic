import { Appointment, Issue, AppointmentCollection, ObjectID } from './Models/Appointment';
import { appointments, RawIssue, rawIssues } from './Database'
import { HashMap } from './Utilities'

export async function isAuthenticated(): Promise<boolean> {
    return true
}

export async function getIssueCategories(): Promise<HashMap<RawIssue[]>> {
    const result: HashMap<RawIssue[]> = {}

    for (const issue of rawIssues) {
        if (issue.category.id in result) result[issue.category.id].push(issue)
        else result[issue.category.id] = [issue]
    }

    return result
}

export async function getAppointments(): Promise<AppointmentCollection> {
    console.log('Loading appointments...')

    // request here
    await timeout(500)
    return appointments
}

export async function deleteAppointment(id: string): Promise<boolean> {
    console.log(`Deleting appointment with id: '${id}'`)

    // request here
    await timeout(500)
    delete appointments[id]
    return true
}

// issue, date, description, product
export async function createAppointment(issueId: ObjectID, date: Date, description: string, product: string): Promise<boolean> {
    let issue: Issue | null = null

    rawIssues.forEach(value => {
        if (value.id === issueId) {
            issue = {
                id: issueId,
                code: value.code,
                title: value.title,
                price: value.price,
                category: value.category,
                duration: 1
            }

            return
        }
    })
    
    const appointment: Appointment = {
        id: generateId(),
        issue: issue!,
        date: date,
        description: description,
        customer: generateId(),
        mechanic: '',
        product: product
    }

    appointments[appointment.id] = appointment

    return true
}

export async function editAppointment(): Promise<boolean> {


    return true
}

export async function tryLogin(username: string, password: string) {
    console.log(`Logging in using username = '${username}' and password = '${password}'...`)
}

export async function tryLogout() {
    console.log('Logging out...')
}

export async function timeout(milliseconds: number): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    })
}

export function generateId(length: number = 16): ObjectID {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''

    for (let i = 0; i < length; i += 1) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters.charAt(randomIndex)
    }

    return result
}