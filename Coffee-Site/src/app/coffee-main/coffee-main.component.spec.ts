import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeMainComponent } from './coffee-main.component';

describe('CoffeeMainComponent', () => {
  let component: CoffeeMainComponent;
  let fixture: ComponentFixture<CoffeeMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeMainComponent]
    });
    fixture = TestBed.createComponent(CoffeeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
