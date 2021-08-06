import { Component, OnInit, Input, 
  EventEmitter, Output } from '@angular/core';
import { Monster } from 'src/app/models/monster';
@Component({
  selector: 'monster-unit',
  templateUrl: './monster-unit.component.html',
  styleUrls: ['./monster-unit.component.css']
})
export class MonsterUnitComponent implements OnInit {
  @Input() 'monsterData': Monster;
  @Output() delete = new EventEmitter<Monster>();
  @Output() updateEvent = new EventEmitter<Monster>();
  date = new Date();
  constructor() { }
  ngOnInit(): void {
  }
  updateMonster2(){
    this.updateEvent.emit(this.monsterData);
  }
  removeMonster2(){
    let conf = confirm(`bạn có chắc chắn xóa monster:
                          ${this.monsterData.name} hay không ?`);
    if(conf){
      this.delete.emit(this.monsterData);
    }
  }
}