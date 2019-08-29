import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';


const APP_ROUTES: Routes = [
  //syntax
  { path: '', component: ConceptsComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/new', component: AddContactComponent },
  { path: 'contacts/1', component: ContactDetailsComponent },
  { path: 'about', component: AboutComponent }
];

//Main Switch Box 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContactsComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    AddContactComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,   // needed when you use forms and two way binding
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Step3: Bootstrapping the AppModule with AppComponent 
})
export class AppModule { }
