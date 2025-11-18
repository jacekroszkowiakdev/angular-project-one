import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import App from './app/app';

/**
 * Bootstraps the root App component using configuration from app.config.ts.
 */
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
