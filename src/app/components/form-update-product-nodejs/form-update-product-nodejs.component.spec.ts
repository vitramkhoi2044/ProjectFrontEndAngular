import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateProductNodejsComponent } from './form-update-product-nodejs.component';

describe('FormUpdateProductNodejsComponent', () => {
  let component: FormUpdateProductNodejsComponent;
  let fixture: ComponentFixture<FormUpdateProductNodejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdateProductNodejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateProductNodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
