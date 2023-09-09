export type AppointmentCollection = {
    [key: string]: Appointment
}

export type Appointment = {
    issue: string
    date: Date
    description: string
    customer: string
    mechanic: string
    product: string
}

export type Issue = {
    code: string
    title: string
    price: number
    category: string
    duration: number
}

export type MechanicCollection = {
    [key: string]: string
}

export type CategoryCollection = {
    [key: string]: string
}