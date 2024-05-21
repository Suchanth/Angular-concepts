import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  isActive:boolean=true;
  textColor:string='blue';
  source:string='./assets/kakashi.jpg'
  isDisabled:boolean=false;
  buttonText:string='Click Me'


  onSubmit(){
    console.log("Button is Clicked")
  }
}
