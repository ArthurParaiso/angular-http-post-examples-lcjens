import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'post-request-error-handling', templateUrl: 'post-request-error-handling.component.html' })
export class PostRequestErrorHandlingComponent implements OnInit {
    postId;
    errorMessage;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.post<any>('https://jsonplaceholder.typicode.com/invalid-url', { title: 'Angular POST Request Example' }).subscribe({
            next: data => {
                this.postId = data.id;
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('There was an error!', error);
            }
        })
    }
}