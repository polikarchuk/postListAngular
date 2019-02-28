import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map } from "rxjs/internal/operators";

@Injectable()
export class PostService {
    constructor(@Inject(HttpClient) private http: HttpClient) {}
    getPosts() {
        return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(
            map((posts: any[]) => {
                return posts.map(post => {
                    return {
                        title: post.title,
                        body: post.body,
                    };
                });
            })
        );
    }
}
