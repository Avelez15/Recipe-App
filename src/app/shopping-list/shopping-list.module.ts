import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';

const routes: Routes = [{ path: '', component: ShoppingListComponent }];

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      'shoppingList',
      fromShoppingList.shoppingListReducer
    ),
    FormsModule,
  ],
})
export class ShoppingListModule {}
