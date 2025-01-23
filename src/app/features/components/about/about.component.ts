import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor() {}
  downloadCV() {
    let a = document.createElement('a');
    a.href = 'Gulshan-Sethi-Resume.pdf';
    a.download = 'Gulshan-Sethi-Resume.pdf';
    a.click();
  }
}
