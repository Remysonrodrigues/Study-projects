import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn  } from 'typeorm';

@Entity()
export default class Tasks {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

};