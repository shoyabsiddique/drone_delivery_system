import { Component } from '@angular/core';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  pid: number = 0;
  weight: number = 0;
  p_cost: number = 0;
  p_desc: string = '';
  p_stock: number = 0;
  oid: number = 0;
}
