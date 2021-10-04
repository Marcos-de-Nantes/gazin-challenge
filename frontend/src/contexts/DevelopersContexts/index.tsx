import React, { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import api from '../../services/api'
import type { DataContent, DevelopersContextsProps, DevelopersProviderProps, StatusList } from './_types'

export const DevelopersContexts = createContext({} as DevelopersContextsProps)

export default function DevelopersProvider({ children }: DevelopersProviderProps) {
    const router = useRouter()

    const [requestStatus, setRequestStatus] = useState<StatusList>(null)

    // create developer
    const handleCreateDeveloper = async (infos: DataContent) => {
        setRequestStatus('loading')

        await api.post('/developers', infos)
            .then(() => setRequestStatus('success'))
            .catch(() => setRequestStatus('error'))
    }

    // edit developer
    const handleEditDeveloper = async (infos: DataContent) => {
        setRequestStatus('loading')

        await api.put('/developers', infos)
            .then(() => setRequestStatus('success'))
            .catch(() => setRequestStatus('error'))
    }

    // delete developer
    const handleDeleteDeveloper = async (id: number) => {
        setRequestStatus('loading')

        await api.delete(`/developers/${id}`)
            .then(() => setRequestStatus('success'))
            .catch(() => setRequestStatus('error'))
    }

    useEffect(() => {
        if (requestStatus === 'success') {
            setTimeout(() => {
                setRequestStatus(null)

                router.replace(router.asPath)
            }, 1000)
        }
    }, [requestStatus])

    return (
        <DevelopersContexts.Provider
            value={{
                requestStatus,
                handleCreateDeveloper,
                handleEditDeveloper,
                handleDeleteDeveloper
            }}
        >
            { children }
        </DevelopersContexts.Provider>
    )
}
