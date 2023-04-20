import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//chạy thẳng root
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
