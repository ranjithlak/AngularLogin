import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginListComponent } from './login-list.component'


import { routing } from './login-list.routing';
import { AlertComponent } from '@app/core1/_components';
import { HomeComponent } from '@app/core1/home';
import { LoginComponent } from '@app/core1/login';
import { RegisterComponent } from '@app/core1/register';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from '@app/core1/_helpers';


// used to create fake backend

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        LoginListComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ]
   
})

export class LoginListModule { }