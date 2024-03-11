export interface Object {
    name: string
    icon: any
}
export interface Message {
    name: string
    email: string
    message: string
}
export interface IProject {
    values: {
        id: number
        github: string
        externalLink: string
        title: string
        description: string
        tech:string[]
    }
}
