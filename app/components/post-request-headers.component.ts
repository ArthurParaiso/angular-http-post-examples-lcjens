import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'post-request-headers', templateUrl: 'post-request-headers.component.html' })
export class PostRequestHeadersComponent implements OnInit {
    postId;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        const body = { title: 'Angular POST Request Example' };
        this.http.post<any>('https://jsonplaceholder.typicode.com/posts', body, { headers }).subscribe(data => {
            this.postId = data.id;
        });
    }
}