import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceChildComponent } from './experience-child.component';

describe('ExperienceChildComponent', () => {
  let component: ExperienceChildComponent;
  let fixture: ComponentFixture<ExperienceChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
