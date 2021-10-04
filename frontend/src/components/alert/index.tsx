import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box
} from '@chakra-ui/react'
import { CustomAlertProps } from './_types'

export const LoadingAlert: React.FC = () => {
    return (
        <Alert status="warning">
            <AlertIcon />

            <Box flex="1">
                <AlertTitle>
                    Carregando...
                </AlertTitle>

                <AlertDescription>
                    Por favor, aguarde.
                </AlertDescription>
            </Box>
        </Alert>
    )
}

export const SuccessAlert: React.FC = () => {
    return (
        <Alert status="success">
            <AlertIcon />

            <Box flex="1">
                <AlertTitle>
                    Sucesso!
                </AlertTitle>

                <AlertDescription>
                    Deu tudo certo :D
                </AlertDescription>
            </Box>
        </Alert>
    )
}

export const ErrorAlert: React.FC = () => {
    return (
        <Alert status="error">
            <AlertIcon />

            <Box flex="1">
                <AlertTitle>
                    Ops, ocorreu um erro!
                </AlertTitle>

                <AlertDescription>
                    Ocorreu um erro ao processar sua requisição, por favor, tente novamente.
                </AlertDescription>
            </Box>
        </Alert>
    )
}

export const CustomAlert: React.FC<CustomAlertProps> = (props) => {
    const { status, title, description } = props

    return (
        <Alert status={ status }>
            <AlertIcon />

            <Box flex="1">
                <AlertTitle>
                    { title }
                </AlertTitle>

                <AlertDescription>
                    { description }
                </AlertDescription>
            </Box>
        </Alert>
    )
}
