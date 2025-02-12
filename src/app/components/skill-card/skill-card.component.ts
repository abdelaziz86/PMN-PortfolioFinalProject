import { Component,  Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input() skill: any;
  @Output() delete = new EventEmitter<void>();

  // Emit delete event
  deleteSkill() {
    this.delete.emit();
  }
}
