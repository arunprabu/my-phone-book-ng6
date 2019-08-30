import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  //all variables here
  contactList: any[];
  contactsSubscription: Subscription;

  constructor( private contactService: ContactService) {   //1. connect to service
    console.log("1. Inside constructor");
  }

  ngOnInit() {
    console.log("2. Inside ngOnInit");
   
    //2. send the call to service 
    this.contactsSubscription = this.contactService.getContacts()
                .subscribe( (res: any[]) => {     //3. get the resp from service 
                  console.log(res);
                  this.contactList = res;
                });
  }

  //lifecycle hook to destroy data, unsubscribe 
  ngOnDestroy(){
    console.log("Inside Destroy");
    this.contactsSubscription.unsubscribe();
    this.contactList = [];
  }

}
