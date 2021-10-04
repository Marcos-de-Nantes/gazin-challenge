import React, { Fragment, useContext } from 'react'
import Head from 'next/head'
import api from '../services/api'
import DataTable from '../layout/home/table'
import CreateDeveloper from '../layout/home/actions/create'
import { Box, Container } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import type { DataContent } from '../contexts/DevelopersContexts/_types'
import DevelopersProvider, { DevelopersContexts } from '../contexts/DevelopersContexts'
import { ErrorAlert, LoadingAlert, SuccessAlert } from '../components/alert'

interface HomeProps {
    data: Array<DataContent>
}

export default function Home(props: HomeProps) {
    const { data } = props

    return (
        <DevelopersProvider>
            <HomeContent data={ data } />
        </DevelopersProvider>
    )
}

function HomeContent(props: HomeProps) {
    const {
        handleCreateDeveloper,
        handleEditDeveloper,
        handleDeleteDeveloper,
        requestStatus
    } = useContext(DevelopersContexts)

    return (
        <Fragment>
            <Head>
                <title>Gazin Challenge</title>
            </Head>

            <Container maxW="container.lg">
                <Box w="100%" p={ 4 }>
                    <CreateDeveloper onSubmitDeveloperForm={ handleCreateDeveloper } />
                </Box>

                <Box w="100%" p={ 4 } mt={ 5 }>
                    <DataTable
                        data={ props.data ?? [] }
                        onSubmitDeveloperForm={ handleEditDeveloper }
                        onDeleteDeveloper={ handleDeleteDeveloper }
                    />
                </Box>

                {
                    (requestStatus === 'loading' && <LoadingAlert />) ||
                    (requestStatus === 'success' && <SuccessAlert />) ||
                    (requestStatus === 'error' && <ErrorAlert />)
                }
            </Container>
        </Fragment>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await api.get('/developers')

    return {
        props: { data }
    }
}
