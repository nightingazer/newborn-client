import { InjectionToken } from '@angular/core'
import { AppMetadata, ILanguage } from '~core/models'

export const APP_METADATA = new InjectionToken<AppMetadata>('app.metadata')
export const APP_LANGUAGES = new InjectionToken<ILanguage[]>('app.languages')
