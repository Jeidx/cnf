const searchInp = document.querySelector('#search-inp');
const inpWrp = document.querySelector('.inp-wrp');
let newItem = document.createElement('ul');
newItem.classList.add('list-of-items');



fetch("db.json")
    .then(res => res.json())
    .then(res => start(res));

function start(res){
    let count = 0;
    let valU = render;
    let searchBtn = document.createElement('div');
    searchBtn.addEventListener('click', (e) => {
        searchInp.value = '';
        searchBtn.remove();
    });
    searchInp.addEventListener('input', (e) => {
        count += 1;  
    if(e.target.value.length <= 1 && typeof e.target.value === "string"){
        let stringOfuser = e.target.value[0].toUpperCase();

        sravnenie(stringOfuser, count);
        function sravnenie(val, count){
            let filteredList = [];
            res.forEach(item => {
                if(val === item.name[0]){
                    filteredList.push(item.name);
                }
            });
            return createListElement(filteredList);
        }
        function createListElement(el){
            finalAnsw = el.map(item => {
                return(
                    `<li class="btn-item"><a class="btn-item-a" href="###">${item}</a></li>`
                )
            })
            newItem.innerHTML = finalAnsw;
            inpWrp.append(newItem);
            for(let node of newItem.childNodes){
                if(node.nodeName == '#text'){
                    node.remove();
                }
            }
        }
        chengePlaceholder(e.target.value);
        }

    });

    function chengePlaceholder(val){
        let newTex = '';
        document.querySelectorAll('.btn-item-a').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault;
                newTex = e.target.textContent;
                render(newTex);
                inpWrp.append(searchBtn);
            });
        });
        return newTex;
    }
    function render(newTex) {
        searchInp.value = newTex;
        document.querySelector('.list-of-items').remove();
        searchBtn.innerHTML = `<a target="blank" class="a-to-find" href="https://www.google.com/search?q=${newTex}">Find</a>`;
        return newTex;
    }
}
;



