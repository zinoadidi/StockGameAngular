import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayManagerComponent } from './day-manager.component';

describe('DayManagerComponent', () => {
  let component: DayManagerComponent;
  let fixture: ComponentFixture<DayManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
