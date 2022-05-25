import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {InqooState} from "../../store/inqoo-state";
import {Observable} from "rxjs";
import * as S from '../../store/inqoo-selectors';

@Component({
  selector: 'app-equalizer-view',
  templateUrl: './equalizer-view.component.html',
  styleUrls: ['./equalizer-view.component.scss']
})
export class EqualizerViewComponent implements OnInit {

  volume: Observable<number> | undefined;
  bass: Observable<number> | undefined;

  constructor(private storeService: Store<InqooState>) {
  }

  ngOnInit(): void {
    this.volume = this.storeService.select(S.selectVolume);
    this.bass = this.storeService.select(S.selectBass);
  }

}
