import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  todo = {
    text : '',
    priority : 0
  }


  constructor(private _data : DataService) { }

  ajout(){
    this._data.create(this.todo).subscribe({
      next : (res) =>{
        console.log(res);
      },
      error : (err) =>{
        console.log(err);
      }
    })
  }
}
