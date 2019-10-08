import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbemssidebarheaderComponent } from './ibemssidebarheader.component';

describe('IbemssidebarheaderComponent', () => {
  let component: IbemssidebarheaderComponent;
  let fixture: ComponentFixture<IbemssidebarheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbemssidebarheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbemssidebarheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
