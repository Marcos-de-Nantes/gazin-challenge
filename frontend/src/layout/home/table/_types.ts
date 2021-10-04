import type { DataContent } from '../../../contexts/DevelopersContexts/_types'
import type { DefaultDeveloperFormProps } from '../form/_types'

export interface DataTableProps extends DefaultDeveloperFormProps {
    data: Array<DataContent>
    onDeleteDeveloper: (id: number) => void
}
