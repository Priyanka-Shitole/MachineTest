import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TableSelectionExampleComponent } from './table-selection-example/table-selection-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TableSelectionExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule
  ],
  exports:[MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
