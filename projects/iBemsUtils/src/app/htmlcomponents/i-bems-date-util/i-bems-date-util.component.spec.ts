import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBemsDateUtilComponent } from './i-bems-date-util.component';

describe('IBemsDateUtilComponent', () => {
  let component: IBemsDateUtilComponent;
  let fixture: ComponentFixture<IBemsDateUtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBemsDateUtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBemsDateUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
