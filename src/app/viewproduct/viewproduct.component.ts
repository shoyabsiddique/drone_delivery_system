import { Component } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css'],
})
export class ViewproductComponent {
  data: any;
  searchQuery: string = '';
  constructor(
    private fetchData: FetchDataService,
    private router: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.fetchData.dataAdded.subscribe(
      this.fetchData.getData().subscribe(
        (response) => {
          this.data = response;
        },
        (error) => {
          console.log(error);
        }
      )
    );
    this.fetchData.dataDeleted.subscribe(
      this.fetchData.getData().subscribe(
        (response) => {
          this.data = response;
        },
        (error) => {
          console.log(error);
        }
      )
    );
    this.fetchData.dataUpdated.subscribe(
      this.fetchData.getData().subscribe(
        (response) => {
          this.data = response;
        },
        (error) => {
          console.log(error);
        }
      )
    );
    this.fetchData.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.log(error);
      }
    );
    // console.log(this.data);
  }
  searchData() {
    console.log('Called');
    this.fetchData.search(this.searchQuery).subscribe(
      (response) => {
        console.log(this.router.component == ViewproductComponent);

        if (this.router.component == ViewproductComponent) {
          this.data = response;
          console.log(response);
        }
      },
      (error) => {
        console.log(error);
      }
    );
    // console.log(this.data);
  }
  deleteRow(pid: number) {
    this.http
      .post('http://localhost:3000/delete', {
        pid: pid.toString(),
      })
      .subscribe(
        (response) => {
          console.log('Deleted');
          this.fetchData.dataDeleted.emit();
          location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
