import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StartupService } from './core/startup/startup.service';
import { CoreModule } from './core/core.module';


export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.initializeApp();
}

const modules = [
  SharedModule,
  CoreModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    ...modules
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
