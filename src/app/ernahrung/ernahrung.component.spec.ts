import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErnahrungComponent } from './ernahrung.component';

describe('ErnahrungComponent', () => {
  let component: ErnahrungComponent;
  let fixture: ComponentFixture<ErnahrungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErnahrungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErnahrungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
