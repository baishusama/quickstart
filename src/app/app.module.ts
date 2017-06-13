import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // for ngModel directive
import {AppComponent}  from './app.component';
import {PairDetailComponent} from './pair-detail.component';
import {HeroDetailComponent} from './hero-detail.component';
import {BossDetailComponent} from './boss-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        PairDetailComponent,
        HeroDetailComponent,
        BossDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
