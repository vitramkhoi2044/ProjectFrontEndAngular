import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNodejsComponent } from './table-nodejs.component';

describe('TableNodejsComponent', () => {
  let component: TableNodejsComponent;
  let fixture: ComponentFixture<TableNodejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableNodejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
