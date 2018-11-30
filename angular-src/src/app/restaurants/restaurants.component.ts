import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "../restaurants.service";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.sass"]
})
export class RestaurantsComponent implements OnInit {
  constructor(private restaurants: RestaurantsService) {}

  allRestaurants: object;

  ngOnInit() {
    this.allRestaurants = this.restaurants.getAllRestaurants();
  }

  order: boolean = true;

  //sort the restaurants
  if(order = true) {
    console.log("ascending");
    //sort by ascending
  }

  elseif(order = false) {
    //sort by descending
    console.log("descending");
  }
}
