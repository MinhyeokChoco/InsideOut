import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { QnAService } from './qn-a.service';
import { CreateQnADTO, DeleteQnADTO, UpdateQnADTO } from 'src/dto/qn-a.dto';
import { Request, Response } from 'express';
import { InsideOutInfoService } from 'src/inside-out-info/inside-out-info.service';
import { UserSignUp } from 'src/login/model/login.model';

@Controller('qn-a')
export class QnAController {
  constructor(private readonly qnaService: QnAService,
    private readonly insideOutInfoService: InsideOutInfoService
  ) { }

  // 글 조회
  @Get()
  async qnaPage(
    // page 수, limit 제한, search 검색
    @Res() res: Response,
    @Req() req: Request,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('search') search: string = '') {

    const { results, totalPages } = await this.qnaService.findAndCountAll({
      page, limit, search,
    })

    let token = null;
    if (req.cookies['token']) {
      const verifiedToken = this.insideOutInfoService.verify(req.cookies['token']);
      console.log(verifiedToken);
      // res.write(verifiedToken);
      token = verifiedToken
    }


    // 응답 데이터 구조 확인
    res.json({
      token, results, totalPages

    });
  }

  // @Get()
  // async qnaLoginPage(
  //   // page 수, limit 제한, search 검색
  //   @Res() res: Response,
  //   @Req() req: Request,
  //   @Query('page') page: number = 1,
  //   @Query('limit') limit: number = 10,
  //   @Query('search') search: string = '') {


  //   const verifiedToken = this.insideOutInfoService.verify(req.cookies['token']);

  //   const { results, totalPages } = await this.qnaService.findAndCountAll({
  //     page, limit, search,
  //   })

  //   // 응답 데이터 구조 확인
  //   res.json({
  //     verifiedToken, results, totalPages,
  //   });
  // }

  // 글 작성
  @Post("/create")
  async create(@Body() CreateQnA: CreateQnADTO, @Res() res: Response, @Req() req: Request) {
    const verifiedToken = this.insideOutInfoService.verify(req.cookies['token']);
    console.log(verifiedToken)
    await this.qnaService.create(CreateQnA, verifiedToken.nick_name);
    res.redirect('http://localhost:5501/frontend/views/QnA.html');
  }

  // 글 상세 조회
  @Get("detail/:id")
  async detail(@Param("id") id: number, @Req() req: Request, @Res() res: Response) {
    let token = null;
    if (req.cookies['token']) {
      const verifiedToken = this.insideOutInfoService.verify(req.cookies['token']);
      console.log(verifiedToken);
      // res.write(verifiedToken);
      token = verifiedToken
    }

    const data = await this.qnaService.findOne(id);
    res.json({ data, token });
  }

  // 글 수정
  @Put(":id")
  async update(@Body() updateQnA: UpdateQnADTO, @Param("id") id: number, @Res() res: Response) {
    // console.log(updateQnA);
    const data = await this.qnaService.update(updateQnA, id);
    res.send(data);
  }

  // 글 삭제
  @Delete(":id")
  async destory(@Param("id") deleteQnA: DeleteQnADTO) {
    // console.log(deleteQnA);
    return await this.qnaService.destory(deleteQnA);
  }
}