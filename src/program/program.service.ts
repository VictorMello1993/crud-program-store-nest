import { Injectable } from "@nestjs/common";
import { CreateProgramDTO } from "./dto/createUserDTO";
import { Program } from "./program.entity";

@Injectable()
export class ProgramService {
	private programs: Program[] = [];
	create(data: CreateProgramDTO): Program {
		this.programs.push(data);
	}
}
