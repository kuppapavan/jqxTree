import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbemsheaderComponent } from './ibemsheader.component';

describe('IbemsheaderComponent', () => {
  let component: IbemsheaderComponent;
  let fixture: ComponentFixture<IbemsheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbemsheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbemsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
