class stack {
    constructor(){
      this.stack = [];
      this.top = -1;
    }
    push(ele){
      this.top = this.top + 1 ;
      this.stack[this.top] = ele ;
    }
    pop(){
      this.stack.pop();
      this.top = this.top - 1;
      }
    peek(){
      return this.stack[this.top];
    }
    isEmpty(){
      return this.stack.length === 0;
    }
    printStack(){
      return console.log(this.stack);
    }
  }
  
  s = new stack(10);
  // console.log(s.isEmpty());
  s.push(3);
  s.push(6);
  s.push(-7);
  s.push(3);
  s.pop();

  console.log(s.stack)
  // console.log(s.isEmpty());
  