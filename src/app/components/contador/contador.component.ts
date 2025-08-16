
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  startDate = new Date('2024-08-16T00:00:00'); // ← cámbiala si es necesario
  days = 0; hours = 0; minutes = 0; seconds = 0;

  ngOnInit(): void {
    this.tick();
    setInterval(() => this.tick(), 1000);
  }

  private tick() {
    const now = new Date().getTime();
    const diff = now - this.startDate.getTime();
    if (diff < 0) return;
    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((diff / (1000 * 60)) % 60);
    this.seconds = Math.floor((diff / 1000) % 60);
  }
}
