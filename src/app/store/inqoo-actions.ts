import {createAction, props} from '@ngrx/store';

const prefix = '[Volume]';

export const increment = createAction(`${prefix} Increment`);
export const decrement = createAction(`${prefix} Decrement`);

export const equalizerChange = createAction(`${prefix} Equalizer change`,
  props<{ setting: 'bass' | 'middle' | 'treble',
    change: 'increment' | 'decrement'}>());
