import { Module } from '@nestjs/common';
import { AssessmentService } from './assesment.service';
import { AssessmentController } from './assesment.controller';
import { SkillsModule } from '../skills/skills.module'; 
import { LlmModule } from '../llm/llm.module';       

@Module({
  imports: [
    SkillsModule, 
    LlmModule   
  ],
  controllers: [AssessmentController],
  providers: [AssessmentService],
})
export class AssessmentModule {}