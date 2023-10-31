import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css'],
})
export class UpdateproductComponent {
  pid: number = 0;
  weight: number = 0;
  p_cost: number = 0;
  p_desc: string = '';
  p_stock: number = 0;
  oid: number = 0;
  searchQuery = '';
  dataLoaded: Promise<boolean> = Promise.resolve(false);
  format: any = [
    {
      pid: 0,
      weight: 0,
      p_cost: 0,
      p_desc: '',
      p_stock: 0,
      oid: 0,
    },
  ];
  constructor(
    private http: HttpClient,
    private fetchData: FetchDataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => (this.searchQuery = params['id']));
    console.log(this.searchQuery);

    this.fetchData.search(this.searchQuery).subscribe(
      (response) => {
        this.format = response;
        console.log(response);
        this.pid = this.format[0].pid;
        this.weight = this.format[0].weight;
        this.p_cost = this.format[0].p_cost;
        this.p_desc = this.format[0].p_desc;
        this.p_stock = this.format[0].p_stock;
        this.oid = this.format[0].oid;
        this.dataLoaded = Promise.resolve(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateData() {
    console.log(this.p_desc);

    this.fetchData
      .update({
        pid: this.pid,
        weight: this.weight,
        p_cost: this.p_cost,
        p_desc: this.p_desc,
        p_stock: this.p_stock,
        oid: this.oid,
      })
      .subscribe(
        (res) => {
          // console.log(response.valueOf());
          this.fetchData.search(this.pid.toString()).subscribe(
            (response) => {
              this.format = response;
              console.log(response);
              this.pid = this.format[0].pid;
              this.weight = this.format[0].weight;
              this.p_cost = this.format[0].p_cost;
              this.p_desc = this.format[0].p_desc;
              this.p_stock = this.format[0].p_stock;
              this.oid = this.format[0].oid;
              this.fetchData.dataUpdated.emit();
              console.log(response.hasOwnProperty('status'));

              if (response.hasOwnProperty('status')) {
                alert('Data updated successfully 🥳🥳');
              }
            },
            (error) => {
              console.log(error);
            }
          );
          // var res = response.valueOf();
          console.log(res);

          if (res == 'Update successful') {
            alert('Data Updated');
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
