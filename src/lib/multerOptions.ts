import { HttpException, HttpStatus } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { Request } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

export const multerOptions = {
  limits: {
    fileSize: 1024 * 1024 * 50, // 50MB
  },
  fileFilter: (req: Request, file: Express.Multer.File, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      cb(null, true);
    } else {
      cb(
        new HttpException(
          '지원하지 않는 파일형식입니다.',
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },
  storage: diskStorage({
    destination: (req: Request, file: Express.Multer.File, callback) => {
      const dest = `${process.env.STORAGE_PATH}/${
        new Date().toISOString().split('T')[0]
      }`;
      if (!existsSync(dest)) {
        mkdirSync(dest, { recursive: true });
      }
      callback(null, dest);
    },
    filename: (req: Request, file: Express.Multer.File, callback) => {
      callback(null, Date.now().toString() + '.' + file.mimetype.split('/')[1]);
    },
  }),
};

export const createImageURL = (file: Express.Multer.File) => {
  return `http://localhost:4102/${file.path}`;
};
