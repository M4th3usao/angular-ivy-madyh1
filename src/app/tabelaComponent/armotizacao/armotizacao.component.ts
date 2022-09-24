import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-armotizacao',
  templateUrl: './armotizacao.component.html',
  styleUrls: ['./armotizacao.component.css'],
})
export class ArmotizacaoComponent implements OnInit {
  @Input() PMT: string;
  @Input() Pv: string;
  @Input() i: string;
  @Input() n: string;
  constructor() {}

  ngOnInit() {}

  getPrice() {
    return (
      Number(this.Pv) *
      (((1 + Number(this.i)) ** Number(this.n) * Number(this.i)) /
        (1 + Number(this.i) ** Number(this.n) - 1))
    );
  }
}

// Pv *[(1+i)n * i] / [(1+i)n – 1]
// return Number(this.c) * (1 * Number(this.i)) ** Number(this.t);
