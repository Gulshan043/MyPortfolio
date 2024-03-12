import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  downloadCV() {
    let a = document.createElement('a');
    a.href = "assets/Ajay-Kharat-Resume.pdf"
    a.download = "Ajay-Kharat-Resume.pdf"
    a.click();
  }

}
