import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AccesoriesComponent } from './items/accesories/accesories.component';
import { ComicsComponent } from './items/comics/comics.component';
import { GlassesComponent } from './items/glasses/glasses.component';
import { ShirtsComponent } from './items/shirts/shirts.component';
import { ToysComponent } from './items/toys/toys.component';
import { AddItemComponent } from './add-item/add-item.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {path:"accesories", component: AccesoriesComponent},
  {path:"comics", component: ComicsComponent},
  {path:"glasses", component: GlassesComponent},
  {path:"shirts", component: ShirtsComponent},
  {path:"toys", component: ToysComponent},
  {path:"add-item", component: AddItemComponent},
  {path:"sales", component: SalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
