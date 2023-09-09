import { Appointment, CategoryCollection, Issue, MechanicCollection, AppointmentCollection } from './Models/Appointment'

const appointments: { [key: string]: Appointment } = {
    'fk3k24rhj3': {
        issue: 'abc',
        date: new Date(),
        description: 'this is a description\nit\'s multiline too lol',
        customer: generateId(),
        mechanic: 'kd',
        product: 'fk3k24rhj3'
    },
    '2ff23rt': {
        issue: 'def',
        date: new Date(),
        description: 'Hello hello hi hi hi',
        customer: generateId(),
        mechanic: 'lbj',
        product: '2ff23rt'
    },
    '3unfum2': {
        issue: 'ghi',
        date: new Date(),
        description: 'hahahaah im goin insane',
        customer: generateId(),
        mechanic: 'jt',
        product: '3unfum2'
    }
}

const issues: { [key: string]: Issue } = {
    'abc': {
        code: 'abc',
        title: 'Fix this lol',
        price: 119.90,
        category: 'tyr',
        duration: 3600
    },
    'def': {
        code: 'def',
        title: 'Yet another title',
        price: 69.90,
        category: 'frm',
        duration: 1800
    },
    'ghi': {
        code: 'ghi',
        title: 'When the imposter is sus',
        price: 89.90,
        category: 'sld',
        duration: 2400
    }
}

let mechanics: MechanicCollection = {}
let loadedMechanics: boolean = false

let categories: CategoryCollection = {}
let loadedCategories: boolean = false

export async function isAuthenticated(): Promise<boolean> {
    return true
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

export async function createAppointment(title: string, description: string, mechanicId: string, categoryId: string): Promise<boolean> {
    const issueId = generateId()
    const issue: Issue = {
        code: issueId,
        title: title,
        price: 69.90,
        category: categoryId,
        duration: 3600
    }

    const id = generateId()
    const appointment: Appointment = {
        issue: issueId,
        date: new Date(),
        description: description,
        customer: generateId(),
        mechanic: mechanicId,
        product: id
    }

    issues[issueId] = issue
    appointments[id] = appointment

    return true
}

export async function editAppointment(): Promise<boolean> {


    return true
}

export async function getIssue(id: string): Promise<Issue> {
    return issues[id]
}

export async function tryLogin(username: string, password: string) {
    console.log(`Logging in using username = '${username}' and password = '${password}'...`)
}

export async function tryLogout() {
    console.log('Logging out...')
}

export async function getMechanics(): Promise<MechanicCollection> {
    if (loadedMechanics) return mechanics

    // request here
    await timeout(500)
    loadedMechanics = true
    return mechanics = {
        'lbj': 'LeBron James',
        'kd': 'Kevin Durant',
        'kai': 'Kyrie Irving',
        'mj': 'Michael Jordan',
        'jt': 'Jayson Tatum'
    }
}

export async function getMechanic(id: string): Promise<string> {
    if (loadedMechanics) return mechanics[id]
    return getMechanics().then(response => {
        return response[id]
    })
}

export async function getCategories(): Promise<CategoryCollection> {
    if (loadedCategories) return categories

    // request here
    timeout(500)
    loadedCategories = true
    return categories = {
        'tyr': 'Tires',
        'sld': 'Shield',
        'frm': 'Frame'
    }
}

export async function getCategory(id: string): Promise<string> {
    if (loadedCategories) return categories[id]
    return getCategories().then(response => {
        return response[id]
    })
}

export async function timeout(milliseconds: number): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    })
}

function generateId(length: number = 16): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''

    for (let i = 0; i < length; i += 1) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters.charAt(randomIndex)
    }

    return result
}