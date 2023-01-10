import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { GrupoPI } from "../../grupopi/entities/grupopi.entity";
import { ApiProperty } from "@nestjs/swagger/dist";

@Entity({ name: "Turma" })
export class Turma {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 500, nullable: false })
    descricao: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column()
    isAtivo: boolean;

    @ApiProperty({ type: () => GrupoPI })
    @OneToMany(() => GrupoPI, (grupoPI) => grupoPI.turma)
    grupoPI: GrupoPI;


}

