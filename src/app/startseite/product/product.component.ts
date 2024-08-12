import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase/firebaseservice.service';
import { FilterPropertyPipe } from 'src/app/pipes/filter-property.pipe';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import { DataSharer } from 'src/app/core/services/datasharer.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [SortPipe, FilterPropertyPipe]
})

export class ProductComponent implements OnInit {
  @Input() productName: string;
  public productList = new Array();
  public filteredProductList = new Array();
  public selectedField = "";
  public maxPrice: number;
  public minPrice: number;
  public validate = true;
  public scoreValue: number;
  public categories = [
    { name: "Bio", checked: false },
    { name: "Vegan", checked: false },
    { name: "Vegetarisch", checked: false },
    { name: "Tierwohl", checked: false },
    { name: "Fairtrade", checked: false },
  ];
  public selectedProducts: any = [];
  public selectedCounter = 0;
  public ngOnInit(): void {
    this.getProducts();
    this.filteredProductList = this.productList;
  }

  constructor(public firebaseService: FirebaseService, public sharer: DataSharer, public sortP: SortPipe, public filterPropertyP: FilterPropertyPipe) { }

  getProducts = () => this.sharer.currentList.subscribe(list => {
    for (const item of list) {
      this.productList.push(item.payload.doc.data());
    }
  })

  onChange(product: any, isChecked: boolean) {
    if (isChecked) {
      this.selectedCounter++;
      this.selectedProducts.push(product);
    } else {
      this.selectedCounter--;
      const index = this.selectedProducts.indexOf(product);
      if (index > -1) {
        this.selectedProducts.splice(index, 1);
      }
    }
  }

  onClick() {
    this.sharer.changeSelectedList(this.selectedProducts);
  }

  public starScore(score: number) {
    return new Array(Math.floor(score));
  }

  public sort(list: any[], order: boolean) {
    return this.sortP.transform(list, this.selectedField, order);
  }

  public filterList(event?: any) {
    const categories = this.categories.filter(item => item.checked);
    const categoryNames = new Array();
    for (const i of categories) {
      categoryNames.push(i.name);
    }
    if (event) { this.scoreValue = Number(event.target.value); }
    if (this.maxPrice) {
      this.minPrice < this.maxPrice ? this.validate = true : this.validate = false;
    }
    if ((categories.length > 0) || (((this.maxPrice || this.minPrice) !== undefined || null) || (this.minPrice < this.maxPrice)) || (this.scoreValue > 0)) {
      this.filteredProductList = this.filterPropertyP.transform(this.productList, categoryNames, this.maxPrice, this.minPrice, this.scoreValue);
    } else {
      this.filteredProductList = this.productList;
    }

  }
  public reminderStar(score: number) {
    const reminder = 5 - Math.floor(score);
    return new Array(Math.floor(reminder));
  }
}