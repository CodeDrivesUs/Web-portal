import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from '@ngrx/store';
import {getConfig} from './store/configuration/configuration.actions';
import {HeaderComponent} from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Web-portal');

  constructor(private store: Store) {
    this.store.dispatch(getConfig());
  }
}
