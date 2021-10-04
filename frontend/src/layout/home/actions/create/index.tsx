import React, { useRef } from 'react'
import DefaultDeveloperForm from '../../form'
import { FaUserPlus as CreateDevIcon } from 'react-icons/fa'
import type { DefaultDeveloperFormProps } from '../../form/_types'
import type { OptionalDataContent } from '../../../../contexts/DevelopersContexts/_types'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'

export default function CreateDeveloper(props: DefaultDeveloperFormProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef<any>()

    const { onSubmitDeveloperForm } = props

    const handleSubmitNewDeveloper = (infos: OptionalDataContent) => {
        onSubmitDeveloperForm(infos)

        onClose()
    }

    return (
        <>
            <Button
                background="blue.400"
                color="white"
                title="Cadastrar um novo desenvolvedor"
                onClick={ onOpen }
                leftIcon={ <CreateDevIcon /> }
            >
                Novo
            </Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Inserindo novo desenvolvedor
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody pb={6}>
                        <DefaultDeveloperForm
                            onSubmitDeveloperForm={ handleSubmitNewDeveloper }
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
