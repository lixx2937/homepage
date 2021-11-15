import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'menu-component',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
    public sideMenuClosed = false;
    public iconMenuClosed = true;
    public darkTheme = false;
    public darkThemeKey = 'AndyWebsiteDarkTheme';
    public iconContainer: any;

    public navLinks = [
        {
            href: "",
            text: "About",
            icon: "account-box-outline",
            keepTheme: true
        },
        {
            href: "/contact",
            text: "Contact",
            icon: "email-send-outline",
            keepTheme: true
        },
        // {
        //     href: "/upwork",
        //     text: "Upwork",
        //     icon: "earth",
        //     tab: true
        // },
        {
            special: 'toggleDark',
            function: "toggleDark()",
            text: "Dark",
            icon: "sunglasses",
            text2: "Light",
            icon2: "glasses"
        },
        {
            href: "/assets/resumes/resume_11_21.pdf",
            text: "Resume",
            icon: "newspaper",
            tab: true
        },
    ];

    public iconMargin = 40;
    public halfIconPoint = this.iconMargin * (this.navLinks.length-1) / 2;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        const prevStored = window.localStorage.getItem(this.darkThemeKey) === 'dark';
        this.route.queryParams.subscribe(params => {
            if (params['theme'] === "dark" || prevStored) {
                this.toggleDark(true);
            }
            this.router.navigate(
                [],
                {
                    relativeTo: this.route
                }
            );
        });
    }

    ngOnInit() {
        this.iconContainer = document.querySelectorAll("div.icon-menu")[0];
        this.iconContainer.addEventListener("click", function(e: any) { e.stopPropagation(); }, false);
        document.body.addEventListener('click', this.checkIfMenuOpen.bind(this));
        document.addEventListener('scroll', this.checkIfMenuOpen.bind(this));
    }

    public menuOpenerClick() {
        this.sideMenuClosed = !this.sideMenuClosed;
    }

    public iconMenuOpenerClick() {
        this.iconMenuClosed = !this.iconMenuClosed;
        
        setTimeout(() => {
            if (!this.iconMenuClosed) {
                setTimeout(function(container: any) {
                    container.classList.add('show-tooltips')
                }, 800, this.iconContainer)
            } else {
                this.iconContainer.classList.remove('show-tooltips');
            }
        }, 0);
    }

    public checkIfMenuOpen(event: any) {
        if (!this.iconMenuClosed) {
            this.iconMenuOpenerClick();
        }
    }

    public calcTranslate(index: number): string {
        const transY = index * this.iconMargin - this.halfIconPoint;
        let translateText = 'scale(1.5) translate(-30px, ' + transY + 'px)';

        return translateText;
    }

    public toggleDark( stayDark?: boolean) {
        if (this.darkTheme && !stayDark) {
            document.documentElement.removeAttribute('theme');
            window.localStorage.setItem(this.darkThemeKey, 'light');
        } else {
            document.documentElement.setAttribute('theme', 'dark');
            window.localStorage.setItem(this.darkThemeKey, 'dark');
        }
        this.darkTheme = !this.darkTheme || !!stayDark;
    }

    public navigate(text?: string) {
        for (const navLink of this.navLinks) {
            if (navLink.text === text) {
                const params = this.darkTheme && navLink.keepTheme ? { 'theme': 'dark' } : {};
                this.router.navigate([navLink.href || ''], { queryParams: params });
            }
        }
    }
}