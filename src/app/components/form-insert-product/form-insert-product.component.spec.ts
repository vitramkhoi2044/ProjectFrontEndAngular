import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsertProductComponent } from './form-insert-product.component';

describe('FormInsertProductComponent', () => {
  let component: FormInsertProductComponent;
  let fixture: ComponentFixture<FormInsertProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInsertProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInsertProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
