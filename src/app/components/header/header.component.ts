import { Component, Input } from '@angular/core';
import { Rate } from 'src/app/interface/rate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() rates: Rate[];
}
