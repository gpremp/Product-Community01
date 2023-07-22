import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../ApiServices/user-api.service';
import { Stats } from '../entities/Stats';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  stats:Stats = new Stats();
  constructor(private userService:UserApiService) { }

  /**
   * Getting the details ofnumber of users, number of products and number of reviews
   */
  ngOnInit(): void {
    this.userService.getStats().subscribe(
      (data:any)=>{
        this.stats = data;
        console.log(this.stats)
      }
    )
  }

}
