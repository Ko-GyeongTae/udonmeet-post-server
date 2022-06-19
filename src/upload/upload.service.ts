import { Injectable } from '@nestjs/common';
import { createImageURL } from 'src/lib/multerOptions';

@Injectable()
export class UploadService {
  uploadFiles(files: Array<Express.Multer.File>) {
    const generatedFiles = [];

    for (const file of files) {
      generatedFiles.push(createImageURL(file));
    }

    return generatedFiles;
  }
}
