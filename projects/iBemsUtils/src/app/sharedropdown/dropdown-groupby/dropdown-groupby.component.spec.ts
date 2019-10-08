import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownGroupbyComponent } from './dropdown-groupby.component';

describe('DropdownGroupbyComponent', () => {
  let component: DropdownGroupbyComponent;
  let fixture: ComponentFixture<DropdownGroupbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownGroupbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownGroupbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
