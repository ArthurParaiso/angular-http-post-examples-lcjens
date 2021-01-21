import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostRequestComponent, PostRequestTypedComponent, PostRequestErrorHandlingComponent, PostRequestHeadersComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        PostRequestComponent,
        PostRequestTypedComponent,
        PostRequestErrorHandlingComponent,
        PostRequestHeadersComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }