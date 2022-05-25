import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {InqooState} from "./store/inqoo-state";
import {selectBass, selectVolume} from "./store/inqoo-selectors";
import {decrement, equalizerChange, increment} from "./store/inqoo-actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'inqoo-redux-example';
  volume: Observable<number> | undefined;
  bass: Observable<number> | undefined;

  constructor(private inqooStore: Store<InqooState>) {
  }

  ngOnInit() {
    this.volume = this.inqooStore.select(selectVolume);
    this.bass = this.inqooStore.select(selectBass);
  }

  volumeIncrease = () => {
    this.inqooStore.dispatch(increment());
  }

  volumeDecrease = () => {
    this.inqooStore.dispatch(decrement());
  }

  bassIncrease = () => {
    this.inqooStore.dispatch(
      equalizerChange({setting: 'bass', change: 'increment'}));
  }

  bassDecrease = () => {
    this.inqooStore.dispatch(
      equalizerChange({setting: 'bass', change: 'decrement'}));
  }


}
