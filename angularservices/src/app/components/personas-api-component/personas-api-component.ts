import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../service/service.personas';

@Component({
  selector: 'app-personas-api-component',
  standalone: true,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: PersonaService,
  ) {}

  // async ngOnInit(): Promise<void> {
  //   this._service.getPersonas().subscribe((response) => {
  //     this.personas = response;
  //     this._cdr.detectChanges();
  //   });
  // }

  // ngOnInit(): void {
  //   this._service.getPersonas().subscribe((response) => {
  //     this.personas = response;
  //     this._cdr.detectChanges();
  //   });
  // }

  ngOnInit(): void {
    this._service.getPersonas().subscribe({next: (response) => {
      this.personas = response;
      this._cdr.detectChanges();
    }, error: (error) => {
      console.error('Error fetching personas:', error);
    }});
  }
}
