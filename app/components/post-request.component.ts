import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'post-request', templateUrl: 'post-request.component.html' })
export class PostRequestComponent implements OnInit {
    postId;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
            this.postId = data.id;
        })
    }
}