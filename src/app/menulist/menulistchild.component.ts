import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { stringify } from 'querystring';


@Component({
  selector: 'app-menulistchild',
  templateUrl: './menulistchild.component.html',
})

export class MenulistchildComponent  {

  @Input()  chlmsg: string;
  @Output() sendback = new EventEmitter<string>();
  action = false;
  msg:string;
  
  tellparent(agreed: boolean) {
    this.msg= (agreed)? ` your child ` : ' not your child';
    this.sendback.emit(this.msg);
    this.action = true;
    
  }


}
