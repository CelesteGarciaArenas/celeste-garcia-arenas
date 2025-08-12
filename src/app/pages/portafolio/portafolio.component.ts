import { Component, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements AfterViewInit{
  projects: Project[] = [
    {
      title: 'Vibe at Home',
      description: 'Vibe At Home es una plataforma innovadora que ofrece recorridos virtuales en 360°, vistas aéreas con drones y acceso rápido a propiedades mediante tecnología NFC/QR. Fui responsable del desarrollo integral de la página web, implementando un diseño responsivo, interfaces intuitivas y optimización para una experiencia de usuario fluida en dispositivos móviles y escritorio. Este proyecto contribuyó a modernizar la forma en que agentes y clientes interactúan con los inmuebles, facilitando la visualización y acelerando el proceso de venta mediante tecnología avanzada.',
      image: 'assets/vibe.jpg',
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
      demoLink: 'https://vibeathome.com.mx'
    },
    {
      title: 'Tamaloko',
      description: 'Tamaloko y Tacoloko es un emprendimiento de alimentos mexicanos, especializado en tamales y tacos de guisado con una amplia variedad de guisos tradicionales . El sitio web que desarrollé incluye un diseño moderno y responsivo, ideal para móviles y escritorio, con secciones claras como menú, contacto y pedidos. Además implementé un sistema de administración personalizado (backend), donde el equipo registra ventas diarias de productos y genera reportes de forma eficiente para gestión operativa.',
      image: 'assets/tamaloko.jpg',
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
      demoLink: 'https://tamaloko.com.mx'
    },
    {
      title: 'Pulido de Pisos HMV',
      description: 'Pulido de Pisos HMV es una empresa especializada en pulido y mantenimiento de pisos de mármol, granito, terrazo, cerámica y cantera. Desarrollé su página web con un diseño responsivo, limpio y funcional, enfocada en mostrar sus servicios, trabajos realizados y facilitar el contacto directo con clientes mediante formularios y enlaces a WhatsApp. El sitio permite una navegación clara desde cualquier dispositivo, mejorando la presencia digital del negocio.',
      image: 'assets/pisos.jpg',
      technologies: ['HTML', 'CSS', 'PHP'],
      demoLink: 'https://pulidodepisoshmv.com'
    },
    {
      title: 'Dr. Juan José Mendoza Ángeles',
      description: 'Dr. Juan José Mendoza Ángeles es un Médico Cirujano con amplia experiencia en la atención integral de la salud, ofreciendo servicios médicos generales, control metabólico y manejo de enfermedades crónicas, así como procedimientos especializados como curación de heridas, suturas, colocación de yesos, electrocardiogramas y más. Desarrollé su sitio web con un diseño claro, funcional y responsivo, resaltando sus servicios, ubicación y facilidad de contacto.',
      image: 'assets/doctor.jpg',
      technologies: ['HTML', 'CSS', 'JS','PHP'],
      demoLink: 'https://drjuanjosemendozaangeles.com.mx/'
    },
    {
      title: 'Dental SA',
      description: 'Dentals’A es un consultorio dental con dos sucursales en la CDMX, especializado en servicios como ortodoncia, implantes, endodoncia, odontopediatría, entre otros. Desarrollé su sitio web con un diseño limpio, profesional y totalmente responsivo, facilitando la navegación, la consulta de servicios y la localización de sucursales. Además, integré un formulario de contacto para agendar citas en línea, mejorando la experiencia del usuario y la captación de pacientes.',
      image: 'assets/dental.jpg',
      technologies: ['HTML', 'CSS', 'JS', 'PHP'],
      demoLink: 'https://dentalsa.com.mx'
    },
    {
      title: 'Foto García',
      description: 'Portafolio digital para estudio fotográfico. Galería visual elegante.',
      image: 'assets/foto.jpg',
      technologies: ['HTML', 'CSS', 'JS']
    },
    {
      title: 'Todo Tu Evento (en desarrollo)',
      description: 'Web para empresa de eventos. Incluirá álbumes digitales e invitaciones interactivas.',
      image: 'assets/todotuevento.jpg',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL']
    }
  ];

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.animateVisibleCards();
  }

  ngAfterViewInit(): void {
    this.animateVisibleCards(); // Detecta si ya se ve al cargar
  }

  private animateVisibleCards(): void {
    const cards = this.el.nativeElement.querySelectorAll('.animate-left, .animate-right');
    cards.forEach((el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('appear');
      }
    });
  }

  
}
