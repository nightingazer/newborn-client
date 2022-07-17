import { createFeature, createReducer, on } from '@ngrx/store'
import * as ACTIONS from './theme.actions'

export enum ETheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface IThemeState {
  theme: ETheme
}

export const THEME_FEATURE_KEY = 'Theme Store'

export const initialThemeState: IThemeState = {
  theme: ETheme.DARK,
}

const reducer = createReducer(
  initialThemeState,
  on(ACTIONS.setTheme, (state, { theme }) => ({ ...state, theme })),
  on(ACTIONS.toggleTheme, (state) => {
    const theme = state.theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK
    return { ...state, theme }
  })
)

export const themeFeature = createFeature({
  name: THEME_FEATURE_KEY,
  reducer,
})
