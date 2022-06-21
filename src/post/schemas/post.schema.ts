import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  place: string;

  @Prop({ required: true })
  assetUrl: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
