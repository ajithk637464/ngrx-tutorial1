import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import { getChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-buttons',
  standalone: false,
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent {
  channelName$ ! : Observable<string> ;
  constructor(private store: Store<AppState>){}

  ngOnInit():void{
      this.channelName$ = this.store.select(getChannelName);
      }
  onIncrement(){
    this.store.dispatch(increment());
  }
  onDecrement(){
    this.store.dispatch(decrement());
  }
  onReset(){
    this.store.dispatch(reset());
  }
  onChangeChannelName(){
    this.store.dispatch(changeChannelName({channelName: 'web deb leela'}));
  }
}
