import { OptionalDataContent } from '../../../contexts/DevelopersContexts/_types'

export interface DefaultDeveloperFormProps extends OptionalDataContent {
    onSubmitDeveloperForm: (infos: OptionalDataContent) => void
}
