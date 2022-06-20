import { IsString } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends CreatePostDto {
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
