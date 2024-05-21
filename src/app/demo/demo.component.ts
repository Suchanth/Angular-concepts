import { AfterContentChecked, AfterContentInit, AfterViewInit, Component,DoCheck,Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,OnDestroy{
  @Input() value:string="angular";
  constructor(){
    console.log("Constructor is called!!")
    //console.log(this.value)
  }
  ngOnChanges(change:SimpleChanges){
    console.log("ngOnChanges is called!!!")
    console.log(change)
  }


  ngOnInit(){
    console.log("ngOnInit is called!!!")
    //console.log(this.value)
  }
  ngDoCheck(){
    console.log("ngDoCheck is called!!!")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit is called!!!")
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked is called!!!')
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit is called!!!")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy is called!!!")
  }
}
