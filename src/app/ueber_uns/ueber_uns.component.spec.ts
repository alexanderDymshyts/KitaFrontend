import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberUnsComponent } from './ueber_uns.component';

describe('GroupsComponent', () => {
  let component: UeberUnsComponent;
  let fixture: ComponentFixture<UeberUnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UeberUnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UeberUnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
