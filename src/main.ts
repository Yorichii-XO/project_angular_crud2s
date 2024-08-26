import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule, CommonModule) // Add FormsModule and CommonModule to providers
  ]
})
  .catch((err: any) => console.error(err));
