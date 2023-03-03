import { Component, OnInit,OnChanges,DoCheck, SimpleChanges, Input,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy {
  @Input('img') postImg = ''
  @Output() imgSelected = new EventEmitter<string>();
  // imgURL = "https://picsum.photos/id/237/500/500"
  
  constructor() { console.log("constructor called",this.postImg)}

  ngOnInit(): void {
    console.log("ngOnInit called",this.postImg)
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("on changes")
  }
  ngDoCheck(): void {
    console.log("Docheck")
      
  }
  ngAfterContentChecked(): void {
      console.log("after content checked");
  }
  ngAfterContentInit(): void {
    console.log("after content initialized");
      
  }
  ngAfterViewChecked(): void {
    console.log("after view checked");
      
  }
  ngAfterViewInit(): void {
    console.log("after view initialized");
      
  }
  ngOnDestroy(): void {
    console.log("on destroy");
      
  }
}
