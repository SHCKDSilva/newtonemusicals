import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '@newtone/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent, LayoutComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
