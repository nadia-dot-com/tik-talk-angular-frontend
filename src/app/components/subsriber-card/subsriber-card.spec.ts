import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubsriberCardComponent } from './subsriber-card';

describe('SubsriberCardComponent', () => {
  let component: SubsriberCardComponent;
  let fixture: ComponentFixture<SubsriberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsriberCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubsriberCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
