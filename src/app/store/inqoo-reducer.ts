import { createReducer, on } from '@ngrx/store';
import { initialState } from './inqoo-state';
import { increment, decrement } from './inqoo-actions';

export const inqooReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return { ...state, volume: state.volume + 1 };
  }),
  on(decrement, (state) => {
    return { ...state, volume: state.volume - 1 };
  }),
);
