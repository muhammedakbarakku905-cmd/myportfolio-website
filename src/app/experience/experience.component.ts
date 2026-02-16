// example: experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Experience Section</h2>`,
})
export class ExperienceComponent {}

