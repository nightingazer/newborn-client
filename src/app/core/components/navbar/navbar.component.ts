import { Component, Inject, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatChipsModule } from '@angular/material/chips'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'

import { map, Subscription } from 'rxjs'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

import { APP_LANGUAGES, APP_METADATA } from '~core/constants'
import { AppMetadata, ELangCodes as ELangCode, ILanguage } from '~core/models'
import { ETheme, EThemeMode } from 'src/app/features/store/theme/theme.reducer'
import { ThemeFacade } from 'src/app/features/store'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    TranslateModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  themes: (keyof typeof ETheme)[]

  ETheme = ETheme
  EThemeMode = EThemeMode

  currentTheme = this.themeFacade.theme$.pipe(map((theme) => theme.replace('-', ' ')))
  currentMode = this.themeFacade.mode$

  subscriptions: Subscription[] = []

  constructor(
    @Inject(APP_METADATA) public metadata: AppMetadata,
    @Inject(APP_LANGUAGES) public languages: ILanguage[],
    private themeFacade: ThemeFacade,
    private translate: TranslateService
  ) {
    this.themes = Object.keys(ETheme) as (keyof typeof ETheme)[]
  }

  ngOnInit(): void {
    return
  }

  setTheme(theme: ETheme): void {
    this.themeFacade.setTheme(theme)
  }

  toggleMode(): void {
    this.themeFacade.toggleMode()
  }

  changeLanguage(code: ELangCode): void {
    this.translate.use(code.toString())
  }
}
