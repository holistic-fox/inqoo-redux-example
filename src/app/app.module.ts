import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {inqooReducer} from "./store/inqoo-reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {storeName} from "./store/inqoo-state";
import { EqualizerViewComponent } from './components/equalizer-view/equalizer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EqualizerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({[storeName]: inqooReducer}),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
