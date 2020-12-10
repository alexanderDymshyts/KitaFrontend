import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AussengelandeComponent } from './aussengelande.component';

describe('AussengelandeComponent', () => {
  let component: AussengelandeComponent;
  let fixture: ComponentFixture<AussengelandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AussengelandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AussengelandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
