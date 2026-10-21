import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar';
import { ProfileService } from './services/profile';

@Component({
  imports: [RouterOutlet, SidebarComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  profileService = inject(ProfileService);
  me = this.profileService.me;
  title = 'my-angular';

  ngOnInit() {
    console.log('ngOnInit');
    this.profileService.getMe().subscribe(val => console.log(val))
  }
}
