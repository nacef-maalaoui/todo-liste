import { Component } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {

  todos : any = [];

  constructor(private _data: DataService) { }

  ngOnInit(): void {

    this._data.liste().subscribe({
      next: (res) => {
        this.todos = res;
        console.log(this.todos);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
