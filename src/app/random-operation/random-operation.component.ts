import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-operation',
  templateUrl: './random-operation.component.html',
  styleUrls: ['./random-operation.component.css']
})
export class RandomOperationComponent implements OnInit {
  public qtns = [];
  operators = ['+','-','x','/'];
  public score = 0;

  ngOnInit() {
    for(let i = 0; i < 10; i++) {
      let qtn = {
        num1: Math.floor((Math.random() * 10) + 1),
        num2: Math.floor((Math.random() * 10) + 1),
        op: this.operators[Math.floor(Math.random() * 4)],
        answer: null
      }
      this.qtns.push(qtn)
    }
  }
    
  submitIt() {      

    for (let i = 0; i < 10; i++){
      let num1 = this.qtns[i].num1;
      let num2 = this.qtns[i].num2;
      let op = this.qtns[i].op;
      let answer = this.qtns[i].answer;
      let OPMAP = {
        'x': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2,
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2
      }
      let correctAnswer = OPMAP[op](num1,num2);
      if (answer == correctAnswer){
        this.score++;
      }
    }
  }

}
