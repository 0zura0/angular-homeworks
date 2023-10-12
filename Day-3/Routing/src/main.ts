import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/Routes/app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/Core/Components/app.component';


// platformBrowserDynamic().bootstrapModule(AppModule)
bootstrapApplication(AppComponent
  ,{
  providers:[
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideHttpClient()
  ]
}
)
  .catch(err => console.error(err));
