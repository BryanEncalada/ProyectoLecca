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
      icon: 'assets/icons/architecture.svg',
      title: 'Architecture',
      desc: 'Architecture has to do with planning and designing form, space and ambience to reflect functional.',
    },
    {
      icon: 'assets/icons/interior-design.svg',
      title: 'Interior Design',
      desc: 'Designing the experience of interior space through the manipulation of spatial volumes.',
    },
    {
      icon: 'assets/icons/furniture-design.svg',
      title: 'Furniture Design',
      desc: 'Creating objects intended to support various human activities such as seating.',
    },
    {
      icon: 'assets/icons/consulting.svg',
      title: 'Consulting',
      desc: 'Advising clients to align projects to their goals, either by a consulting firm or an agency.',
    },
  ];
}
