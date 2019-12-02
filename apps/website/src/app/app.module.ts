import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppHttpClient, AppHttpClientCreator } from '@theapp/utils';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    HttpClientModule
  ],
  providers: [{
    provide: AppHttpClient,
    useFactory: AppHttpClientCreator,
    deps: [HttpClient]
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
