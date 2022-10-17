import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
registerLocaleData(ptBr)

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  })
  .catch(err => console.error(err))
