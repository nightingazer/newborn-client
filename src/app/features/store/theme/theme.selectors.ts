import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IThemeState, THEME_FEATURE_KEY } from './theme.reducer'

export const selectThemeState = createFeatureSelector<IThemeState>(THEME_FEATURE_KEY)
export const selectTheme = createSelector([selectThemeState], (state) => state.theme)
