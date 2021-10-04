import { Connection, createConnection, getConnectionOptions } from 'typeorm'

export default async (): Promise<Connection> => {
    const { NODE_ENV } = process.env

    const defaultOptions = await getConnectionOptions()

    return createConnection(
        Object.assign(defaultOptions, {
            database: NODE_ENV === 'test' ? 'gazin_challenge_tests' : defaultOptions.database
        })
    )
}
