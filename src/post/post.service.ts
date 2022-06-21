import { Request, Response } from 'express';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { Model } from 'mongoose';

type PostObj = {
  id: number;
  title: string;
  content: string;
  place: string;
  location: string;
  assetUrl: string;
};

const cards: PostObj[] = [
  {
    id: 7,
    title: '같이 육찬호 혼내줄사람',
    content: '지금 당장',
    place: '대덕 sw 마이스터고',
    location: '대전 유성구 장동',
    assetUrl: 'http://localhost:4102/public/2022-06-19/1655647922915.png',
  },
  {
    id: 1,
    title: '대전 유성구 10대 모임',
    content: '롤 하는분 환영 일 10시',
    place: '더 벙커',
    location: '대전 유성구 원신흥동',
    assetUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrZRV2Y0Mzptp3mbiipnWa7leixzUTjN27w&usqp=CAU',
  },
  {
    id: 2,
    title: '일요일 투썸 가실분',
    content: '대학생만 와라',
    place: '투썸 신성동점',
    location: '대전 유성구 장동',
    assetUrl:
      'http://img.danawa.com/prod_img/500000/222/045/img/3045222_1.jpg?shrink=330:330&_v=20200212100319',
  },
  {
    id: 3,
    title: '웹 페이지 개발 해주실분 토요일 2시~5시',
    content: 'React 가능하신분..',
    place: '으능정이 스카이로드 스타벅스',
    location: '대전 중구 은행선화동',
    assetUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCcAx_57-RJM2NBQRuGWhdcrs-oToAn8cHw&usqp=CAU',
  },
  {
    id: 4,
    title: '대덕대학 주말에 같이 밥 먹으실 분',
    content: '복학생이면 더 좋고..',
    place: '대덕대학 식당',
    location: '대전 유성구 관평동',
    assetUrl:
      'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG',
  },
  {
    id: 5,
    title: '같이 갑천 산책 하실분 토요일 7시 엑스포다리',
    content: '* 주의 : 매우 귀여운 강아지 있음',
    place: '엑스포 다리',
    location: '대전 서구 월평동',
    assetUrl:
      'https://company.lottechilsung.co.kr/common/images/product_view0109_bh1.jpg',
  },
  {
    id: 6,
    title: '같이 대마고 등교 할사람',
    content: '신성동에서 밥먹고 들어갈 예정 8시',
    place: '신성동 유메이로',
    location: '대전 서구 갈마동',
    assetUrl:
      'https://recipe1.ezmember.co.kr/cache/recipe/2018/04/17/16d562285cd5c2550fd38cff169d11df1.jpg',
  },
];

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModle: Model<PostDocument>) {}

  getPostList() {
    return cards;
  }

  getPost(id: string) {
    return;
  }

  createPost(createPostDto: CreatePostDto, request: Request) {
    const data: PostObj = {
      id: cards.length + 1,
      ...createPostDto,
    };
    cards.push(data);
    return;
  }

  updatePost(id: string, updatePostDto: UpdatePostDto, request: Request) {
    return;
  }

  deletePost(id: string) {
    return;
  }
}
