import { CommonModule } from '@angular/common'
import { Component, Inject, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { NavbarComponent } from '~core/components/navbar/navbar.component'
import { APP_LANGUAGES, APP_METADATA } from '~core/constants'
import { LANGS } from '~core/constants/languages'
import { AppMetadata } from '~core/models'
import packageInfo from '../../package.json'
import { ThemeFacade } from './features/store'

const appMetadata: AppMetadata = {
  name: packageInfo.name,
  version: packageInfo.version,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule, NavbarComponent],
  providers: [
    { provide: APP_METADATA, useValue: appMetadata },
    { provide: APP_LANGUAGES, useValue: LANGS },
  ],
})
export class AppComponent implements OnInit {
  title = ''

  constructor(
    @Inject(APP_METADATA) private appMetadata: AppMetadata,
    public themeFacade: ThemeFacade,
    private translation: TranslateService
  ) {}
  ngOnInit(): void {
    this.title = this.appMetadata.name
    this.themeFacade.init()
    this.translation.setDefaultLang('en')
    const lang = this.translation.getBrowserLang() || this.translation.defaultLang
    this.translation.use(lang)
    console.log(lang, this.translation.getLangs(), this.translation.currentLang)
  }
}
