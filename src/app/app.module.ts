import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    PokeCardComponent,
    PokeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
