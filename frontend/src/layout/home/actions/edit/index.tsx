import React, { memo } from 'react'
import type { OptionalDataContent } from '../../../../contexts/DevelopersContexts/_types'
import type { DefaultDeveloperFormProps } from '../../form/_types'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    IconButton,
    useDisclosure
} from '@chakra-ui/react'
import { FaUserEdit as EditIcon } from 'react-icons/fa'
import DefaultDeveloperForm from '../../form'

function EditDeveloper(props: DefaultDeveloperFormProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef<any>()

    const { id, name, gender, birthdate, hobby, onSubmitDeveloperForm } = props

    const handleSubmitEditedDeveloper = (infos: OptionalDataContent) => {
        onSubmitDeveloperForm({ id, ...infos })

        onClose()
    }

    return (
        <>
            <IconButton
                aria-label="Editar este desenvolvedor"
                background="yellow.400"
                color="white"
                icon={ <EditIcon /> }
                onClick={ onOpen }
            />

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Editando desenvolvedor: { name }
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody pb={6}>
                        <DefaultDeveloperForm
                            birthdate={ birthdate }
                            gender={ gender }
                            hobby={ hobby }
                            name={ name }
                            onSubmitDeveloperForm={ handleSubmitEditedDeveloper }
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default memo(EditDeveloper)
