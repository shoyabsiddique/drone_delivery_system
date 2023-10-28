import { Component } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {
  data: any;
  searchQuery: string = "";
  constructor(private fetchData: FetchDataService, private router: ActivatedRoute) {
    
  }
  ngOnInit() {
    this.fetchData.getData().subscribe(
      response => { this.data = response;
       },
      error => {console.log(error);
      }
    );
    // console.log(this.data);
  }
  searchData() {
    console.log("Called");
    this.fetchData.search(this.searchQuery).subscribe(
      response => { this.data = response; console.log(response);
      
       },
      error => {console.log(error);
      }
    )
    // console.log(this.data);
    
    
  }
}
