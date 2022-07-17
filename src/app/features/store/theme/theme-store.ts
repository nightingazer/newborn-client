import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ThemeEffects } from './theme.effects'
import { themeFeature } from './theme.reducer'

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(themeFeature), EffectsModule.forFeature([ThemeEffects])],
})
export class ThemeStore {}
