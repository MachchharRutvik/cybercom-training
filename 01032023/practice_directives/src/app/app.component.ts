import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice_directives';

   arrOfObj = [{
    name:"Rutvik",age:20
  },{
    name:"Yug",age:20
  },{
    name:"Tejas",age:20
  },{
    name:"Param",age:20
  }]
  toggleValue = false;
  isTrue= false;
  canSave=false;
  isChangeable=false;
  isSpecial=false;
  currentClasses:Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};
  
  setChanges(){
    this.currentClasses = {
      saveable:this.canSave,
      changeable:this.isChangeable,
      special:this.isSpecial
    }
  }
  setCurrentStyles(){
    this.currentStyles = {
        'font-style':this.canSave?'italic':'normal',
        'font-weight':this.isChangeable?'bold':'normal',
        'font-size':this.isSpecial?'24px':'12px'
    };
  }
}
