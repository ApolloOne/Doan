import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsTypeComponent } from './charts-type.component';

describe('ChartsTypeComponent', () => {
  let component: ChartsTypeComponent;
  let fixture: ComponentFixture<ChartsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
