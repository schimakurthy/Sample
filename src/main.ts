import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
import {AppModule} from './app/app.module';
import './scripts/css/style.css';

// if (process.env.ENV === 'production') {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
 .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));