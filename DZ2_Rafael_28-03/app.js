const arr = ['Bishkek', 'Los Angeles', 'Chicago', 'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
const arrRay = []
const arRay  = []
for (let city of arr) {
    if (city.length > 6) {
        arrRay.push(city)
    }
    if (city.includes('s') || city.includes('S')){
        arRay.push(city)
    }
}
console.log(`Города с названиями длиннее 6 символов: ${arrRay}`)
console.log(`Города с буквой 's' или 'S' в названии: ${arRay}`)

var color = String(prompt('Пишите цвет  '))
switch (color){
    case 'красный':
        alert('стоп')
        break
    case 'желтый':
        alert('жди')
        break
    case 'жёлтый':
        alert('жди')
        break
    case 'зеленый':
        alert('можешь идти')
        break
    case 'зелёный':
        alert('можешь идти')
        break
    default:
        alert('error')
}