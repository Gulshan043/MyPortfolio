import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngOnInit(){
    this.addRotatingEffect()
  }

  addRotatingEffect() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const textElement = document.querySelector('.text p');

      if (textElement) {
        textElement.innerHTML = textElement.innerHTML
          .split('')
          .map(
            (char, i) =>
              `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
          )
          .join('');
      } else {
        console.error('Element not found');
      }
    }
  }

  downloadCV() {
    let a = document.createElement('a');
    a.href = "assets/Gulshan-Sethi-Resume.pdf"
    a.download = "Gulshan-Sethi-Resume.pdf"
    a.click();
  }

}
