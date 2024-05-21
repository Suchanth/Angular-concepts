import { Component,Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { NgIf } from '@angular/common';
import { ContentChildComponent } from './content-child/content-child.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    DemoComponent,
    NgIf,
    ContentChildComponent,
    PropertyBindingComponent,
    TemplateReferenceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practices';


  // inputText:string='';
  // destroy:boolean=true
  // onSubmit(inputEl:HTMLInputElement){
  //   this.inputText=inputEl.value
  // }
  // DestroyComponent(){
  //   this.destroy=false
  // }
}
