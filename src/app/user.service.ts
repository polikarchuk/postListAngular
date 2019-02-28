import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map } from "rxjs/internal/operators";

@Injectable()
export class UserService {
    constructor(@Inject(HttpClient) private http: HttpClient) {}
    getUsers() {
        return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
            map((users: any[]) => {
                return users.map(user => {
                    return {
                        name: user.name,
                        username: user.username,
                        email: user.email,





                    };
                });
            })
        );
    }
}
