import React from 'react'
import type { DataTableProps } from './_types'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Box
} from '@chakra-ui/react'
import DeleteDeveloperConfirmation from '../actions/delete'
import EditDeveloper from '../actions/edit'

export default function DataTable(props: DataTableProps) {
    const { data, onSubmitDeveloperForm, onDeleteDeveloper } = props

    return (
        <Box overflow="auto">
            <Table variant="striped">
                <TableCaption>Lista de Desenvolvedores</TableCaption>

                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th textAlign="center">Gênero</Th>
                        <Th textAlign="center">Idade</Th>
                        <Th textAlign="center">Data Nascimento</Th>
                        <Th textAlign="center" />
                        <Th textAlign="center" />
                    </Tr>
                </Thead>

                <Tbody>
                    {
                        data.map((item) => (
                            <Tr key={ item.id }>
                                <Td>
                                    { item.name }
                                </Td>

                                <Td textAlign="center">
                                    { item.gender === 'M' ? 'Masculino' : 'Feminino' }
                                </Td>

                                <Td textAlign="center">
                                    { item.age }
                                </Td>

                                <Td textAlign="center">
                                    { new Date(item.birthdate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                                </Td>

                                <Td>
                                    <EditDeveloper
                                        id={ item.id }
                                        age={ item.age }
                                        birthdate={ item.birthdate }
                                        gender={ item.gender }
                                        hobby={ item.hobby }
                                        name={ item.name }
                                        onSubmitDeveloperForm={ onSubmitDeveloperForm }
                                    />
                                </Td>

                                <Td>
                                    <DeleteDeveloperConfirmation
                                        id={ item.id }
                                        name={ item.name }
                                        onDeleteDeveloper={ onDeleteDeveloper }
                                    />
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </Box>
    )
}
