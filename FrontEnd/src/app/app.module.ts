import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule, MatBadgeModule, MatDividerModule, MatTooltipModule, MatSelectModule, MatSnackBarModule, MatTabsModule, MatAutocompleteModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatInputModule, MatDialogModule } from  '@angular/material';

import { AccesoriesComponent } from './items/accesories/accesories.component';
import { ComicsComponent } from './items/comics/comics.component';
import { ShirtsComponent } from './items/shirts/shirts.component';
import { ToysComponent } from './items/toys/toys.component';
import { GlassesComponent } from './items/glasses/glasses.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ToyService } from './services/toy-service';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccesoryService } from './services/accesory-service';
import { GlassService } from './services/glass-service';
import { ComicService } from './services/comic-service';
import { ShirtService } from './services/shirt-service';
import { BuyComponentComponent } from './items/buy-component/buy-component.component';
import { SalesComponent } from './sales/sales.component';
import { SaleService } from './services/sale-service';



@NgModule({
  declarations: [
    AppComponent,
    AccesoriesComponent,
    ComicsComponent,
    ShirtsComponent,
    ToysComponent,
    GlassesComponent,
    AddItemComponent,
    BuyComponentComponent,
    SalesComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,


    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    AppRoutingModule, 
    BrowserAnimationsModule,   
    BrowserModule,
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatInputModule,
    BrowserModule,


    FormsModule,
    
  ],
  entryComponents:[BuyComponentComponent],
  providers: [AccesoryService, GlassService, ComicService, ShirtService,ToyService, SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
