import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task01';

  taskName = "";
  taskDate = '';;
  completeList: any = [];
  // strPattern = /^[a-z A-Z]+$/;
  // noPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  constructor() {

  }

  ngOnInit() {

  }
  addToList() {

    // let eName = this.strPattern.test(this.employeeName);
    // let eNo = this.noPattern.test(this.date);

    if (this.taskName == '' || this.taskDate == '') {

      alert("please enter task and date");

    } else {
      let details = { task: this.taskName, enterdate: this.taskDate };
      this.completeList.push(details);
      // if(this.completeList.find((taskName)))
      this.cleartextbox();
    }
  }
  sortByDate() {
    this.completeList.sort((a: any, b: any) =>
      a.enterdate < b.enterdate ? -1 : a.enterdate > b.enterdate ? 1 : 0);
  }
  sortByName() {
    this.completeList.sort((a: any, b: any) =>
      a.task < b.task ? -1 : a.task > b.task ? 1 : 0);
  }

  changeSortType(event: Event) {
    console.log(event);
    if ((event.target as HTMLInputElement).value == "name") {
      this.sortByName();
    } else {
      
    }
    if ((event.target as HTMLInputElement).value == "date") {
      this.sortByDate();
    } else {
      
    }
  }
  Clear() {
    this.cleartextbox();
  }
  cleartextbox() {
    this.taskName = "";
    this.taskDate = "";
  }
  edit(index: number) {
    this.taskName = this.completeList[index].task;
    this.taskDate = this.completeList[index].enterdate;
    this.delete(index);
  }
  delete(i: number) {

    this.completeList.splice(i, 1);
  }
}

