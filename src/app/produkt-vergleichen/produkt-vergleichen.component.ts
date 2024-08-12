import { Component, OnInit } from '@angular/core';
import { DataSharer } from 'src/app/core/services/datasharer.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-produkt-vergleichen',
  templateUrl: './produkt-vergleichen.component.html',
  styleUrls: ['./produkt-vergleichen.component.css']
})
export class ProduktVergleichenComponent implements OnInit {
  public products: Observable<any>;

  constructor(private sharer: DataSharer, private location: Location) { }

  ngOnInit(): void {
    this.sharer.currentSelectedList.subscribe(list => this.products = list);
  }
  public starScore(score: number) {
    return new Array(Math.floor(score));
  }
  public reminderStar(score: number) {
    const reminder = 5 - Math.floor(score);
    return new Array(Math.floor(reminder));
  }

  goBack() {
    this.location.back();
  }
}


