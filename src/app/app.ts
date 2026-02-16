import { Component } from '@angular/core';
import { ChatbotComponent } from './chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatbotComponent],
  template: `
    <h1>My Portfolio</h1>
    <app-chatbot></app-chatbot>
  `
})
export class App {}

