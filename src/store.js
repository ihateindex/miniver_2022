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

let transitionInfo = createSlice ({
  name: 'transitionInfo',
  initialState: {
    state: "initial",
    page: ""
  },
  reducers: {
      changeTransitionInfo(state, action) {
          // console.log(state, action.payload);
          return state = action.payload;
      }
  }
});

export let {changeTransitionInfo} = transitionInfo.actions;

let loaderInfo = createSlice ({
  name: 'loaderState',
  initialState: {
    state: "initial",
    page: ""
  },
  reducers: {
      changeLoaderInfo(state, action) {
          // console.log(state, action.payload);
          return state = action.payload;
      }
  }
});

export let {changeLoaderInfo} = loaderInfo.actions;

export default configureStore({
  reducer: {
    themeColor: themeColor.reducer,
    transitionInfo: transitionInfo.reducer,
    loaderInfo: loaderInfo.reducer,
  }
});