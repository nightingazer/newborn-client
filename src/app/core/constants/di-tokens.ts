import { InjectionToken } from '@angular/core';
import { AppMetadata } from '~core/models';

export const APP_METADATA = new InjectionToken<AppMetadata>('app.metadata');
