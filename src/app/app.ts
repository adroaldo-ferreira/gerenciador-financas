import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JurosCompostos } from './page/juros-compostos/juros-compostos';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, JurosCompostos, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('juros-app');
}
