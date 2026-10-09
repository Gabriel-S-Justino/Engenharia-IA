import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';

@Component({
  imports: [Hero],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
