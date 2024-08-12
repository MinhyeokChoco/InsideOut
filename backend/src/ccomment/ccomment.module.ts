import { Module } from '@nestjs/common';
import { CcommentService } from './ccomment.service';
import { CcommentController } from './ccomment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from 'src/model/comment.model';
import { Ccomment } from 'src/model/ccomment.model';
import { UserSignUp } from 'src/login/model/login.model';
import { InsideOutInfoModule } from 'src/inside-out-info/inside-out-info.module';
import { InsideOutInfoService } from 'src/inside-out-info/inside-out-info.service';

@Module({
  imports: [SequelizeModule.forFeature([UserSignUp, Comment, Ccomment]),
    InsideOutInfoModule],
  controllers: [CcommentController],
  providers: [CcommentService, InsideOutInfoService],
})
export class CcommentModule { }
