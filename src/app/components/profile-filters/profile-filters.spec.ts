import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileFiltersComponent } from './profile-filters';

describe('ProfileFiltersComponent', () => {
  let component: ProfileFiltersComponent;
  let fixture: ComponentFixture<ProfileFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFiltersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfileFiltersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
