import { createFeature, createReducer, on } from '@ngrx/store'
import * as ACTIONS from './theme.actions'

export enum EThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum ETheme {
  DEEP_PURPLE = 'deep-purple',
  PINK = 'pink',
}

export interface IThemeState {
  theme: ETheme
  mode: EThemeMode
}

export const THEME_FEATURE_KEY = 'Theme Store'

export const initialThemeState: IThemeState = {
  theme: ETheme.PINK,
  mode: EThemeMode.DARK,
}

const reducer = createReducer(
  initialThemeState,
  on(ACTIONS.setMode, (state, { mode }) => ({ ...state, mode })),
  on(ACTIONS.setTheme, (state, { theme }) => ({ ...state, theme })),
  on(ACTIONS.toggleMode, (state) => {
    const mode = state.mode === EThemeMode.DARK ? EThemeMode.LIGHT : EThemeMode.DARK
    return { ...state, mode }
  })
)

export const themeFeature = createFeature({
  name: THEME_FEATURE_KEY,
  reducer,
})
