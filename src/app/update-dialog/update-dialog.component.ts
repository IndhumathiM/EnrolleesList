import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {
  newName: string;
  newStatus: boolean;
  isDisabled = true;
  constructor(public dialogRef: MatDialogRef<UpdateDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.newName =this.data.dialogText.name;
    this.newStatus = this.data.dialogText.active;
    
    console.log(this.data);
  }
  
  btnCheck(){
    this.isDisabled = false;
  }

  saveMessage() {
    this.dialogRef.close({name:this.newName,active:this.newStatus});
  }

  closeDialog() {
    this.dialogRef.close();
   
  }

}
