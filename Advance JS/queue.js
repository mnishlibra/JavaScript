class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get_length() {
      return this.tail - this.head;
    }
    get_isEmpty() {
      return this.length === 0;
    }
  }


let Queue1 = new Queue()
Queue1.enqueue(10)
Queue1.enqueue(70)
Queue1.enqueue(950)
Queue1.enqueue(1120)
Queue1.enqueue(1120)
Queue1.dequeue()
console.log(Queue1.peek())
console.log(Queue1.get_length())
console.log(Queue1.get_isEmpty())