import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  assetUrl: string;

  @IsString()
  place: string;

  @IsString()
  location: string;
}
