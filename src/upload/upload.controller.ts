import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { multerOptions } from '../lib/multerOptions';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseInterceptors(FilesInterceptor('images', 10, multerOptions))
  @Post('/list')
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    return this.uploadService.uploadFiles(files);
  }
}
