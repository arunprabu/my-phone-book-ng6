import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient ) { }

  //creating Contact
  createContact( contactData: any ) { //Step 1: receive the data
    console.log(contactData); 

    //Step2: connect to rest api and send the above data 
    return this.http.post("http://jsonplaceholder.typicode.com/users", contactData)
              .pipe(map( (res: any) => { //Step3: get the resp from rest api 
                console.log(res);
                return res;    //Step 4: send the resp back to component 
              }));
  }

}
