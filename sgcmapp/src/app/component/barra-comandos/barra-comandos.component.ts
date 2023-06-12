import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-comandos',
  templateUrl: './barra-comandos.component.html',
  styles: [
  ]
})
export class BarraComandosComponent {

  @Output() eventoBusca = new EventEmitter();

  busca(termoBusca: string) {
    this.eventoBusca.emit(termoBusca);
  }

}
