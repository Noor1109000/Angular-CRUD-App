import { Component, OnInit } from '@angular/core';

export class MyItems{
  constructor(
    public Name: string,
    public Email: string,
    public Phone: number,
    public Message: string
    ){}
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    //Array where we ae going to do CRUD operations
 myItems:MyItems[] = new Array();



 // Other variables    
 IsForUpdate: boolean = false;    
 newItem: any = {};    
 updatedItem; 
   

 
 // Add item to the array
 AddItem(){
    this.myItems.push(
      this.newItem
    );
    this.newItem = {}
  }
  
 
  // Delete item to the array 
  DeleteItem(i) {  
   this.myItems.splice(i, 1);  
 } 
 
 
 
 // When user selects edit option  
 EditItem(i) {  
   this.newItem.Name = this.myItems[i].Name;  
   this.newItem.Email = this.myItems[i].Email;  
   this.newItem.Phone = this.myItems[i].Phone;  
   this.newItem.Message = this.myItems[i].Message;  
   this.updatedItem = i;  
   this.IsForUpdate = true;  
 }  
   
 // When user clicks on update button to submit updated value  
 UpdateItem() {  
   let data = this.updatedItem;  
   for (let i = 0; i < this.myItems.length; i++) {  
     if (i == data) {  
       this.myItems[i].Name = this.newItem.Name;  
       this.myItems[i].Email = this.newItem.Email;  
       this.myItems[i].Phone = this.newItem.Phone;  
       this.myItems[i].Message = this.newItem.Message;  
     }  
   }  
   this.IsForUpdate = false;  
   this.newItem = {};  
 } 
 
  

}
