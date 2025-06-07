import { Expose, Transform } from "class-transformer";

export class Program {
	id: number;
	name: string;
	website: string;
	description: string;
	category: string;
	comments?: string;
	isFree: boolean;
	createdAt: Date;
	userId: number;
}
