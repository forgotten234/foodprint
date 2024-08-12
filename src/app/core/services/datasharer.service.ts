import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
    {   
        providedIn: 'root'
    }
)
export class DataSharer {
    // general product list
    public productList: any = [];
    private listSource = new BehaviorSubject(this.productList);
    currentList = this.listSource.asObservable();

    // selected product list
    public selectedProductList: any = [];
    private selectedListSource = new BehaviorSubject(this.selectedProductList);
    currentSelectedList = this.selectedListSource.asObservable();

    changeList(list: any){
        this.listSource.next(list);
    }
    
    changeSelectedList(selectedList: any){
        this.selectedListSource.next(selectedList);
    }
}
