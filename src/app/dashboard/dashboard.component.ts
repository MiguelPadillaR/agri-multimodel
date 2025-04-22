import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
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
    console.log("File info", event.target.files[0]);
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
