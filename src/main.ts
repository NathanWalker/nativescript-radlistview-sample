import { enableProdMode } from '@angular/core';
import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { Utils } from '@nativescript/core';

import { AppModule } from './app/app.module'

setInterval(() => {
  Utils.GC();
}, 500);

enableProdMode();

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

