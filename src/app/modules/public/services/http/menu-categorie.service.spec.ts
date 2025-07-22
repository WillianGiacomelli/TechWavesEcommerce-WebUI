import { TestBed } from '@angular/core/testing';

import { MenuCategorieService } from './menu-categorie.service';

describe('MenuCategorieService', () => {
  let service: MenuCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
