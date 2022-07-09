import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsertProductNodejsComponent } from './form-insert-product-nodejs.component';

describe('FormInsertProductNodejsComponent', () => {
  let component: FormInsertProductNodejsComponent;
  let fixture: ComponentFixture<FormInsertProductNodejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInsertProductNodejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInsertProductNodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
