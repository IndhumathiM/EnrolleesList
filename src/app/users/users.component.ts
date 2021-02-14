import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Users } from './user.model';
import { MessageService } from 'primeng/api';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  users$: Observable<any[]>;
  _users: Array<Users>;

  constructor(private userService: UserService, private messageService: MessageService,public dialog: MatDialog) { 
    this.users$ = this.userService.usersAction.getUsers();

    this.users$.subscribe(res => {
      this._users = res;
    });
  }

   _updateUser(id:any,result:any) {
    this.userService.usersAction.updateUser(id,result)
      .subscribe(res => {
        if(res && res.id) {
          this.users$ = this.userService.usersAction.getUsers();

          this.users$.subscribe(res => {
            this._users = res;
          });
          this._users = res.data;
          this.messageService.add({severity: 'success', summary: 'Message', detail:'User Id '+ res.id +' details has been updated.' });
        }
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Message', detail: error.error });
      }
    ) 
  }



updateDialog(user: any): void {
  const dialogRef = this.dialog.open(UpdateDialogComponent, {
     height: 'auto',
    width: '475px',
   data: {dialogTitle: 'User Details', dialogText: user}
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result !== undefined){
    this._updateUser(user.id,result);
    }
  });
}

}
