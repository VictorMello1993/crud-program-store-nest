export class CreateUserDTO {
	name: string;
	website: string;
	description: string;
	category: string;
	comments?: string;
	isFree: boolean;
}
