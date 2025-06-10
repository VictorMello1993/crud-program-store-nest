import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateProgramDTO {
	@IsString()
	name: string;

	@IsString()
	website: string;

	@IsString()
	description: string;

	@IsString()
	category: string;

	@IsString()
	@IsOptional()
	@IsNotEmpty()
	comments: string;

	@IsBoolean()
	isFree: boolean;
}
