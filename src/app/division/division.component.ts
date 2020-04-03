import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  qtns = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      let qtn = {
        num1: Math.floor((Math.random() * 10) + 1),
        num2: Math.floor((Math.random() * 10) + 1),
        answer: null
      }
      this.qtns.push(qtn);
    }
  }

  submitIt() {

    let score = 0;
    for (let i = 0; i < 10; i++) {
      let num1 = this.qtns[i].num1;
      let num2 = this.qtns[i].num2;
      let answer = this.qtns[i].answer;

      let correctAnswer = num1 % num2;

      if ( answer == correctAnswer ) {
        score++;
      }
    }
    alert('Your score is ' + score);
  }

}
