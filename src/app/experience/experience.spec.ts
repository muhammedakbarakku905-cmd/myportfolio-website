import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent] // Use the correct component class
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
