import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  downloadCV() {
    let a = document.createElement('a');
    a.href = "assets/Ajay-Kharat-Resume.pdf"
    a.download = "Ajay-Kharat-Resume.pdf"
    a.click();
  }

}
