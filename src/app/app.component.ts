import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive';

  products =[
    {name:"Iphone", model:1},
    {name:"Android", model:2}
  ];

  pro =[
    {name:"Iphone", model:1, status:"Available"},
    {name:"Android", model:2, status:"Not Available"},
    {name:"Linux", model:1, status:"Available"},
    {name:"Mac", model:2, status:"Not Available"}
  ];

  svalue: string='';
  searchvalue(eventData:any){
    this.svalue=(<HTMLInputElement>eventData.target).value;
  }
  
}
