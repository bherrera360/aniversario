import { Component } from '@angular/core';

interface Foto {
  src: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent {
  fotos: Foto[] = [
    {
      src: 'assets/img/foto1.jpg',
      titulo: 'Nuestra primera foto',
      descripcion: 'Así empezó este hermoso viaje juntos.',
    },
    {
      src: 'assets/img/foto4.jpg',
      titulo: 'Un día especial',
      descripcion: 'Momentos que se quedan para siempre.',
    },
    {
      src: 'assets/img/foto3.jpg',
      titulo: 'Risas y más risas',
      descripcion: 'Contigo todo es alegría.',
    },
    {
      src: 'assets/img/foto2.jpg',
      titulo: 'Tú y yo',
      descripcion: 'Mi lugar favorito siempre será a tu lado.',
    },
    {
      src: 'assets/img/foto5.jpg',
      titulo: 'Aventura',
      descripcion: 'Seguimos descubriendo el mundo juntos.',
    },
    {
      src: 'assets/img/foto6.jpg',
      titulo: 'Recuerdo inolvidable',
      descripcion: 'Gracias por cada instante.',
    },
    {
      src: 'assets/img/foto7.jpg',
      titulo: 'Gym',
      descripcion: 'dar lo mejor de nosotros en cada entrenamiento.',
    },

    {
      src: 'assets/img/foto9.jpg',
      titulo: 'Siempre tan perfecta',
      descripcion: 'cada dia te amo mas',
    },
    {
      src: 'assets/img/foto10.jpg',
      titulo: 'Año nuevo juntos',
      descripcion: 'celebrando con el amor de mi vida.',
    },
    {
      src: 'assets/img/foto8.jpg',
      titulo: 'Creciendo juntos',
      descripcion: 'amamos todo lo que hacemos juntos.',
    },

    {
      src: 'assets/img/foto12.jpg',
      titulo: 'Amo tomarme fotos contigo',
      descripcion: 'Siempre tan hermosa y elegante',
    },
    {
      src: 'assets/img/foto13.jpg',
      titulo: 'Estadio juntos',
      descripcion: 'Gracias por dejarme compartir lo que amo.',
    },

    {
      src: 'assets/img/foto30.jpg',
      titulo: 'Citas',
      descripcion: 'Pequeñas salidas que nos hacen felices.',
    },
    {
      src: 'assets/img/foto37.jpg',
      titulo: 'Viaje juntos',
      descripcion: 'Pudimos conocernos mejor en este viaje y amarnos más.',
    },
    {
      src: 'assets/img/foto40.jpg',
      titulo: 'Te amo, Hoy y siempre',
      descripcion: 'Momentos que atesoraré por siempre.',
    },
  ];

  abierto = false;
  actual: Foto | null = null;

  abrir(f: Foto) {
    this.abierto = true;
    this.actual = f;
    document.body.style.overflow = 'hidden';
  }
  cerrar() {
    this.abierto = false;
    this.actual = null;
    document.body.style.overflow = '';
  }
}
