function MenuItem(title,url){
    this.title = title;
    this.url = url;
    this.show = function(){

        for(let i=0; i<liCount; i++){
            document.write("<li>" + title + "</li>");
        }
    }
}

let title = prompt("Введите title");
let liCount = parseInt(prompt("Введите количество "));

let mi = new MenuItem("Zalupa", "daf");
mi.show();