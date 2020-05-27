var items = '[{"Id":1, "Title":"Start Platinum"},{"Id":2, "Title":"Magician Red"},{"Id":3, "Title":"Hermit Purple"},{"Id":4, "Title":"Silver Charlot"},{"Id":5, "Title":"The Fool"},{"Id":6, "Title":"The World"},{"Id":7, "Title":"Tower of Gray"},{"Id":8, "Title":"Dark Blue Moon"},{"Id":9, "Title":"Strength"},{"Id":10, "Title":"Death Thirteen"},{"Id":11, "Title":"Justice"},{"Id":12, "Title":"Sun"},{"Id":13, "Title":"Lovers"},{"Id":14, "Title":"Ebony Devil"},{"Id":15, "Title":"Cream"},{"Id":16, "Title":"Atun"},{"Id":17, "Title":"Anubis"},{"Id":18, "Title":"Crazy Diamond"},{"Id":19, "Title":"Red Hot Chilli Pepper"},{"Id":20, "Title":"Heaven Door"},{"Id":21, "Title":"Stone Free"},{"Id":22, "Title":"Gold Experience"},{"Id":23, "Title":"Sticky Fingers"},{"Id":24, "Title":"Sex Pistols"},{"Id":25, "Title":"Aerosmith"},{"Id":26, "Title":"Purple Haze"},{"Id":27, "Title":"Moody Blues"},{"Id":28, "Title":"Whitesnake"},{"Id":29, "Title":"Killer Queen"},{"Id":30, "Title":"Weather Report"},{"Id":31, "Title":"Foo Fighters"},{"Id":32, "Title":"Kiss"}]';
var pager = {};
pager.items = JSON.parse(items);
pager.itemsPerPage = 5;
pagerInit(pager);
    
function completeform() {
    $('.toast').toast('show');
}

function bindList() {
    var pgItems = pager.pagedItems[pager.currentPage];
    $("#myList").empty();
    for(var i = 0; i < pgItems.length; i++){
        var option = $('<li class="list-group-item">');
        for( var key in pgItems[i] ){
            option.html(pgItems[i][key]);
        }
        $("#myList").append(option);
    }
}

function prevPage(){
    pager.prevPage();
    bindList();
}

function nextPage(){
    pager.nextPage();
    bindList();
}

function pagerInit(p) {
    p.pagedItems = [];
    p.currentPage = 0;
    if (p.itemsPerPage === undefined) {
        p.itemsPerPage = 5;
    }
    p.prevPage = function () {
        if (p.currentPage > 0) {
            p.currentPage--;
        }
    };
    p.nextPage = function () {
        if (p.currentPage < p.pagedItems.length - 1) {
            p.currentPage++;
        }
    };
    init = function () {
        for (var i = 0; i < p.items.length; i++) {
            if (i % p.itemsPerPage === 0) {
                p.pagedItems[Math.floor(i / p.itemsPerPage)] = [p.items[i]];
            } else {
                p.pagedItems[Math.floor(i / p.itemsPerPage)].push(p.items[i]);
            }
        }
    };
    init();
}		

$(function() {
    bindList();
});
