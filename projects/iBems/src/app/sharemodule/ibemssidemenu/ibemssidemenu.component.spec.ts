import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbemssidemenuComponent } from './ibemssidemenu.component';

describe('IbemssidemenuComponent', () => {
  let component: IbemssidemenuComponent;
  let fixture: ComponentFixture<IbemssidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbemssidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbemssidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
