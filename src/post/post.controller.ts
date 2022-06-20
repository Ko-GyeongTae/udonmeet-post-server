import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Request } from 'express';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/')
  getPostList() {
    return this.postService.getPostList();
  }

  @Get('/:id')
  getPost(@Param('id') id: string) {
    return this.postService.getPost(id);
  }

  @Post('/')
  createPost(@Body() createPostDto: CreatePostDto, @Req() request: Request) {
    return this.postService.createPost(createPostDto, request);
  }

  @Put('/:id')
  updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Req() request: Request,
  ) {
    return this.postService.updatePost(id, updatePostDto, request);
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}
