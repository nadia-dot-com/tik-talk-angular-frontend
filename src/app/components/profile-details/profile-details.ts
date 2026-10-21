import { Component, DestroyRef, ElementRef, inject, input, signal, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-details',
  styleUrl: './profile-details.scss',
  templateUrl: './profile-details.html',
})
export class ProfileDetailsComponent {
  stack = input<string[]>([]);
  description = input<string>('');

  skillsExpanded = signal(false);
  hasOverflow = signal(false);

  @ViewChild('skills') skillsRef!: ElementRef<HTMLUListElement>;

  resizeObserver = new ResizeObserver(() =>
    this.hasOverflow.set(this.skillsRef.nativeElement.scrollHeight > this.skillsRef.nativeElement.clientHeight)
  );

  constructor() {
    inject(DestroyRef).onDestroy(() => this.resizeObserver.disconnect());
  }

  ngAfterViewInit() {
    this.resizeObserver.observe(this.skillsRef.nativeElement);
  }

  toggleExpanded() {
    this.skillsExpanded.set(!this.skillsExpanded());
  }
}
