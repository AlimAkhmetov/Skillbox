// Задание 3

let arrObjects = [{value: 'Plastiс', label: 'Пластик'}, {value: 'Wood', label: 'Дерево'}, {value: 'Rock', label: 'Камень'}];
let arrSimple = ['Plastiс', 'Пластик', 'Wood', 'Дерево', 1, 1];
let objectSimple = {
    name: 'Иван',
    surname: 'Петров',
    age: 18,
}
// console.log(Object.entries(objectSimple)[0]);

// Функция, работающая с массивом объектов:

// function createSelectList(object, selected) {
//     let select = document.createElement('select');
//     select.id = "select";

//     for (let indexObject of object) {
//         let option = document.createElement('option');
//         option.label = indexObject.label;
//         option.value = indexObject.value;
    
//         if (option.value === selected) {
//             option.selected = true;
//         } 
//         else if (option.value === undefined) {
//             select[0].selected = true;
//         }
//         select.appendChild(option);
//     }
//     return document.body.appendChild(select);;
// }

// console.log(createSelectList(arrObjects, 'Wood'));
// console.log(arrObjects);

// Функция, работающая с простым массивом:

// function createSelectList(object, selected) {
//     let select = document.createElement('select');
//     select.id = "select";

//     for (let i = 0; i < object.length; i++) {
//         let option = document.createElement('option');
//         option.value = object[i++];
//         option.label = object[i];
        
    
//         if (option.value === selected) {
//             option.selected = true;
//         } 
//         else if (option.value === undefined) {
//             select[0].selected = true;
//         }
//         select.appendChild(option);
//     }
//     return document.body.appendChild(select);;
// }

// console.log(createSelectList(arrSimple, '1'));
// console.log(arrSimple);

// Функция, работающая с простым объектом:

function createSelectList(object, selected) {
    let select = document.createElement('select');
    select.id = "select";
    object = Object.entries(object);

    for (let i = 0; i < object.length; i++) {
        let option = document.createElement('option');
        option.value = object[i][0];
        option.label = object[i][1];
    
        if (option.value === selected) {
            option.selected = true;
        } 
        else if (option.value === undefined) {
            select[0].selected = true;
        }
        select.appendChild(option);
    }
    return document.body.appendChild(select);;
}

console.log(createSelectList(objectSimple, 'age'));
console.log(objectSimple);
