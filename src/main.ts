import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent,
	{
		providers: [provideProtractorTestingSupport(), provideAnimations()]
	}).catch(err => console.error(err));
