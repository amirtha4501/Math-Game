import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  public qtns = [];
  public score = 0;

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

    for (let i = 0; i < 10; i++) {
      let num1 = this.qtns[i].num1;
      let num2 = this.qtns[i].num2;
      let answer = this.qtns[i].answer;

      let correctAnswer = num1 * num2;

      if (answer == correctAnswer) {
        this.score++;
      }
    }
  }

}
