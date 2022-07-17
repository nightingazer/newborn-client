import { Injectable } from '@angular/core'
import { ETheme, EThemeMode } from 'src/app/features/store/theme/theme.reducer'
import { getEnumElemByValue } from 'src/app/utils'

export enum ELocalStorageKeys {
  theme = 'theme',
  themeMode = 'mode',
}

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {}

  getThemeMode(): EThemeMode | null {
    const value = localStorage.getItem(ELocalStorageKeys.themeMode)
    if (!value) return null
    return getEnumElemByValue(EThemeMode, value)
  }

  setThemeMode(mode: EThemeMode): void {
    localStorage.setItem(ELocalStorageKeys.themeMode, mode)
  }

  getTheme(): ETheme | null {
    const value = localStorage.getItem(ELocalStorageKeys.theme)
    if (!value) return null
    return getEnumElemByValue(ETheme, value)
  }

  setTheme(theme: ETheme): void {
    localStorage.setItem(ELocalStorageKeys.theme, theme)
  }
}
