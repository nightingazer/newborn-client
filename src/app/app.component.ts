import { CommonModule } from '@angular/common'
import { Component, Inject, InjectionToken, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { APP_METADATA } from '~core/constants'
import { AppMetadata } from '~core/models'
import packageInfo from '../../package.json'

const appMetadata: AppMetadata = {
  name: packageInfo.name,
  version: packageInfo.version,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule],
  providers: [{ provide: APP_METADATA, useValue: appMetadata }],
})
export class AppComponent implements OnInit {
  title = ''

  constructor(@Inject(APP_METADATA) private appMetadata: AppMetadata) {}
  ngOnInit(): void {
    this.title = this.appMetadata.name
  }
}
