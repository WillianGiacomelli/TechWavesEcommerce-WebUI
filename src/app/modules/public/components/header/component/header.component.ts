import { Component, inject, OnInit } from '@angular/core';
import { MenuCategorieService } from '../../../services/http/menu-categorie.service';
import CategoryModel from '../../../../../core/models/navbar/category/category.model';

@Component({
  selector: 'app-public-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit{
  public menuCategories: CategoryModel[] | null = null;
  private _menuCategoryService = inject(MenuCategorieService);

  ngOnInit(): void {
    this._getMenuCategories();
  }

  private _getMenuCategories(): void {
    this._menuCategoryService.getMenuCategories().subscribe({
      next: (categories: CategoryModel[]) => {
        this.menuCategories = categories;
      },
      error: (error) => {
        console.error('Error fetching menu categories:', error);
      }
    });
  }

}
