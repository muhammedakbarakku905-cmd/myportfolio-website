import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent] // Use the correct component class
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger Angular lifecycle
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

