import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { UploadModule } from './upload/upload.module';
import { HttpLoggerMiddleware } from './middleware/http.middleware';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PostModule,
    UploadModule,
    MongooseModule.forRoot('mongodb://122.34.166.47:27017/udonmeet'),
  ],
  controllers: [AppController, UploadController],
  providers: [AppService, UploadService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
