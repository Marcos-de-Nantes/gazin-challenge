import { DataContent } from '../../../../contexts/DevelopersContexts/_types'

type OptionalDataContent = {
    [K in keyof DataContent]?: DataContent[K];
}

export interface DeleteConfirmationProps extends OptionalDataContent {
    onDeleteDeveloper: (id: number) => void
}
