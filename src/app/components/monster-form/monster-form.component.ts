import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';
import { Monster } from 'src/app/models/monster';
import { Spell } from 'src/app/models/spell';

@Component({
  selector: 'monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.css']
})
export class MonsterFormComponent implements OnInit {
  @Input() 'formObject2': Monster;

  @Output() submitForm2 = new EventEmitter<Monster>();
  lstSpells: Array<Spell> = [
    {
      id: 5,
      name: "Bay lượn"
    },
    {
      id: 6,
      name: "Cường hóa sức mạnh"
    },
    {
      id: 7,
      name: "Tia plasma"
    },
    {
      id: 8,
      name: "Nhanh nhẹn"
    }
  ];
  constructor() { }

  ngOnInit(): void {
    // console.log(123)
    console.log(this.formObject2)
  }
  
  submitMonsterForm2(event : any) {
    event.preventDefault();
    this.submitForm2.emit(this.formObject2);
  }

  addSkill2FormObject2(item: Spell, event : any) {

    if (event.target.checked == true) {
      let index = this.formObject2.spells.findIndex(e => e.id == item.id);
      if (index == -1) {
        this.formObject2.spells.push(item);
      }
    } else {
      this.formObject2.spells = this.formObject2.spells.filter(e => e.id != item.id);
    }
  }

  setCheckedCheckbox2(item: Spell) {
    if (this.formObject2.spells == undefined) {
      this.formObject2.spells = [];
    }
    let index = this.formObject2.spells.findIndex(el => el.id == item.id);
    return index != -1;
  }

  resetForm(): Monster {
    return {
      id: 0,
      name: "",
      image: "",
      detail: "",
      spells: []
    };
  }
  updateFormObjectAttribute2(attributeName: string, event: any){
    switch (attributeName){
      case 'id':
        this.formObject2.id = Number(event.target.value)
        break;
      case 'name':
        this.formObject2.name = event.target.value
        break;
      case 'detail':
        this.formObject2.detail = event.target.value
        break;
      case 'image':
        this.formObject2.image = event.target.value
        break;
    }
    console.log(this.formObject2);
  }
}