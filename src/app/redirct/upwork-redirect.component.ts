import { Component, OnInit } from '@angular/core';

@Component({ template: '' })

export class upworkRedirectComponent implements OnInit {
    public static upworkURL = "https://www.upwork.com/o/profiles/users/~01c0aebfabfd3bc9ff/";
    ngOnInit() {
        window.location.href = upworkRedirectComponent.upworkURL;
    }
}