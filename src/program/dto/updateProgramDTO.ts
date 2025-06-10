import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateProgramDTO {

	@IsString()
	@IsOptional()
	name: string;

	@IsString()
	@IsOptional()
	website: string;

	@IsString()
	@IsOptional()
	description: string;

	@IsString()
	@IsOptional()
	category: string;

	@IsString()
	@IsOptional()
	@IsNotEmpty()
	comments?: string;

	@IsBoolean()
	@IsOptional()
	isFree: boolean;
}
