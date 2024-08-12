import { Component, OnInit } from '@angular/core';
import { DataSharer } from 'src/app/core/services/datasharer.service';
import { FirebaseService } from 'src/app/core/services/firebase/firebaseservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Foodprint';

  constructor(private service: FirebaseService, private sharer: DataSharer){}
  ngOnInit(){
    this.service.getProducts().subscribe(list => {
      this.sharer.changeList(list);
    });
  }
}
