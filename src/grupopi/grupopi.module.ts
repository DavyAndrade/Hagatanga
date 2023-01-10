import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoPI } from './entities/grupopi.entity';
import { GrupoPIController } from './controllers/grupopi.controller';
import { GrupoPIService } from './services/grupopi.service';


@Module({
  imports: [TypeOrmModule.forFeature([GrupoPI])],
  controllers: [GrupoPIController],
  providers: [GrupoPIService],
  exports: [TypeOrmModule]
})
export class GrupoPIModule {}
