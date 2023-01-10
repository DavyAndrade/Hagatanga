import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projeto } from './entities/projeto.entity';
import { ProjetoController } from './controllers/projeto.controller';
import { ProjetoService } from './services/projeto.service';


@Module({
  imports: [TypeOrmModule.forFeature([Projeto])],
  controllers: [ProjetoController],
  providers: [ProjetoService],
  exports: [TypeOrmModule]
})
export class ProjetoModule {}
