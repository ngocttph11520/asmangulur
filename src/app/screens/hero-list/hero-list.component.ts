import { Component, OnInit } from '@angular/core';
import { MONSTERES } from '../../mock-data/MONSTERS';
import { Skill } from 'src/app/models/skill';
import { HEROES } from '../../mock-data/HEROES';
import { Hero } from '../../models/hero';
import { Monster } from 'src/app/models/monster';
import { Spell } from 'src/app/models/spell';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Array<Hero> = HEROES;
  monsteres: Array<Monster> = MONSTERES;
  updateObject: Hero = {
    id: 0,
    name: "",
    image:"",
    skills: []
  };
  updateObject2: Monster = {
    id: 0,
    name: "",
    image:"",
    detail: "",
    spells: []
  };
  constructor() { }

  ngOnInit(): void {
  }

  updateHero(hero: Hero){
    this.updateObject = { ...hero};
  }
  updateMonster(monster: Monster){
    this.updateObject2 = { ...monster};
  }
  parentRemove(removeObject: Hero){
    this.heroes = this.heroes.filter(item => item.id != removeObject.id);
  }
  parentRemove2(removeObject2: Monster){
    this.monsteres = this.monsteres.filter(item => item.id != removeObject2.id);
  }
  saveFormSubmit(data: Hero){
    let existed = this.heroes.findIndex(el => el.id == data.id);
    if(existed == -1){
      this.heroes.push(data);
    }else{
      this.heroes[existed] = {...data};
    }
    this.updateObject = {
      id: 0,
      name: "",
      image: "",
      skills: []
    };
  }
  saveFormSubmit2(data: Monster){
    let existed = this.monsteres.findIndex(el => el.id == data.id);
    if(existed == -1){
      this.monsteres.push(data);
    }else{
      this.monsteres[existed] = {...data};
    }
    this.updateObject2 = {
      id: 0,
      name: "",
      image:"",
      detail: "",
      spells: []
    };
  }
}
