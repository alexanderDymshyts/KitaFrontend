import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildActivitiesOverviewComponent } from './child-activities-overview.component';

describe('ChildActivitiesOverviewComponent', () => {
  let component: ChildActivitiesOverviewComponent;
  let fixture: ComponentFixture<ChildActivitiesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildActivitiesOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildActivitiesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
