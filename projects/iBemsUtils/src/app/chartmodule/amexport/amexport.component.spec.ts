import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmexportComponent } from './amexport.component';

describe('AmexportComponent', () => {
  let component: AmexportComponent;
  let fixture: ComponentFixture<AmexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
