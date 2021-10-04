import React, { memo } from 'react'
import { FaTrashAlt as DeleteIcon } from 'react-icons/fa'
import type { DeleteConfirmationProps } from './_types'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    IconButton,
    Button,
    Text
} from '@chakra-ui/react'

function DeleteDeveloperConfirmation(props: DeleteConfirmationProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef<any>()

    const { id, name, onDeleteDeveloper } = props

    const handleDeleteDeveloper = () => {
        if (id) { onDeleteDeveloper(id) }

        onClose()
    }

    return (
        <>
            <IconButton
                aria-label="Deletar desenvolvedor"
                color="red.500"
                icon={ <DeleteIcon /> }
                onClick={ () => setIsOpen(true) }
            />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Deletar Desenvolvedor
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <Text fontSize="2xl" textAlign="center">
                                Deseja realmente deletar o desenvolvedor

                                <b> { name } </b>?
                            </Text>
                        </AlertDialogBody>

                        <AlertDialogFooter mt="10">
                            <Button
                                ref={cancelRef}
                                onClick={onClose}
                                width="50%"
                            >
                                Cancelar
                            </Button>

                            <Button
                                colorScheme="red"
                                width="50%"
                                ml={3}
                                onClick={ handleDeleteDeveloper }
                            >
                                Deletar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default memo(DeleteDeveloperConfirmation)
