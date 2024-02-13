// import { bootstrapApplication } from "@angular/platform-browser";
// import { AppComponent } from "./app/app.component";
// bootstrapApplication(AppComponent).catch(e => console.error(e));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);