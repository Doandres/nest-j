import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    /* MongooseModule.forRoot(process.env.MONGODB, {
      connectionFactory: (connection) => {
        console.log('Conexión a MongoDB exitosa');
        return connection;
      },
    }), */

    
    MongooseModule.forRoot( process.env.MONGODB, {
      dbName: 'pokemon'
    }),


    PokemonModule,


    SeedModule,


    CommonModule,
  ],
})
export class AppModule {


}
