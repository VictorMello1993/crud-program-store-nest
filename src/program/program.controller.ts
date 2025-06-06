import { Body, Controller, Post } from '@nestjs/common';
import { CreateProgramDTO } from './dto/createUserDTO';
import { ProgramService } from './program.service';

@Controller('programs')
export class ProgramController {
  constructor(private readonly programService: ProgramService){}
  @Post()
  create(@Body() data: CreateProgramDTO){
    this.programService.create(data);
  }
}
 