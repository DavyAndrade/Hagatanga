import { Controller, Get, HttpStatus, HttpCode, Param, ParseIntPipe, Body, Post, Delete, UseGuards, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { GrupoPI } from '../entities/grupopi.entity';
import { GrupoPIService } from '../services/grupopi.service';




@ApiTags("/GrupoPI")
@Controller("/grupos")
export class GrupoPIController{
    constructor ( private readonly grupoService: GrupoPIService) {}


    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<GrupoPI[]> {
        return this.grupoService.findAll();
    }

    @Get('/id/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<GrupoPI> {
        return this.grupoService.findById(id);
    }

    @Get('/search/:grupo')
    @HttpCode(HttpStatus.OK)
    findByGroup(@Param('grupo', ParseIntPipe) numeroGrupo: number): Promise<GrupoPI> {
        return this.grupoService.findByGroup(numeroGrupo);
    }

    @Post('/criar')
    @HttpCode(HttpStatus.CREATED)
    create(@Body()grupo: GrupoPI): Promise<GrupoPI>{
    return this.grupoService.create(grupo)
    }

    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    update(@Body()grupo: GrupoPI): Promise<GrupoPI> {
        return this.grupoService.update(grupo)
    }

    @Delete('/deletar/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.grupoService.delete(id)
    }
}