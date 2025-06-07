import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from "@nestjs/common";
import { CreateProgramDTO } from "./dto/createProgramDTO";
import { UpdateProgramDTO } from "./dto/updateProgramDTO";
import { ProgramService } from "./program.service";

@Controller("programs")
export class ProgramController {
	constructor(private readonly programService: ProgramService) {}
	@Post()
	create(@Body() data: CreateProgramDTO) {
		return this.programService.create(data);
	}

	@Get(":id")
	getById(@Param("id") id: string) {
		return this.programService.getById(+id);
	}

	@Get()
	getAll() {
		return this.programService.getAll();
	}

	@Delete(":id")
	deleteOne(@Param("id") id: string) {
		return this.programService.deleteOne(+id);
	}

	@Put(":id")
	updateOne(@Param("id") id: string, @Body() data: UpdateProgramDTO) {
		return this.programService.updateOne(+id, data);
	}
}
