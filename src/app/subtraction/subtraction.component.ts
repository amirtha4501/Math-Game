import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {

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

      let correctAnswer = num1 - num2;

      if (answer == correctAnswer) {
        this.score++;
      }
    }
  }

}
