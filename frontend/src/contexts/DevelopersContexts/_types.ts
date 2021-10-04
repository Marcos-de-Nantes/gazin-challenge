import { ReactNode } from 'react'

export type StatusList = null | 'loading' | 'success' | 'error'

export interface DataContent {
    id?: number
    name: string
    gender: 'M' | 'F'
    age?: number
    hobby: string
    birthdate: Date
}

type RewritedDataContent = {
    [K in keyof DataContent]?: DataContent[K]
}

export interface OptionalDataContent extends RewritedDataContent {}

export interface DevelopersContextsProps {
    requestStatus: StatusList
    handleCreateDeveloper: (infos: OptionalDataContent) => void
    handleEditDeveloper: (infos: OptionalDataContent) => void
    handleDeleteDeveloper: (id: number) => void
}

export interface DevelopersProviderProps {
    children: ReactNode
}
