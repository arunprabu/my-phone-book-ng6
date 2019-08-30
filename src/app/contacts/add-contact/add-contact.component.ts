import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  isSaved: boolean; 
  //Step 1: Create Form group
  contactForm: FormGroup;
  
  constructor( private contactService: ContactService ) { }

  ngOnInit() {

    //Step 2: 
    this.contactForm = new FormGroup({
      //Step3: 
       // we'll create new form controls 
       name: new FormControl('', Validators.required ),  //step5: adding validators 
       email: new FormControl('', [Validators.required, 
                                   Validators.email]
                             ),
       phone: new FormControl('', Validators.required )
    });

  }

  //Rest API submission flow
  
  async onAddContactBtnClick(){
    console.log(" Submit Btn clicked ");
    console.log(this.contactForm.value ) ;//Step 1: get the html form data in ts 

    //step 2: 
      //Step 2.1 Connect to service 
      //Step.2.2 send the form data to services 

    let status: any = await this.contactService.createContact(this.contactForm.value )
    console.log(status);    
    if(status && status.id ){
      this.isSaved = true;
    }                    

  }
}
