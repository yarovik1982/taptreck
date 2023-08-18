// const recurse = (n) => {
//    if(n === 1) return 1
//    return  n +'-'+ recurse( n - 1) 
// }
// console.log(recurse(10));

// const loop = (n) => {
//    let sum = 0
//    for(let i = 1; i < n; i++){
//       sum += i
//    }
//    return sum
// }
// console.log(loop(10));


// const compare = () => {
//    const java = 'java'
//    const javaScript = 'javaScript'.replace('Script', '')

//    return java === javaScript
// }
// console.log(compare());

// console.log(0.3 === 0.1 + 0.2);
// console.log(Math.round(0.18 + 0.31));

// const addElements = () => {
//    const empty = []
//    let el = 1
//    while(empty.length !== 10){
//       empty.push(el)
//       el += 1
//       // el++
//       console.log(empty);
//    }
// }
// addElements()

// const deleteElement = () => {
//    const arr = ["a",'b','c','d']
//    while(arr.length > 0){
//       arr.pop()
//       console.log(arr);
//    }
// }
// deleteElement()

// const reverseOrder = () => {
//    let num = 10
//    while(num > 0){
//       console.log(num);
//       num--
//    }
// }
// reverseOrder()


// const isDiscount = (age) => (age >= 6 && age <= 65) ? 'Discount' : 'NotDiscount'

// console.log(isDiscount(10));
// console.log(isDiscount(5));
// console.log(isDiscount(66));

// console.log(age >= 6 && age <= 65 ? 'Discount' : 'No Discount');


// function sendMessage(){
//    var messageInput = document.getElementById('message-input')
//    var message = messageInput.value.trim()
//    if(message !== ''){
//       if(chatSocket.readyState === WebSocket.OPEN){
//          chatSocket.send(JSON.stringify({
//             'messageText': message
//          }))
//          messageInput.value = ''
//          resetInactivityTimer()
//          appendMessage(message, true)
//          appendMessage(message, false)

//       }else{
//          console.log('WebSocket is not open');
//       }
//    }
// }

// const findAverage = (arr) => {
//    //объявляем переменную куда будем складывать результат сложения элементов массива
//    let sum = 0
//    for(let i = 0; i < arr.length; i++){
//       // вычисляем сумму всех элементов массива
//       sum +=arr[i]
//    }
//    // возвращаем среднее арифметическое сумма всех элементов деленная на количество элементов
//    return sum / arr.length
// }
// console.log(findAverage([1,2,3,4,5,6]));
// console.log(findAverage([11,8,55,7]));

// const findMaxString = (arr) => {
//    let str = ""
//    for(let i = 0; i < arr.length; i++){
//       if(typeof arr[i] === 'string' && arr[i].length > str.length){
//          str = arr[i]
//       }
//    }
//    return str
// }
// console.log(findMaxString(['aaaaaa',123456789123456,{name:'name', age: 55, setAge(){return this.age + 5}},'vvvvvvvvvvvv','ccccc',['самаяДлиннаяСтрока']]));

const tasks = [];

function addTask() {
  const taskName = prompt("Задача:");
  const taskDeadline = prompt("Срок выполнения ( 'завтра', 'следующая неделя', 'через три дня'):");

  tasks.push({
    name: taskName,
    deadline: taskDeadline
  });

  displayTasks();
}

function displayTasks() {
  console.log("Список задач:");
  for (let i = 0; i < tasks.length; i++) {
    console.log(`- ${tasks[i].name} (Deadline: ${tasks[i].deadline})`);
  }
}
