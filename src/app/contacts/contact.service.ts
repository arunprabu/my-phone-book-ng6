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

    let promise = new Promise((resolve, reject) => {
      this.http.post("http://jsonplaceholder.typicode.com/users", contactData)
                .toPromise()
                .then( (res: any) => {
                  console.log(res);
                  resolve(res);
                })
                .catch( err => {
                  console.log(err);
                  reject(err);
                } )
    });
    return promise;
    
              
  }

  //get contacts 
  getContacts(){
    console.log("Inside Service")
    //1. send a get method call to rest api 
    return this.http.get("http://jsonplaceholder.typicode.com/users")
            .pipe(map( (res: any[]) => { //2. get the resp from rest api 
              console.log(res);
              return res;    //3. send the resp to the comp  
            }));
  }

  //get contact by id 
  getContactById(id){
    //1. send a get method call to rest api 
    return this.http.get("http://jsonplaceholder.typicode.com/users/"+id)
            .pipe(map( (res: any[]) => { //2. get the resp from rest api 
              console.log(res);
              return res;    //3. send the resp to the comp  
            }));
  }

  updatedContactById(updateableData){
    //1. get the date from component.ts
    return this.http.put("http://jsonplaceholder.typicode.com/users/"+updateableData.id, updateableData)
            .pipe(map( (res: any[]) => { //2. get the resp from rest api 
              console.log(res);
              return res;    //3. send the resp to the comp  
            }));
  }
  
}
