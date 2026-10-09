import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Trajetoria } from './components/trajetoria/trajetoria';

@Component({
  imports: [Hero, Skills, Trajetoria],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
