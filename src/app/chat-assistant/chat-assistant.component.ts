import { Component, ElementRef, ViewChild } from '@angular/core';
import { MessagingService } from '../services/messaging.service';


@Component({
  selector: 'app-chat-assitant',
  imports: [],
  templateUrl: './chat-assistant.component.html',
  styleUrls: ['./chat-assistant.component.css']
})

export class ChatAssistantComponent {
  // Messages buffer variable
  public messages: ChatMessage[] = [
    { role: 'assistant', content: 'Hello there!\n\nI am your Agricultural Imaging Assitant, but you can call me AgrIA!\n\nMy purpose here is to analyse satellite images of crop fields to help farmers analyze their use of space and resources, as well as agricultural practices, in order to help them qualify for the European Comitee of Common Agricultural Policies (CAPs) subventions.\n\nJust upload a satellite image of your crop fields and we will get to work!' },
    { role: 'assistant', content: 'Also, this is all hardcoded as an example of chat' },
    { role: 'user', content: 'Can you tell me a joke?' },
    { role: 'assistant', content: 'Sure! Why did the tomato turn red? Because it saw the salad dressing! 😄' }
  ];
  // 
  @ViewChild('scrollAnchor') scrollAnchor!: ElementRef;

  constructor(private messagingService: MessagingService) { }

  ngAfterViewInit() {
    this.scrollToBottom();  // in case there are preloaded messages
  }

  private scrollToBottom() {
    setTimeout(() => {
      this.scrollAnchor?.nativeElement.scrollIntoView({ block:"end", behavior: 'smooth' });
    }, 0);
  }

  public addUserMessage(content: string = '', isImageUpload: boolean = false) {
    if (isImageUpload){
      this.getAssistantOutput(content);
    } else if (content.length > 0) {
      this.messages.push({ role: 'user', content });
      this.getAssistantOutput(content);
    }
    this.scrollToBottom();
  }
  private getAssistantOutput(userInput: string) {
    console.log('User input:', userInput);
    // Show loading response icon
    this.messages.push({ role: 'assistant', content: '', loading: true });
    
    this.messagingService.sendUserInput(userInput).subscribe((response: any) => {
      // Remove loading response icon
      const last = this.messages[this.messages.length - 1];
      if (last.loading) {
        this.messages.pop();
      }
      console.log(response.data);
      const fullText = response.data; // Assuming the response contains the full text
      const newMsg: ChatMessage = {
        role: 'assistant',
        content: fullText,
        revealProgress: ''
      };
      this.messages.push(newMsg);
      this.animateLoadingResponse(newMsg, fullText);
    });


    // setTimeout(() => {
    //   // Remove loading response icon
    //   const last = this.messages[this.messages.length - 1];
    //   if (last.loading) {
    //     this.messages.pop();
    //   }
  
    //   const fullText = this.generateMockResponse(userInput);
    //   const newMsg: ChatMessage = {
    //     role: 'assistant',
    //     content: fullText,
    //     revealProgress: ''
    //   };
    //   this.messages.push(newMsg);
    //   this.animateLoadingResponse(newMsg, fullText);
    // }, 1000);
  }
  
  private animateLoadingResponse(msg: ChatMessage, fullText: string) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        msg.revealProgress = fullText.slice(0, index + 1);
        index++;
      } else {
        clearInterval(interval);
        msg.revealProgress = undefined; // done animating
      }
    }, 20); // Adjust typing speed (ms per character)
  }
    
  private generateMockResponse(input: string): string {
    return `Got it! You send:\n"${input.trim()}"\nLet me think more on that... 🤖`;
  }

}
  
