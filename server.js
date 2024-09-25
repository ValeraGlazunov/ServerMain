//підключає бібліотеку експрес
const express = require('express')
//створення експерес застосунку
const path = require('path')

const app = express()
//вказівник на застосунок або сервіс запущений на комп'ютері
const PORT = 8000
//адреса на наш комп'ютер
const HOST = 'localhost'
//оброблення get запиту, першим аргументом посилання, другим функція на цей запит
//ця функція відправляє відповідь
app.get('/', () => {
    console.log("ktoto zashel na stranicu")
})
//запускає додаток по порту та хосту та виконує задану функцію
app.listen(PORT, HOST, () =>{
    console.log("server is running")
})

app.use('/static/', express.static(path.join(__dirname, 'static')))

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toISOString(); // Возвращаем дату в формате ISO
  }
  
  // Обработка GET-запроса на маршрут /date
  app.get('/date', (req, res) => {
    const currentDate = getCurrentDate(); // Получаем текущую дату
    console.log('Текущее время:', currentDate); // Выводим дату в консоль
    res.send(`<h1>Текущее время: ${currentDate}</h1>`); // Отправляем HTML с датой
  });