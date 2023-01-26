// import "./paginate.sass";
// import $ from 'jquery';

// $(function(){
//     var ul = document.querySelector('.paginate__list');
// var allPages = 15;
// var elem = (allPages, page) => {

//     var li = '';

//     var beforePages = page - 1;
//     var afterPages = page + 1;
//     var liActive;

//     if(page > 1){
//         li += `<li class="paginate__btn" onclick="elem(${allPages}, ${page-1})"></li>`;
//     }

//     for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){

//         if(pageLength > allPages){
//             continue;
//         }
//         if(pageLength == 0){
//             pageLength = pageLength + 1;
//         }

//         if(page == pageLength){
//             liActive = 'paginate__active';
//         }else{
//             liActive = '';
//         }

//         li += `<li class="numb ${liActive}" onclick="elem(${allPages}, ${pageLength})" ><span>${pageLength}</span></li>`
//     }

//     if(page < allPages){
//         li += `<li class="paginate__btn" onclick="elem(${allPages}, ${page+1})"></li>`;
//     }
    
//     ul.outerHTML = li;
    
// };
// elem(allPages, 2);
// });


import "./paginate.sass";

const ul = document.querySelector('.paginate__list');
let allPages = 15;

console.log(window.location.pathname);

function elem(allPages, page){
    console.log('paginate-inner');

    ul.innerHTML = '';

    let li = document.createElement('li');

    let beforePages = page - 1;
    let afterPages = page + 1;
    let liActive;

    if(page > 1){
        let li = document.createElement('li');
        li.className = 'paginate__btn-left';
        li.onclick = function() { elem(allPages, page-1); };
        ul.appendChild(li);
    }

    for (let pageLength = beforePages; pageLength <= (afterPages+1); pageLength++){

        if(pageLength > allPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
            afterPages++;
        }

        if(page == pageLength){
            liActive = 'paginate__active';
        }else{
            liActive = '';
        }

        let li = document.createElement('li');
        li.className = `paginate__numb ${liActive}`;
        li.innerHTML = `<span>${pageLength}</span>`;
        li.onclick = function() { elem(allPages, pageLength); };
        ul.appendChild(li);

    }

    if(page < allPages){
        let li = document.createElement('li');
        li.className = 'paginate__btn-right';
        li.onclick = function() { elem( allPages, page+1); };
        ul.appendChild(li);
    }

    console.log('paginate-last'); 
}
if(window.location.pathname === '/eventsList.html' || window.location.pathname === '/eventsGreed.html')
    elem(allPages, 1);