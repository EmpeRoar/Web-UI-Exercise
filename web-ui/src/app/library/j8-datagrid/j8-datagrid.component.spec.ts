import { ComponentFixture, TestBed } from '@angular/core/testing';

import { J8DatagridComponent } from './j8-datagrid.component';

describe('J8DatagridComponent', () => {
  let component: J8DatagridComponent;
  let fixture: ComponentFixture<J8DatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ J8DatagridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(J8DatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
