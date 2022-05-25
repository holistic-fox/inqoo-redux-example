
export interface InqooState {
  volume: number,
  bass: number,
  middle: number,
  treble: number,
}

export const initialState: InqooState = {
  volume: 50,
  bass: 30,
  middle: 60,
  treble: 45,
}

export const storeName = 'inqoo-state';
