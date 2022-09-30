import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DireccionesService } from './servicio/direcciones.service';
import { DireccionesNormalizadas } from './models/direcciones';
import { FormControl } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DireccionesService]
})
export class AppComponent implements OnInit, OnDestroy {
  public direcciones: DireccionesNormalizadas[] | any;
  search = new FormControl('');

  public checkObservable: any;

  constructor(private direccionesService: DireccionesService) {

  }

  ngOnInit(): void {
    this.search.valueChanges.subscribe({
      next: (direccion) => {
        if (direccion.length >= 5) {
          this.checkObservable = this.direccionesService.getDirecciones(direccion).pipe(delay(300)).subscribe({
            next: (response: any) => {
              this.direcciones = response.direccionesNormalizadas;
            }
          });
        } else {
          this.direcciones = [];
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.checkObservable.unsubscribe();
  }

}

