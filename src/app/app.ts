import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal('Mi Perfil');
  protected readonly nombre = signal('Laura Aguirre García');
  protected readonly programa = signal('Análisis y Desarrollo de Software');
  protected readonly edad = signal('27 años');
  protected readonly titulo_profesional = signal('Licenciatura en Educación Fisica y Deportes');
}