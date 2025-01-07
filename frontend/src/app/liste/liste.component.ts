import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import Swal from 'sweetalert2';


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
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  delete(id : any){
    this._data.delete(id).subscribe({
      next: (res) => {
        console.log(res);
        this.ngOnInit();

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Your todo has been deleted",
          showConfirmButton: false,
          timer: 1500
        });

      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
