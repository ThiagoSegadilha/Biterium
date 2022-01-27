import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  transferir() {
    console.log(`Foi transferido ${this.valor} reais paara sua conta na Biterium`)
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCaamps();
  }

  limparCaamps() {
    this.valor = 0;
    this.destino = 0;
  }
}

