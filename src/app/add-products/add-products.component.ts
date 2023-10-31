import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchDataService } from '../fetch-data.service';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent {
  id!: number;
  weight!: number;
  p_cost!: number;
  p_desc!: string;
  p_stock!: number;
  oid!: number;
  constructor(private http: HttpClient, private fetchData: FetchDataService) {}
  // ngOnInit() {
  //   this.route.params.subscribe((params) => (this.searchQuery = params['id']));
  //   console.log(this.searchQuery);

  //   this.fetchData.search(this.searchQuery).subscribe(
  //     (response) => {
  //       this.format = response;
  //       console.log(response);
  //       this.pid = this.format[0].pid;
  //       this.weight = this.format[0].weight;
  //       this.p_cost = this.format[0].p_cost;
  //       this.p_desc = this.format[0].p_desc;
  //       this.p_stock = this.format[0].p_stock;
  //       this.oid = this.format[0].oid;
  //       this.dataLoaded = Promise.resolve(true);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  addData() {
    console.log(this.id);

    this.http
      .post('http://localhost:3000/add', {
        pid: this.id,
        weight: this.weight,
        p_cost: this.p_cost,
        p_desc: this.p_desc,
        p_stock: this.p_stock,
        oid: this.oid,
      })
      .subscribe(
        (response) => {
          console.log(response.valueOf());
          console.log('Data added');
          this.fetchData.dataAdded.emit();

          // this.fetchData.search(this.pid.toString()).subscribe(
          //   (response) => {
          //     this.format = response;
          //     console.log(response);
          //     this.pid = this.format[0].pid;
          //     this.weight = this.format[0].weight;
          //     this.p_cost = this.format[0].p_cost;
          //     this.p_desc = this.format[0].p_desc;
          //     this.p_stock = this.format[0].p_stock;
          //     this.oid = this.format[0].oid;
          //   },
          //   (error) => {
          //     console.log(error);
          //   }
          // );
          // var res = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
