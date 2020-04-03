import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomOperationComponent } from './random-operation.component';

describe('RandomOperationComponent', () => {
  let component: RandomOperationComponent;
  let fixture: ComponentFixture<RandomOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
