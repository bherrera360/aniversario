
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {
  hearts: {left:string; duration:string; delay:string; size:string}[] = [];

  ngOnInit(): void {
    // Pre-carga algunos corazones que flotan
    for (let i = 0; i < 18; i++) {
      this.hearts.push({
        left: Math.floor(Math.random()*100)+'%',
        duration: (6 + Math.random()*6).toFixed(2)+'s',
        delay: (Math.random()*3).toFixed(2)+'s',
        size: (16 + Math.random()*28).toFixed(0)+'px'
      });
    }
  }
}
