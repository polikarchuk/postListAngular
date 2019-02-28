import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';


@Component({
    selector: 'app-list-post',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less'],
    providers: [UserService]
})
export class UserComponent implements OnInit {
    users = [];

    constructor(
        private userService: UserService
    ) {}

    ngOnInit() {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
        });


    }

}
