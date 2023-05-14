import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule }
    from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { DataAccessService } from './auth/services/data-access.service';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { PagesInterceptor } from './pages/interceptor/pages.interceptor';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AuthModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    })
  ],
  providers: [DataAccessService,
    { provide: 'API_KEY', useValue: '83501792224950a1eaa948194b538fd9' },
    { provide: 'API_SECRET', useValue: '188d41f997306405e91f981ee733401eb199c5ed' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PagesInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent,],
})
export class AppModule {}
