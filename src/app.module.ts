import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projeto } from './Projeto/entities/projeto.entity';
import { GrupoPI } from './grupopi/entities/grupopi.entity';
import { Turma } from './Turma/entities/turma.entity';
import { TurmaModule } from './Turma/turma.module';
import { ProjetoModule } from './Projeto/projeto.module';
import { GrupoPIModule } from './grupopi/grupopi.module';
import { AppController } from './app.controller';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'hagatanga',
      entities: [Projeto, GrupoPI, Turma],
      synchronize: false,
      dropSchema: true
    }),
    /* TypeOrmModule.forRoot({
       type: 'postgres',
       url: process.env.DATABASE_URL,
       logging: false,
       dropSchema: false,
       ssl: {
         rejectUnauthorized: false,
       },
       synchronize: true,
       autoLoadEntities: true,
     }), */
    TurmaModule,
    ProjetoModule,
    GrupoPIModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
