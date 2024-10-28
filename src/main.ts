import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { SignupComponent } from './app/pages/signup/signup.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'signup', component: SignupComponent },
      ...routes,
    ]),

    provideHttpClient(
      withInterceptorsFromDi()
    ), provideAnimationsAsync(),
  ]
})
.catch(err => console.error(err));
