import { Injectable } from "@nestjs/common";
import { CreateProgramDTO } from "./dto/createProgramDTO";
import { UpdateProgramDTO } from "./dto/updateProgramDTO";
import { Program } from "./program.entity";

@Injectable()
export class ProgramService {
	private programs: Program[] = [];
	create(data: CreateProgramDTO): Program {
		const id = this.programs.length + 1;
		const newProgram = { id, ...data, createdAt: new Date(), userId: 0 } as Program;

		this.programs.push(newProgram);

		return newProgram;
	}

	getById(id: number): Program {
		const program = this.programs.find((p) => p.id === id);

		if (!program) {
			throw new Error("Program not found");
		}

		return program;
	}

	getAll(): Program[] {
		return this.programs;
	}

	deleteOne(id: number) {
		const index = this.programs.findIndex((p) => p.id === id);

		if (index !== -1) {
			this.programs.splice(index, 1);
			return this.programs;
		}

		throw new Error("Program not found!");
	}

	updateOne(id: number, data: UpdateProgramDTO) {
		const index = this.programs.findIndex((p) => p.id === id);

		if (index === -1) {
			throw new Error("Program not found!");
		}

		const updatedProgram = { ...this.programs[index], ...data };
		this.programs[index] = updatedProgram;

		return updatedProgram;
	}
}
