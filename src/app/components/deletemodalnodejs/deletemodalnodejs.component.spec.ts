import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemodalnodejsComponent } from './deletemodalnodejs.component';

describe('DeletemodalnodejsComponent', () => {
  let component: DeletemodalnodejsComponent;
  let fixture: ComponentFixture<DeletemodalnodejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletemodalnodejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemodalnodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
