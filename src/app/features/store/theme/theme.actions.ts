import { createAction, props } from '@ngrx/store'
import { ETheme } from './theme.reducer'

const featureKey = '[Theme Store]'

export const init = createAction(`${featureKey} Init theme`)
export const setTheme = createAction(`${featureKey} Set theme`, props<{ theme: ETheme }>())
export const toggleTheme = createAction(`${featureKey} Toggle theme`)
export const saveTheme = createAction(`${featureKey} Save theme`)
