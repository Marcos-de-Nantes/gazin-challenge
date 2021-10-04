import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('desenvolvedores')
class Developer {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'nome', type: 'varchar', nullable: false })
    name: string

    @Column({ name: 'sexo', type: 'char', nullable: false })
    gender: string

    @Column({ name: 'idade', type: 'integer', nullable: false })
    age: number

    @Column({ name: 'hobby', type: 'varchar', nullable: false })
    hobby: string

    @Column({ name: 'datanascimento', type: 'date', nullable: false })
    birthdate: Date

    @CreateDateColumn({ name: 'data_inc', type: 'timestamp' })
    included_at: Date
}

export { Developer }
