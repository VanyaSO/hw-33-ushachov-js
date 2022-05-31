'use strict';
//
// Написать функцию generateList(array),
// которая принимает массив из чисел и массивов чисел (например [1,2,3])
// и генерирует список из элементов:

const array = [1,2,3,6,34535,635634];

const generateList = (array) => {

    let ul = document.createElement('ul');
    document.body.append(ul);

    for(let i = 0; array.length > i; i += 1){

        let li = document.createElement('li');
        li.innerHTML = array[i];
        ul.append(li);

    }

}

generateList(array);


///
let p = document.createElement('p');
document.body.append(p);
p.innerHTML = '////////////////////////// Task2 //////////////////////////';
///


//Array
const arrayTwo = [1,2,3,6,34535,635634, [1,3,4,1,[1,4,2],23]];

//Main UL
let ul = document.createElement('ul');

//Function
const generateUl = (arrayTwo) => {
    const generateListTwo = (arrayTwo, elem) => {

        //Цыкл
        for(let i = 0; arrayTwo.length > i; i += 1){
            //Create li
            let li = document.createElement('li');

            //Проверка на масив в нутри масива
            if(Array.isArray(arrayTwo[i])){
                let ulInLi = document.createElement('ul');
                li.append(generateListTwo(arrayTwo[i], ulInLi));

            }else{
                //наполнение текстом li
                li.innerHTML = arrayTwo[i];
            }
            //наполнение ul елементами li
            elem.append(li);
        }

        return elem;

    }

    return generateListTwo(arrayTwo, ul);
}

let generatedUl = generateUl(arrayTwo);
document.body.append(generatedUl);
