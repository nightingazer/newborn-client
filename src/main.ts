import { enableProdMode, importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app/app.component'

import { environment } from './environments/environment'
import { RouterModule } from '@angular/router'
import { ROUTES } from './app/app-routes'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppStoreModule } from './app/features'

if (environment.production) {
  enableProdMode()
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
    importProvidersFrom(RouterModule.forRoot(ROUTES)),
    importProvidersFrom(AppStoreModule),
  ],
}).catch((err) => console.error(err))
