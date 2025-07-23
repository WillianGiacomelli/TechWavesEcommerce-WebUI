import { Component, inject, input, OnInit } from '@angular/core';
import { CartBehaviorService } from '../../../../services/state/cart.service';
import CategoryModel from '../../../../../../core/models/navbar/category/category.model';

@Component({
  selector: 'app-public-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  public menuItens = input<CategoryModel[] | null>([]);

  public isThereAnyItemInCart: boolean = true;
  public isMenuOpen = false;
  public isDropdownOpened = false;


  public cartService = inject(CartBehaviorService);

  async ngOnInit(): Promise<void> {
    if(!this.cartService.getProductsAdded()){
      await this.cartService.getCartItemsFromIndexedDB();
    }
    console.log("menu", this.menuItens());
    this.isThereAnyItemInCart = !!this.cartService.getProductsAdded()?.length;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(){
    this.isDropdownOpened = !this.isDropdownOpened;
  }

}
