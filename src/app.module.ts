import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pokemon?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.9', {
      connectionFactory: (connection) => {
        console.log('Conexión a MongoDB exitosa');
        return connection;
      },
    }),


    PokemonModule,


    SeedModule,


    CommonModule,
  ],
})
export class AppModule {}
