import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateDevelopers1632792173442 implements MigrationInterface {
    private tableName: string = 'desenvolvedores'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'sexo',
                        type: 'char',
                        length: '1',
                        isNullable: false
                    },
                    {
                        name: 'idade',
                        type: 'integer',
                        isNullable: false
                    },
                    {
                        name: 'hobby',
                        type: 'varchar',
                        length: '100',
                        isNullable: true
                    },
                    {
                        name: 'datanascimento',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'data_inc',
                        type: 'timestamp',
                        default: 'current_timestamp'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName)
    }
}
