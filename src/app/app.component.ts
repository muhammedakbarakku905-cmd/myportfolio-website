import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import all standalone components
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component'; // <-- IMPORT IT
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  NavbarComponent,
  HeroComponent,
  AboutComponent,
  SkillsComponent,
  ProjectsComponent,
  ExperienceComponent,
  EducationComponent,   // <-- Add this
  ContactComponent,
  ChatbotComponent,
  FooterComponent
],

  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-experience></app-experience>
    <app-education></app-education>
    <app-contact></app-contact>
    <app-chatbot></app-chatbot>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
