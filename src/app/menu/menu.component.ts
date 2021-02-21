import { Component } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
    public sideMenuClosed = false;
    public iconMenuClosed = true;

    public navLinks = [
        {
            href: "src1",
            text: "nav link 1",
            icon: "1"
        },
        {
            href: "/about",
            text: "nav link 2",
            icon: "2"
        },
        {
            href: "src3",
            text: "nav link 3",
            icon: "3"
        },
        {
            href: "src4",
            text: "nav link 4",
            icon: "4"
        },
        {
            href: "src5",
            text: "nav link 5",
            icon: "5"
        }
    ];

    public iconMargin = 36;
    public halfIconPoint = this.iconMargin * (this.navLinks.length-1) / 2;

    public menuOpenerClick() {
        this.sideMenuClosed = !this.sideMenuClosed;
    }

    public iconMenuOpenerClick() {
        this.iconMenuClosed = !this.iconMenuClosed;
    }

    public calcTranslate(index: number): string {
        const transY = index * this.iconMargin - this.halfIconPoint;
        let translateText = 'scale(1.5) translate(-30px, ' + transY + 'px)';

        return translateText;
    }
}