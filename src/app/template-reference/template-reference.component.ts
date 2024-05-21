import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  standalone: true,
  imports: [],
  templateUrl: './template-reference.component.html',
  styleUrl: './template-reference.component.css'
})
export class TemplateReferenceComponent {
  sayHello(inputEl:HTMLInputElement){
    alert("Hello "+inputEl.value);
    
  }
}
