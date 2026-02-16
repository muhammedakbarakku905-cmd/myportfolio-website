// example: education.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Education Section</h2>`,
})
export class EducationComponent {}
