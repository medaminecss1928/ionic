import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireserviceService } from '../fireservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listetodo',
  templateUrl: './listetodo.page.html',
  styleUrls: ['./listetodo.page.scss'],
})
export class ListetodoPage implements OnInit {
  tasks :any;
  public router:Router;
  constructor( public fireService:FireserviceService,
    public afDB: AngularFirestore) {  this.getTasks();}
  getTasks(){
    this.afDB.collection('tache/', ref => ref.where('checked', '==', false)).snapshotChanges(['added','removed']).subscribe(actions => {
      this.tasks = [];
      actions.forEach(action => { 
        this.tasks.push({
          key: action.payload.doc.id,
          text: action.payload.doc.get('text'),
            hour: action.payload.doc.get('date').substring(11, 16),
            checked: action.payload.doc.get('checked')
    
        });
       
  });
});
  }
  //redirect vers la liste done
  Done()
  {this.router.navigateByUrl('todo');

  }
  ngOnInit() {
  }

}
