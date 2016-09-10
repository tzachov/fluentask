import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

import { TaskService} from './app/shared';
//import { } from './app/shared';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [TaskService]);
