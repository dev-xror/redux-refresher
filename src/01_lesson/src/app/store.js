// Redux store and redux are kind of used interchangeably
// both stand for a container for javascript apps.
// it stores the whole state of the app in an immutable object tree

// the intented pattern for redux is just 
// to have a single store for your application

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});
