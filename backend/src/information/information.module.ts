import { Module } from '@nestjs/common';
import { InformationService } from './information.service';
import { InformationController } from './information.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Insideoutinfo } from './models/inside-out-info.model';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from './multer/information.multer';
import { InsideOutInfoModule } from 'src/inside-out-info/inside-out-info.module';
import { InsideOutInfoService } from 'src/inside-out-info/inside-out-info.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Insideoutinfo]),
    MulterModule.registerAsync({
      useClass: UploadService,
    }), InsideOutInfoModule],
  controllers: [InformationController],
  providers: [InformationService, InsideOutInfoService, JwtModule],
})
export class InformationModule { }