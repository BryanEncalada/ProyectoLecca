import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Service = {
  icon: string; // ruta del ícono (SVG o PNG)
  title: string;
  desc: string;
};

@Component({
  selector: 'app-services-cards',
  imports: [CommonModule],
  templateUrl: './services-cards.html',
  styleUrl: './services-cards.scss',
})
export class ServicesCards {
  services: Service[] = [
    {
      icon: 'assets/imgs/services-card/air-vent.svg',
      title: 'Funcionalidad',
      desc: 'Distribuimos cada m² para flujos claros, guardado inteligente y usos versátiles; todo queda fácil, útil y adaptable.',
    },
    {
      icon: 'assets/imgs/services-card/air-vent.svg',
      title: 'Eficiencia',
      desc: 'Maximizamos luz y ventilación natural, reducimos consumos y tiempos de obra con soluciones de bajo mantenimiento.',
    },
    {
      icon: 'assets/imgs/services-card/air-vent.svg',
      title: 'Confort',
      desc: 'Ergonomía, acústica y temperatura pensadas; iluminación regulable para ambientes calmados que invitan a estar.',
    },
    {
      icon: 'assets/imgs/services-card/air-vent.svg',
      title: 'Durabilidad',
      desc: 'Materiales y acabados de alto rendimiento; resisten el uso diario y se mantienen impecables por años.',
    },
  ];
}
