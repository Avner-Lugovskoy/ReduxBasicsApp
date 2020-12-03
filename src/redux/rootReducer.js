import { combineReducers } from "redux";
import {
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  CHANGE_THEME,
  DECREMENT,
  INCREMENT,
} from "./types";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
}

const initialThemeState = {
  value: "light",
  disabled: false,
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload }; // синтаксис es6 мы многоточием возвращаем старый объект и меняем только поле валью в нем
    case ENABLE_BUTTONS:
      return { ...state, disabled: false };
    case DISABLE_BUTTONS:
      return { ...state, disabled: true };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
