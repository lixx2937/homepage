import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
    public sideMenuClosed = false;
    public iconMenuClosed = true;
    public darkTheme = false;

    public navLinks = [
        {
            href: "src1",
            text: "nav link 1",
            icon: "cast"
        },
        {
            href: "/home",
            text: "About Me",
            icon: "account-box-outline"
        },
        {
            href: "src3",
            text: "nav link 3",
            icon: "cast"
        },
        {
            special: 'toggleDark',
            function: "toggleDark()",
            text: "Go Dark",
            icon: "sunglasses",
            text2: "The Light",
            icon2: "glasses"
        },
        {
            href: "/contact",
            text: "Contact Me",
            icon: "email-send-outline"
        }
    ];

    public iconMargin = 36;
    public halfIconPoint = this.iconMargin * (this.navLinks.length-1) / 2;

    @HostListener('document:mousedown', ['$event'])
    onGlobalClick(event: any): void {
        if (event == null || event.srcElement.class === 'icon-menu-opener') {
            this.iconMenuClosed = true;
        }
    }

    constructor() {}

    ngOnInit() {}

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

    public toggleDark() {
        console.log('toggle dark');
        console.log(this.darkTheme);
        if (this.darkTheme) {
            document.documentElement.removeAttribute('theme');
        } else {
            document.documentElement.setAttribute('theme', 'dark');
        }
        this.darkTheme = !this.darkTheme;
    }
}