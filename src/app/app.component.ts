import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'tip-calculator';
  price:any;
  test:any;
  percent:any;
  myForm!: FormGroup;
  value: any;


  get tip(){
    return Math.round(this.price * this.percent/100);
   
  }

  

  Form(){
    this.test = document.getElementById('myForm');
    this.test.reset();
    
  }

}
