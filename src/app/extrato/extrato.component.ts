import { Component, Input, OnInit, Output } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
