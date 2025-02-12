import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySkillsService {
  private skills: any[] = [];

  constructor() {
    this.loadSkills();
  }

  // Load skills from localStorage (if available) or use default
  private loadSkills() {
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills) {
      this.skills = JSON.parse(storedSkills);
    } else {
      // Default skills if no data in localStorage
      this.skills = [
        { id: 1, name: 'Web Development', description: 'Building modern websites using Angular, React, and Node.js.' },
        { id: 2, name: 'AI Solutions', description: 'Creating AI-powered applications with deep learning and NLP.' },
        { id: 3, name: 'Mobile Development', description: 'Building cross-platform mobile apps with Flutter and React Native.' }
      ];
    }
  }

  // Get all skills
  getSkills() {
    return [...this.skills];
  }

  // Add a new skill
  addSkill(newSkill: { name: string, description: string }) {
    const newSkillObject = { 
      id: this.skills.length + 1, 
      name: newSkill.name, 
      description: newSkill.description 
    };
    this.skills.push(newSkillObject);
    this.saveSkills();
  }

  // Delete a skill by ID
  deleteSkill(skillId: number) {
    this.skills = this.skills.filter(skill => skill.id !== skillId);
    this.saveSkills();
  }

  // Update a skill's name and description
  updateSkill(updatedSkill: { id: number, name: string, description: string }) {
    const skillIndex = this.skills.findIndex(skill => skill.id === updatedSkill.id);
    if (skillIndex !== -1) {
      this.skills[skillIndex] = updatedSkill;
      this.saveSkills();
    }
  }

  // Save skills to localStorage
  private saveSkills() {
    localStorage.setItem('skills', JSON.stringify(this.skills));
  }
}
