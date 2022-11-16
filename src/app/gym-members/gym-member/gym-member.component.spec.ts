import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymMemberComponent } from './gym-member.component';

describe('GymMemberComponent', () => {
  let component: GymMemberComponent;
  let fixture: ComponentFixture<GymMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
