import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostInputComponent } from './post-input';

describe('PostInputComponent', () => {
  let component: PostInputComponent;
  let fixture: ComponentFixture<PostInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostInputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostInputComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
