import { createAction, props } from '@ngrx/store'
import { ETheme, EThemeMode } from './theme.reducer'

const featureKey = '[Theme Store]'

export const init = createAction(`${featureKey} Init theme`)
export const setMode = createAction(`${featureKey} Set mode`, props<{ mode: EThemeMode }>())
export const toggleMode = createAction(`${featureKey} Toggle mode`)
export const setTheme = createAction(`${featureKey} Set theme`, props<{ theme: ETheme }>())
export const saveTheme = createAction(`${featureKey} Save theme`)
export const loadBundle = createAction(`${featureKey} Load CSS bundle`, props<{ theme: ETheme; mode: EThemeMode }>())
