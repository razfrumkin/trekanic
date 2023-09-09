export type AppointmentCollection = {
    [key: string]: Appointment
}

export type ObjectID = string

export type Appointment = {
    id: ObjectID
    issue: Issue
    date: Date
    description: string
    customer: string
    mechanic: ObjectID
    product: string
}

export type Issue = {
    id: ObjectID
    code: number
    title: string
    price: number | null
    category: IssueCategory
    duration: number
}

export type IssueCategory = {
    id: ObjectID
    name: string
}