import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Projeto } from "../../Projeto/entities/projeto.entity";
import { Turma } from "../../Turma/entities/turma.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "GrupoPI" })
export class GrupoPI {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ nullable: false })
    numeroGrupo: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 500, nullable: false })
    maisInfos: string;

    @ApiProperty({ type: () => Projeto })
    @OneToMany(() => Projeto, (projeto) => projeto.grupoPI)
    projeto: Projeto[];

    @ApiProperty({ type: () => Turma })
    @ManyToOne(() => Turma, (turma) => turma.grupoPI, {
        onDelete: "CASCADE"
    })
    turma: Turma;

}

