import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'post-request-typed', templateUrl: 'post-request-typed.component.html' })
export class PostRequestTypedComponent implements OnInit {
    postId;

    constructor(private http: HttpClient) { }

    ngOnInit() {          
        this.http.post<Article>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
            this.postId = data.id;
        })
    }
}

interface Article {
    id: number;
    title: string;
}