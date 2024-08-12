import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from 'src/model/comment.model';
import { Ccomment } from 'src/model/ccomment.model';
import { QnA } from 'src/model/qn-a.model';
import { UserSignUp } from 'src/login/model/login.model';
import { InsideOutInfoModule } from 'src/inside-out-info/inside-out-info.module';
import { InsideOutInfoService } from 'src/inside-out-info/inside-out-info.service';

@Module({
  imports: [SequelizeModule.forFeature([UserSignUp, QnA, Comment, Ccomment]), InsideOutInfoModule],
  controllers: [CommentController],
  providers: [CommentService, InsideOutInfoService],
})
export class CommentModule { }
