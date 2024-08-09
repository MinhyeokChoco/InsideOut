import { Module } from '@nestjs/common';
import { QnAService } from './qn-a.service';
import { QnAController } from './qn-a.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/model/user.model';
import { QnA } from 'src/model/qn-a.model';
import { Comment } from 'src/model/comment.model';
import { Ccomment } from 'src/model/ccomment.model';
import { InsideOutInfoModule } from 'src/inside-out-info/inside-out-info.module';
import { InsideOutInfoService } from 'src/inside-out-info/inside-out-info.service';

@Module({
  imports: [SequelizeModule.forFeature([User, QnA, Comment, Ccomment]),
    InsideOutInfoModule],
  controllers: [QnAController],
  providers: [QnAService, InsideOutInfoService],
})
export class QnAModule { }
