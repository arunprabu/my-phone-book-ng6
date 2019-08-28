import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';

const APP_ROUTES: Routes = [
  //syntax
  { path: '', component: ConceptsComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent },
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
    CebComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule   // needed when you use forms and two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]  // Step3: Bootstrapping the AppModule with AppComponent 
})
export class AppModule { }
