import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-skill-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-skill-modal.component.html',
  styleUrl: './add-skill-modal.component.scss'
})
export class AddSkillModalComponent {
  @Output() skillAdded = new EventEmitter<{ name: string, description: string }>();
  skillName: string = '';
  skillDescription: string = '';

  // Close the modal by emitting the skill
  addSkill() {
    if (this.skillName && this.skillDescription) {
      this.skillAdded.emit({ name: this.skillName, description: this.skillDescription });
      this.skillName = '';
      this.skillDescription = '';
    } else {
      alert('Please fill in both fields.');
    }
  }

  // Close modal (for demo purposes here, you can extend to use Angular's modal component)
  closeModal() {
    this.skillName = '';
    this.skillDescription = '';
  }
}
