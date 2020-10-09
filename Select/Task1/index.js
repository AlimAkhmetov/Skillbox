//   Задание 1

let objects = [ {name: 'Василий', surname: 'Васильев'}, { name: 'Иван', surname: 'Иванов' }, { name: 'Пётр', surname: 'Петров' }, {name: 'Том', surname: 'Сойер'} ];
let arrResult = [];

function searchKey(object, name, value) {
    for (let desiredValue of object) {
        if (desiredValue[name] === value) {
             let result = Object.assign(arrResult, desiredValue);
             return result;
        }
    }
    return console.log('Совпадений не найдено');
}

console.log(searchKey(objects, 'name', 'Иван'));

// function searchKey(object, name, value) {
//     for (let i = 0; i <= object.length; i++) {
//         if (object[i][name] === value) {
//              let result = Object.assign(arrResult, object[i]);
//              return result;
//         }
//     }
// }

