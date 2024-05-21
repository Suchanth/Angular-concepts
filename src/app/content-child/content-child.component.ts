import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  standalone: true,
  imports: [],
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent implements OnInit,AfterContentInit {
  constructor(){}

  ngOnInit(){
    console.log(this.paragraphEl)
  }
  ngAfterContentInit(){
    this.paragraphEl.nativeElement.textContent="This a new Paragraph value"
    console.log(this.paragraphEl.nativeElement.textContent)
  }
  @ContentChild('paragraph') paragraphEl!:ElementRef

}
