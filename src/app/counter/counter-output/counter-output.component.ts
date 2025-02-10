import { Component, Input, input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getChannelName, getCounter } from '../state/counter.selectors';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit {
  counter$ !: Observable<number>;
  constructor(private store: Store<AppState>){}


    ngOnInit():void{
      this.counter$ = this.store.select(getCounter);
    }
}

