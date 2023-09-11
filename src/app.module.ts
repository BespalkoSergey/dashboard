import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { AuthModule } from './modules/auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './modules/database/database.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client')
    }),
    AuthModule,
    ConfigModule.forRoot(),
    DatabaseModule
  ],
  controllers: [],
  providers: [AppService]
})
export class AppModule {}
