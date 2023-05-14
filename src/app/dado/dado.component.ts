import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})

export class DadoComponent implements OnInit {
  valor: number = 1;
  constructor() { }
  ngOnInit() {
    this.valor = Math.trunc(Math.random() * 6) + 1;
  }

  dado(): void {
    const plataform = document.querySelector('#platform');
    
    plataform!.classList.remove('stop');
    plataform!.classList.add('playing');
    document.querySelector('#dice');

    setTimeout(() => {
      document.querySelector('#platform')!.classList.remove('playing');
      document.querySelector('#platform')!.classList.add('stop');

      const number: number = Math.floor(Math.random() * 6) + 1;
      let x: number = 0, y: number = 20, z: number = -20;

      switch (number) {
        case 1:
          x = 0; y = 20; z = -20;
          break;
        case 2:
          x = -100; y = -150; z = 10;
          break;
        case 3:
          x = 0; y = -100; z = -10;
          break;
        case 4:
          x = 0; y = 100; z = -10;
          break;
        case 5:
          x = 80; y = 120; z = -10;
          break;
        case 6:
          x = 0; y = 200; x = 10;
          break;
      }

      const diceElement = document.querySelector('#dice') as HTMLElement;
      diceElement.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;

      const platformElement = document.querySelector('#platform') as HTMLElement;
      platformElement.style.transform = 'translate3d(0,0, 0px)';
      

      document.querySelector('#result')!.innerHTML = number.toString();
    }, 1120);
  }

}
