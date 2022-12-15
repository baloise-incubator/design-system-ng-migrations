import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BalCoreModule,
  BalLogoModule,
  BalNavbarModule,
  BalFooterModule,
  BalStageModule,
  BalCardModule,
  BalHeadingModule,
  BalTextModule,
  BalInputModule,
  BalNumberInputModule,
} from '@baloise/design-system-components-angular';
import { AppComponent } from './app.component';

import { balIconAccount } from '@baloise/design-system-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    /**
     * Design System Modules
     */
    BalCoreModule.forRoot({
      defaults: {
        region: 'CH',
        language: 'en',
        allowedLanguages: ['de', 'fr', 'it', 'en'],
        icons: {
          balIconAccount,
        },
      },
    }),
    BalLogoModule,
    BalNavbarModule,
    BalFooterModule,
    BalStageModule,
    BalCardModule,
    BalHeadingModule,
    BalTextModule,
    BalInputModule,
    BalNumberInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
