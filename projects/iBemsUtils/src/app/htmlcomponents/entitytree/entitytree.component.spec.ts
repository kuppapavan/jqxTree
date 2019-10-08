import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitytreeComponent } from './entitytree.component';

describe('EntitytreeComponent', () => {
  let component: EntitytreeComponent;
  let fixture: ComponentFixture<EntitytreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitytreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitytreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
