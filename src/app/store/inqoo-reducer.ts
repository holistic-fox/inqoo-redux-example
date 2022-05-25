import {createReducer, on} from '@ngrx/store';
import {initialState} from './inqoo-state';
import {increment, decrement, equalizerChange} from './inqoo-actions';

export const inqooReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {...state, volume: state.volume + 1};
  }),
  on(decrement, (state) => {
    return {...state, volume: state.volume - 1};
  }),
  on(equalizerChange, (state, {setting, change}) => {
    switch (setting){
      case 'bass':
        return change === 'increment' ?
          {...state, bass: state.bass + 1} :
          {...state, bass: state.bass - 1}
      case 'middle':
        return change === 'increment' ?
          {...state, middle: state.middle + 1} :
          {...state, middle: state.middle - 1}
      case 'treble':
        return change === 'increment' ?
          {...state, treble: state.treble + 1} :
          {...state, treble: state.treble - 1}
      default:
        return state;
    }

  })
);
