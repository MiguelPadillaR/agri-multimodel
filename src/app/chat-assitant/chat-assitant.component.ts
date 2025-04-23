import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

@Component({
  selector: 'app-chat-assitant',
  imports: [],
  templateUrl: './chat-assitant.component.html',
  styleUrl: './chat-assitant.component.css'
})

export class ChatAssitantComponent {
  
  @Input() userInput: string = '';
  @Output() userInputChange = new EventEmitter<string>();

  onInputChange(value: string) {
    this.userInputChange.emit(value);
  }

  public messages: ChatMessage[] = [
    { role: 'user', content: 'Hello Assistant!' },
    { role: 'assistant', content: 'Hi there! How can I help you today?' },
    { role: 'user', content: 'Can you tell me a joke?' },
    { role: 'assistant', content: 'Sure! Why did the tomato turn red? Because it saw the salad dressing! 😄' }
  ];
    
  sendUserInput() {
    const input: ChatMessage = { role: 'user', content: this.userInput };
    this.messages.push(input);

    // Send userInput to backend, then push assistant's reply like:
    const reply: ChatMessage = { role: 'assistant', content: 'Your LLM reply here.' };
    this.messages.push(reply);

    this.userInput = ''; // clear input
  }
}
  
