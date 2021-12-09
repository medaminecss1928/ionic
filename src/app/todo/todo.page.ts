import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireserviceService } from '../fireservice.service';
import { Router } from '@angular/router';
import  {AngularFireAuth} from '@angular/fire/compat/auth'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  myTask :string;
  addTask: boolean;
  currentDate: string;
  posts: any;
  tasks :any;
   user:any;
   public router:Router;

  constructor(
    public fireService:FireserviceService,
    public afDB: AngularFirestore)
  { const date = new Date();
    this.currentDate=date.toLocaleString('fr-FR',{ weekday: 'long', month: 'long', day: 'numeric' });       
    this.getTasks();
    
  } 

  getUser(){
  this.fireService.auth.currentUser.then(res=>{
    let user=res.uid;
     console.log("id"  +user);}
     );
     return this.user;
  }

  //ajouter une tache a firebase
  addTaskToFirebase() {
    
    this.afDB.collection('tache').add({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false,
    });
    console.log("ppp"+this.user);
    this.showForm();
  }
  
  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }
  //retourne la liste terminal de tout les tache apres changement(tache terminer et non terminer)
  getTasks(){
    this.afDB.collection('tache/').snapshotChanges(['added','removed']).subscribe(actions => {
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

  //changer le statut d une tache 
  changeCheckState(task: any) {
    this.afDB.doc('tache/'+task.key).set({text:task.text,date:new Date().toISOString(),checked:task.checked});

  }
  //supprimer une tache 
  deleteTask(task: any) {
    
    this.afDB.doc('tache/'+task.key).delete();
  }

  ngOnInit() {
  } 
  //redirect vers la liste a faire
  liste()
  {this.router.navigateByUrl('listetodo');

  }
}
