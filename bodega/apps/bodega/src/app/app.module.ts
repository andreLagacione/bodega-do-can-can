import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      outlet: 'main',
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'main',
          exposedModule: './Module'
        }).then(m => m.AppModule)
    }], { initialNavigation: 'enabledBlocking' })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
