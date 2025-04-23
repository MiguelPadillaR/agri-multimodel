import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatAssitantComponent } from "../chat-assitant/chat-assitant.component";

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, ChatAssitantComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // fixed typo: styleUrl -> styleUrls
})
export class DashboardComponent {
  public imageFile: File | null = null;
  public imagePreviewUrl: string | null = null;
  public userInput: string = ""

  ngOnInit() {
  }

  public onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.imageFile = files[0];

      // Create a preview URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviewUrl = e.target.result;
      };
      reader.readAsDataURL(this.imageFile as Blob);
    } else {
      this.imageFile = null;
      this.imagePreviewUrl = null;
    }
  }

  public sendUserInput () {
    console.log("Input:", this.userInput);
  }
  public getInputSuggesiton() {
    this.userInput = "This is my brand new suggestion!"
  }
}
