import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ReportLayoutComponent } from './report-layout/report-layout.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ReportLayoutComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
