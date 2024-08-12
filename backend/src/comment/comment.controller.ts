import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res, UnauthorizedException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDTO, DeleteCommentDTO, UpdateCommentDTO } from 'src/dto/comment.dto';
import { Response, Request } from 'express';
import { InsideOutInfoService } from 'src/inside-out-info/inside-out-info.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly cmtService: CommentService,
    private readonly insideOutInfoService: InsideOutInfoService
  ) { }

  // 댓글 전체 조회
  @Get()
  async cmtPage(@Res() res: Response) {
    const data = await this.cmtService.findAll();
    res.send(data);
  }

  // 해당 글에 대한 댓글 조회
  @Get("comments")
  async getComments(@Query("index", ParseIntPipe) index: number) {
    const data = await this.cmtService.findIndexAll(index);
    // console.log(data);
    return data;
  }

  // 댓글 작성
  @Post("create")
  async create(@Body() CreateCmt: CreateCommentDTO, @Res() res: Response, @Req() req: Request) {
    console.log("!234")
    const verifiedToken = this.insideOutInfoService.verify(req.cookies['token']);
    console.log(verifiedToken)
    // console.log(CreateCmt.qna_id)
    await this.cmtService.create(CreateCmt, verifiedToken.nick_name);
    res.status(201).send();
    // res.redirect(`http://localhost/frontend/views/detail.html?id=${CreateCmt.qna_id}`);
  }

  // 댓글 수정
  @Put(":id")
  async update(@Body() updateCmt: UpdateCommentDTO, @Param("id") id: number, @Req() req: Request, @Res() res: Response) {
    if (!req.cookies['token']) {
      throw new UnauthorizedException();
    }
    const data = await this.cmtService.update(updateCmt, id);
    res.send(data);
  }

  // 댓글 삭제
  @Delete(":id")
  async destory(@Param("id") deleteCmt: DeleteCommentDTO, @Req() req: Request, @Res() res: Response) {
    console.log(req.cookies['token'])
    if (!req.cookies['token']) {
      throw new UnauthorizedException();
    }
    console.log(deleteCmt);
    await this.cmtService.destroy(deleteCmt);
    res.send();
  }
}
