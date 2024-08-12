import { Component, OnInit, Input } from '@angular/core';
import { DataSharer } from 'src/app/core/services/datasharer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alternativen',
  templateUrl: './alternativen.component.html',
  styleUrls: ['./alternativen.component.css']
})
export class AlternativenComponent implements OnInit {
  @Input()
  public product: any;
  public similarProducts: any;
  public isLoaded = false;

  public ngOnInit(): void {
    this.getThreeSimilarProducts();
  }
  constructor(public sharer: DataSharer, private router: Router) { }

  /*
    Getting the products and sort them
  */
  getThreeSimilarProducts = () => this.sharer.currentList.subscribe(list => {
    this.similarProducts = [];
    for (const product of list) {
      if (product.payload.doc.data()['productID'] === this.product.productID) {
        continue;
      }
      if (product.payload.doc.data()['nahrungsmittelTyp'] === this.product.nahrungsmittelTyp){
        this.similarProducts.push(product);
      }
    }
    this.similarProducts.sort((b, a) => {
      return a.payload.doc.data().foodPrintScore - b.payload.doc.data().foodPrintScore;
    });
    this.similarProducts = this.similarProducts.slice(0, 3);
    this.isLoaded = true;
  })

  public starScore(score: number) {
    return new Array(Math.floor(score));
  }
  public reminderStar(score: number) {
    const reminder = 5 - Math.floor(score);
    return new Array(Math.floor(reminder));
  }
}
