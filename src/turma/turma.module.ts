import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turma } from './entities/turma.entity';
import { TurmaController } from './controllers/turma.controller';
import { TurmaService } from './services/turma.service';



@Module({
  imports: [TypeOrmModule.forFeature([Turma])],
  controllers: [TurmaController],
  providers: [TurmaService],
  exports: [TypeOrmModule]
})
export class TurmaModule {}
