import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  standalone: false,
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent {
  value ! : number  ;
  constructor(private store: Store<AppState>){}
  
  
  onAdd(){
    this.store.dispatch(customIncrement({ customNumber : +this.value }));
  }
}
