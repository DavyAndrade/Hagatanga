import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DeleteResult } from "typeorm"
import { GrupoPI } from "../entities/grupopi.entity";


@Injectable()
export class GrupoPIService {
    constructor(
        @InjectRepository(GrupoPI)
        private grupoRepository: Repository<GrupoPI>
    ) { }

    // Encontrar os Grupos do Banco de Dados
    async findAll(): Promise<GrupoPI[]> {
        return await this.grupoRepository.find({
            relations: {
                turma: true,
                projeto: true
            }
        })
    }

    // Encontrar pelo ID
    async findById(id: number): Promise<GrupoPI> {
        let grupo = await this.grupoRepository.findOne({
            where: {
                id
            },
            relations: {
                turma: true,
                projeto: true
            }
        });
        if (!grupo) {
            throw new HttpException('Id relacionado a Projeto não identificado.', HttpStatus.NOT_FOUND)
        }
        return grupo;
    }


    // Encontrar pelo Número do Grupo
    async findByGroup(numeroGrupo: number): Promise<GrupoPI> {
        let grupo = await this.grupoRepository.findOne({
            where: {
                numeroGrupo
            },
            relations: {
                turma: true,
                projeto: true
            }
        });
        if (!grupo) {
            throw new HttpException('Id relacionado a Projeto não identificado.', HttpStatus.NOT_FOUND)
        }
        return grupo;
    }

    // Criar um Grupo
    async create(grupo: GrupoPI): Promise<GrupoPI> {
        return await this.grupoRepository.save(grupo)
    }

    // Atualizar um Grupo
    async update(grupo: GrupoPI): Promise<GrupoPI> {
        let buscaGrupo: GrupoPI = await this.findById(grupo.id)

        if (!buscaGrupo || !grupo.id) {
            throw new HttpException('Id relacionado a projeto não existe', HttpStatus.NOT_FOUND)
        }
        return await this.grupoRepository.save(grupo)
    }

    // Deletar um Grupo
    async delete(id: number): Promise<DeleteResult> {
        let buscaGrupo: GrupoPI = await this.findById(id)

        if (!buscaGrupo) {
            throw new HttpException("Id relacionado ao projeto não existe.", HttpStatus.NOT_FOUND)
        }
        return await this.grupoRepository.delete(id)
    }

}