// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// app
import { APP_COMPONENTS } from './components/index';
import { APP_PROVIDERS } from './services/index';
import { MultilingualModule } from '../i18n/multilingual.module';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MultilingualModule,
  ],
  declarations: [
    APP_COMPONENTS
  ],
  providers: [
    APP_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    APP_COMPONENTS,
    MultilingualModule
  ]
})
export class AppModule {

  constructor(@Optional() @SkipSelf() parentModule: AppModule) {
    if (parentModule) {
      throw new Error('AppModule already loaded; Import in root module only.');
    }
  }
}
