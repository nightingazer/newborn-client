import { Injectable } from '@angular/core'
import { ETheme } from 'src/app/features/store/theme/theme.reducer'
import { getEnumElemByValue } from 'src/app/utils'

export enum ELocalStorageKeys {
  theme = 'theme',
}

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {}

  getTheme(): ETheme | null {
    const value = localStorage.getItem(ELocalStorageKeys.theme)
    if (!value) return null
    return getEnumElemByValue(ETheme, value)
  }

  setTheme(theme: ETheme): void {
    localStorage.setItem(ELocalStorageKeys.theme, theme)
  }
}
