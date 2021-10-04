import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import DevelopersForm from '../layout/home/form'
import { OptionalDataContent } from '../contexts/DevelopersContexts/_types'

afterEach(cleanup)

describe('Developers Form', () => {
    const onSubmitDeveloperForm = (infos: OptionalDataContent) => {}

    const wrapper = render(<DevelopersForm onSubmitDeveloperForm={ onSubmitDeveloperForm } />)

    const FieldName = screen.getByRole('textbox', { name: /nome/i })
    const FieldFemaleGender = screen.getByRole('radio', { name: /feminino/i })
    const FieldMaleGender = screen.getByRole('radio', { name: /masculino/i })
    const FieldBirthdate = screen.getByLabelText(/data de nascimento/i)
    const FieldHobby = screen.getByRole('textbox', { name: /hobby/i })
    const ButtonSubmit = screen.getByRole('button', { name: /salvar/i })

    it('Should fields be inside form', () => {
        expect(FieldName).toBeInTheDocument()
        expect(FieldFemaleGender).toBeInTheDocument()
        expect(FieldMaleGender).toBeInTheDocument()
        expect(FieldBirthdate).toBeInTheDocument()
        expect(FieldHobby).toBeInTheDocument()
        expect(ButtonSubmit).toBeInTheDocument()
    })

    it('Must all fields be enable', () => {
        expect(FieldName).toBeEnabled()
        expect(FieldFemaleGender).toBeEnabled()
        expect(FieldMaleGender).toBeEnabled()
        expect(FieldBirthdate).toBeEnabled()
        expect(FieldHobby).toBeEnabled()
        expect(ButtonSubmit).toBeEnabled()
    })

    it('Must some fields be required', () => {
        expect(FieldName).toBeRequired()
        expect(FieldBirthdate).toBeRequired()
    })

    it('Should validate form by passing only one required field', () => {
        const mockSave = jest.fn()

        fireEvent.input(FieldName, {
            target: {
                value: 'Teste'
            }
        })

        fireEvent.submit(ButtonSubmit)

        expect(mockSave).not.toBeCalled()
    })

    it('To match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
