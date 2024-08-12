import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firestore: AngularFirestore) {

   }

  public getProducts() {
    return this.firestore.collection("Self-Research").snapshotChanges();
  }

}
