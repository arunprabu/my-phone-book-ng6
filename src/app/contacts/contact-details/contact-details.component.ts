import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../contact.service';

declare var $: any;

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;

  constructor( private contactService: ContactService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    //read url parameters in angular 
    let _contactId = this.route.snapshot.params.id;

    this.contactService.getContactById(_contactId)
        .subscribe( (res: any) => {
          console.log( res);
          this.contactData = res;
        });
  }

  onUpdateHandler(){
    console.log(this.duplicateContactData);

    this.contactService.updatedContactById(this.duplicateContactData)
                      .subscribe( (res) => {
                        console.log( res);
                      })

  }

  openEditModal(){
    //open bs modal thru js
    $('#editContactModal').modal('show');
    //duplicating obj
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }
}
