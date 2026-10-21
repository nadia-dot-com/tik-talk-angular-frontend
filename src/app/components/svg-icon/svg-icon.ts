import { Component, effect, inject, input, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'svg[icon]',
  template: '',
  host: {
    '[innerHTML]': 'svgContent()',
  },
})
export class SvgIconComponent {
  icon = input<string>('');
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  svgContent = signal<SafeHtml | null>(null);

  constructor() {
    effect(() => {
      const iconName = this.icon();
      if (!iconName) return;

      this.http.get(`/assets/svg/${iconName}.svg`, { responseType: 'text' })
        .subscribe(svg => this.svgContent.set(this.sanitizer.bypassSecurityTrustHtml(svg)));
    });
  }
}
