import { Component } from '@angular/core';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html'
})
export class MenulistComponent {

  parentsmsg =`The God tell childs that your parents was born now. please find them!`;
  chldsend =``;

  fruits:String[] = ['apple', 'banana', 'grapes', 'mango', 'orange']
  values:string = '';

  private filterItems = (arr, query):Array<String> => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }

  // event keyup type of user
  onKey(event:any) {

    let v_itm: Array<String>;
    let v_data:string ='';
    
    console.log('value :' + event.target.value);
    
    if (event.target.value != ''){
      // search value return array
      v_itm = this.filterItems(this.fruits,  event.target.value);
      
      // loop get array value
      v_itm.forEach(function (val) {
        v_data += (v_data === '') ? val : ' , ' + val;
      })

    };
    this.values = v_data
  }

  // action get from child
  showChildmsg(value: string) {
    this.chldsend = `Hey day and mummy, i'm ` + value;
  }

}
