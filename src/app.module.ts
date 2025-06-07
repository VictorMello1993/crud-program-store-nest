import { Module } from "@nestjs/common";
import { ProgramModule } from "./program/program.module";
import { ProgramService } from "./program/program.service";

@Module({
	imports: [ProgramModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
