import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { MySkillsService } from '../../services/my-skills.service';
import { AddSkillModalComponent } from '../add-skill-modal/add-skill-modal.component';

@Component({
  selector: 'app-skills-list',
  imports: [CommonModule, SkillCardComponent, AddSkillModalComponent],
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.scss'
})
export class SkillsListComponent {
 skills: any[] = [];
  showModal: boolean = false;

  constructor(private skillsService: MySkillsService) { }

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
  }

  // Show the modal
  openModal() {
    this.showModal = true;
  }

  // Add the skill received from the modal
  onSkillAdded(newSkill: { name: string, description: string }) {
    this.skillsService.addSkill(newSkill);
    this.skills = this.skillsService.getSkills();
    this.showModal = false;
  }

  // Delete an existing skill
  onDeleteSkill(skillId: number) {
    this.skillsService.deleteSkill(skillId);
    this.skills = this.skillsService.getSkills();
  }
}
