import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})

export class notFoundComponent {
    @ViewChild(MenuComponent)
    menu!: MenuComponent;

    constructor() { }

    public navigateHome() {
        this.menu.navigate('About');
    }
}