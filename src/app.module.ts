import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { AuthModule } from './modules/auth/auth.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'dashboard')
    }),
    AuthModule,
    ConfigModule.forRoot()
  ],
  controllers: [],
  providers: [AppService]
})
export class AppModule {}
