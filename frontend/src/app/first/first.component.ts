import { Component } from '@angular/core';
import { CreateComponent } from '../create/create.component';
import { ListeComponent } from '../liste/liste.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CreateComponent , ListeComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

}
