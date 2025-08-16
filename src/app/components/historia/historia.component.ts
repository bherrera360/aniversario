import { Component } from '@angular/core';

interface Evento {
  fecha: string;
  titulo: string;
  detalle: string;
}

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss'],
})
export class HistoriaComponent {
  eventos: Evento[] = [
    {
      fecha: '16 Ago 2024',
      titulo: 'Comenzó nuestra historia',
      detalle:
        'Ese día empezó todo, y desde entonces mi lugar favorito es a tu lado.',
    },
    {
      fecha: 'Sep 2024',
      titulo: 'Reforzando la conexión',
      detalle: 'Risas, fotos y promesas que hoy seguimos cumpliendo.',
    },
    {
      fecha: 'Oct 2024',
      titulo: 'Tú cumpleaños',
      detalle:
        'primer cumpleaños juntos, lleno de amor, visitamos el acuario y disfrutamos de un día inolvidable.',
    },
    {
      fecha: 'Nov 2024',
      titulo: 'Compartiendo mi gusto por las motos',
      detalle: 'Nuestra primera salida en moto, sintiendo la libertad juntos.',
    },
    {
      fecha: 'Dic 2024',
      titulo: 'Nuestro primer año nuevo juntos',
      detalle:
        'Celebramos la llegada del nuevo año con esperanza, deseos y amor.',
    },

    {
      fecha: 'Feb 2025',
      titulo: 'Día de San Valentín',
      detalle:
        'Un día lleno de sorpresas, amor y promesas que nos acercan más.',
    },
    {
      fecha: 'Abr 2025',
      titulo: 'Nuestro primer viaje juntos',
      detalle: 'Una aventura que fortaleció nuestro vínculo.',
    },
    {
      fecha: 'May 2025',
      titulo: 'Gym',
      detalle: 'Nos demostró que somos el mejor equipo.',
    },
    {
      fecha: 'Jun 2025',
      titulo: 'Mi cumpleaños',
      detalle: 'Gracias por hacer de mi cumpleaños un día tan especial.',
    },
    {
      fecha: 'Hoy 16 Ago 2025',
      titulo: '1er Aniversario',
      detalle: 'Gracias por un año increíble. Esto apenas comienza.',
    },
  ];
}
