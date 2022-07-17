import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { ThemeStore } from './theme/theme-store'
import { environment } from 'src/environments/environment'

const { STORE_MODULES } = environment

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot([]), EffectsModule.forRoot([]), ThemeStore, ...STORE_MODULES],
})
export class AppStoreModule {}
