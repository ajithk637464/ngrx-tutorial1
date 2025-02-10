import { Component, Input, input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit {
  counter! : number ;
  counter$ !: Observable<{counter:number}>;
  constructor(private store: Store<{counter: CounterState}>){}


    ngOnInit():void{
      this.counter$ = this.store.select('counter');
    }

}
