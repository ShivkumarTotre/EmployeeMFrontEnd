import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavetypeInfoComponent } from './leavetype-info.component';

describe('LeavetypeInfoComponent', () => {
  let component: LeavetypeInfoComponent;
  let fixture: ComponentFixture<LeavetypeInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeavetypeInfoComponent]
    });
    fixture = TestBed.createComponent(LeavetypeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
