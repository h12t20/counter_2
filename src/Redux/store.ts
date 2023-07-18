import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {loadState, saveState} from "./localStorage";
export const initialState = loadState();
export const store = configureStore({
    reducer: reducer,
    preloadedState: initialState
});

store.subscribe(() => {
    saveState(
        store.getState()
    );
});