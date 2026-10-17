import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-juros-compostos',
  styleUrl: './juros-compostos.css',
  templateUrl: './juros-compostos.html',
})
export class JurosCompostos {
  escolha: string = 'valorFuturo';
  valorPresente: number = 0;
  valorFuturo: number = 0;
  taxaJuros: number = 0;
  periodo: number = 0;
  resultado: string = '';

  calcular() {
    switch (this.escolha) {
      case 'valorPresente':
        this.valorPresente = this.valorFuturo / Math.pow(1 + this.taxaJuros / 100, this.periodo);
        this.resultado = `O valor presente é: ${this.valorPresente.toFixed(2)}`;
        break;
      case 'valorFuturo':
        this.valorFuturo = this.valorPresente * Math.pow(1 + this.taxaJuros / 100, this.periodo);
        this.resultado = `O valor futuro é: ${this.valorFuturo.toFixed(2)}`;
        break;
      case 'taxaJuros':
        this.taxaJuros = Math.pow(this.valorFuturo / this.valorPresente, 1 / this.periodo) - 1;
        this.resultado = `A taxa de juros é: ${(this.taxaJuros * 100).toFixed(2)}%`;
        break;
      case 'periodo':
        this.periodo =
          Math.log(this.valorFuturo / this.valorPresente) / Math.log(1 + this.taxaJuros / 100);
        this.resultado = `O período é: ${this.periodo.toFixed(2)}`;
        break;
      default:
        this.resultado = 'Escolha inválida.';
    }
  }

  limparCampos(): void {
    this.valorPresente = 0;
    this.valorFuturo = 0;
    this.taxaJuros = 0;
    this.periodo = 0;
    this.resultado = '';
  }
}
