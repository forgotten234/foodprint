import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataSharer } from 'src/app/core/services/datasharer.service';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-produktdetails',
  templateUrl: './produktdetails.component.html',
  styleUrls: ['./produktdetails.component.css']
})
export class ProduktdetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  mySubscription: any;
  public productID: string;
  public product: Observable<any>;
  constructor(private route: ActivatedRoute, public sharer: DataSharer, private router: Router, private location: Location) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.getProducts();
  }
  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  ngAfterViewInit() {
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

  getProducts = () => this.sharer.currentList.subscribe(list => {
    const id = (this.route.snapshot.paramMap.get('id'));
    this.productID = id;
    for (const item of list) {
      // über response von Datenbank iterieren
      if (item.payload.doc.data()['productID'] === Number(this.productID)) {
        // abfrage, nach Item aus Datenbank mit dem unsere ProductID identisch ist
        // parseInt wandelt string in number um, da productID ein string ist und in der DB vom  typ number
        this.product = item.payload.doc.data(); // gefundenes Produkt wird der property product zugewiesen
      }
    }
  })

  public createArray(score: number) {
    return new Array(Math.floor(score));
  }
  public starScore(score: number) {
    return new Array(Math.floor(score));
  }
  public reminderStar(score: number) {
    const reminder = 5 - Math.floor(score);
    return new Array(Math.floor(reminder));
  }


}
