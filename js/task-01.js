// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// 1.

const allCategories = document.querySelectorAll('.item');
console.log(allCategories);
console.log('Numbers of categories:', allCategories.length);

// 2.

allCategories.forEach(category => {
    // const categoryTitle = category.querySelector('h2').textContent;
    console.log('Category:', category.querySelector('h2').textContent);
    console.log('Elements:', category.querySelectorAll('li').length);

});

