import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../lib/hero';

import {HeroService} from '../lib/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    providers: []
})
export class HeroesComponent implements OnInit {
    // heroes: Hero = {
    //     id: 1,
    //     name: 'Superman'
    // };
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private router: Router,
                private heroService: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
