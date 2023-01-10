import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { GrupoPI } from "../../grupopi/entities/grupopi.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "Projeto" })
export class Projeto {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 50, nullable: false })
    nomeProjeto: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 500, nullable: false })
    linkProjeto: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 500, nullable: false })
    pitProjeto: string;

    @ApiProperty({type: () => GrupoPI})
    @ManyToOne(() => GrupoPI, (grupoPI) => grupoPI.projeto, {
        onDelete: "CASCADE"
    })
    grupoPI: GrupoPI
}

