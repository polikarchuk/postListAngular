import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service'


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.less'],
  providers: [PostService]
})
export class ListPostComponent implements OnInit {
    posts = [];

    constructor(
        private postService: PostService
    ) {}

    ngOnInit() {
        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
        });


    }

}
