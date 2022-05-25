import {createFeatureSelector, createSelector} from "@ngrx/store";
import {InqooState, storeName} from "./inqoo-state";

export const inqooFeature = createFeatureSelector<InqooState>(storeName);
export const selectVolume = createSelector(inqooFeature, state => state.volume);
