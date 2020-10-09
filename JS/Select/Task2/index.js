//   Задание 2

let objects = [{value: 'Plastiс', label: 'Пластик'}, {value: 'Wood', label: 'Дерево'}, {value: 'Rock', label: 'Камень'}];

function createSelectList(object, selected) {
    let select = document.createElement('select');
    select.id = "select";

    for (let indexObject of object) {
        let option = document.createElement('option');
        option.value = indexObject.value;
        option.label = indexObject.label;
        
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

console.log(createSelectList(objects, 'Rock'));

// Второй способ:

// function createSelectList(object, selected) {
//     let select = document.createElement('select');
//     select.id = "select";

//     for (let i = 0; i < object.length; i++) {
//         let option = document.createElement('option');
//         option.label = object[i].label;
//         option.value = object[i].value;
    
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

// Код без функции:

//     let select = document.createElement('select');
//     select.id = "select";

//     for (let i = 0; i < objects.length; i++) {
//         let option = document.createElement('option');
//         option.label = objects[i].label;
//         option.value = objects[i].value;
    
//         if (option.value === 'Дерево') {
//             option.selected = true;
//         } 
//         else if (option.value === undefined) {
//             select[0].selected = true;
//         }
//          select.appendChild(option);
//     }

// console.log(select)

