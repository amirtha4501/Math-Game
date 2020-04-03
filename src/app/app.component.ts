import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    
  // public qtns = [];
  // operators = ['+','-','*','/'];

  ngOnInit() {
    // for(let i = 0; i < 10; i++) {
    //   let qtn = {
    //     num1: Math.floor((Math.random() * 10) + 1),
    //     num2: Math.floor((Math.random() * 10) + 1),
    //     op: this.operators[Math.floor(Math.random() * 4)],
    //     answer: null
    //   }
    //   this.qtns.push(qtn)
    // }
  }
    
  // submitIt() {      
  //   let score = 0;

  //   for (let i = 0; i < 10; i++){
  //     let num1 = this.qtns[i].num1;
  //     let num2 = this.qtns[i].num2;
  //     let op = this.qtns[i].op;
  //     let answer = this.qtns[i].answer;
  //     let OPMAP = {
  //       '*': (num1, num2) => num1 * num2,
  //       '/': (num1, num2) => num1 / num2,
  //       '+': (num1, num2) => num1 + num2,
  //       '-': (num1, num2) => num1 - num2
  //     }
  //     let userAnswer = OPMAP[op](num1,num2);
  //   // change useranswer name
  //     if (userAnswer == answer){
  //       score++;
  //     }
  //   }
  //   alert("Your score is " + score);
  // }
}