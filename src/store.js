import { configureStore, createSlice } from '@reduxjs/toolkit'

let themeColor = createSlice ({
    name: 'headerColor',
    initialState: "white",
    reducers: {
        changeColor(state, action) {
            // console.log(state, action.payload);
            return state = action.payload;
        }
    }
});

export let {changeColor} = themeColor.actions;

let transitionState = createSlice ({
  name: 'transitionState',
  initialState: "initial",
  reducers: {
      changeTransitionState(state, action) {
          // console.log(state, action.payload);
          return state = action.payload;
      }
  }
});

export let {changeTransitionState} = transitionState.actions;

let loaderState = createSlice ({
  name: 'loaderState',
  initialState: "initial",
  reducers: {
      changeLoaderState(state, action) {
          // console.log(state, action.payload);
          return state = action.payload;
      }
  }
});

export let {changeLoaderState} = loaderState.actions;

export default configureStore({
  reducer: {
    themeColor: themeColor.reducer,
    transitionState: transitionState.reducer,
    loaderState: loaderState.reducer,
  }
});