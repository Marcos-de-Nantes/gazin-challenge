import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import type { DefaultDeveloperFormProps } from './_types'
import { FaSave as SaveIcon } from 'react-icons/fa'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    RadioGroup,
    HStack,
    Radio,
    Textarea,
    Button
} from '@chakra-ui/react'

export default function DefaultDeveloperForm(props: DefaultDeveloperFormProps) {
    const {
        name,
        gender,
        birthdate,
        hobby,
        onSubmitDeveloperForm
    } = props

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
    } = useForm()

    return (
        <form onSubmit={ handleSubmit(onSubmitDeveloperForm) }>
            <FormControl
                id="FieldDeveloperName"
                mt={4}
                isInvalid={ errors.name }
            >
                <FormLabel>Nome</FormLabel>

                <Input
                    type="text"
                    placeholder="Ex.: João de Abreu"
                    required
                    maxLength={ 50 }
                    defaultValue={ name }
                    {...register('name', {
                        required: 'Preencha o nome do desenvolvedor'
                    })}
                />

                <FormErrorMessage>
                    { errors.name && errors.name.message }
                </FormErrorMessage>
            </FormControl>

            <Controller
                name="gender"
                control={ control }
                defaultValue={ gender ?? 'F' }
                rules={{ required: 'Preencha o gênero' }}
                render={
                    ({ field }) => (
                        <FormControl
                            id="FieldDeveloperGender"
                            as="fieldset"
                            isInvalid={ errors.gender }
                            mt={4}
                            {...field}
                        >
                            <FormLabel as="legend">Gênero:</FormLabel>
                            <RadioGroup defaultValue={ gender ?? 'F' }>
                                <HStack spacing="24px">
                                    <Radio value="F">Feminino</Radio>
                                    <Radio value="M">Masculino</Radio>
                                </HStack>
                            </RadioGroup>

                            <FormErrorMessage>
                                { errors.gender && errors.gender.message }
                            </FormErrorMessage>
                        </FormControl>
                    )
                }
            />

            <FormControl
                id="FieldDeveloperBirthdate"
                mt={4}
                isInvalid={ errors.birthdate }
            >
                <FormLabel>Data de Nascimento</FormLabel>

                <Input
                    type="date"
                    min="1900-01-01"
                    required
                    defaultValue={ String(birthdate) }
                    max={ new Date().toISOString().split('T')[0] }
                    {...register('birthdate', {
                        required: 'Preencha a data de nascimento',
                        min: { value: '1900-01-01', message: 'O ano mínimo é 1900' }
                    })}
                />

                <FormErrorMessage>
                    { errors.birthdate && errors.birthdate.message }
                </FormErrorMessage>
            </FormControl>

            <FormControl id="FieldDeveloperHobby" mt={4}>
                <FormLabel>Hobby</FormLabel>

                <Textarea
                    resize="none"
                    placeholder="Ex.: Assistir séries, animações e filmes"
                    rows={ 3 }
                    maxLength={ 80 }
                    defaultValue={ hobby }
                    {...register('hobby')}
                />

                <FormErrorMessage>
                    { errors.birthdate && errors.birthdate.message }
                </FormErrorMessage>
            </FormControl>

            <FormControl mt={10}>
                <Button
                    type="submit"
                    colorScheme="green"
                    width="100%"
                    title="Clique aqui para salvar as informações"
                    isLoading={ isSubmitting }
                    mr={3}
                    leftIcon={ <SaveIcon /> }
                >
                    Salvar
                </Button>
            </FormControl>
        </form>
    )
}
