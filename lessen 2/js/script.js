let fruits = ['яблоко','груша','гранат','виноград'];
fruits.forEach(function (item,index)  {
    document.getElementById('fruits').innerHTML = `${item} `;
});