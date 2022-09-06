import { Component, Input } from '@angular/core';
import { Irate } from 'src/app/models/rate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() rates: Irate[];
}
