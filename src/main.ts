import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent,
	{
		providers: [
			provideProtractorTestingSupport(),
			provideRouter(routeConfig),
			provideAnimations()
		]
	}).catch(err => console.error(err));
