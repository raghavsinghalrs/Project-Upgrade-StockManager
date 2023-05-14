var c_n  = document.getElementById('candy_name');
var des = document.getElementById('description');
var price = document.getElementById('price');
var qtity = document.getElementById('quantity');
var btn = document.getElementById('submit');
var list = document.getElementById('output_screen');

list.addEventListener('click',buyonly1);
list.addEventListener('click',buyonly2);
list.addEventListener('click',buyonly3);

btn.addEventListener('click',show_details);
function show_details(e){
    e.preventDefault();
    result = {
        'Candy_Name':c_n.value,
        'Description':des.value,
        'Price':price.value,
        'Quantity':qtity.value
    };
    axios.post("https://crudcrud.com/api/bb75ad2eb7d242a3a08b9ac4e2d75aff/stockdata",result)
        .then((res)=>{
            console.log(res);
            var li = document.createElement('li');
            li.id = res.data._id
            li.appendChild(document.createTextNode(c_n.value));
            li.appendChild(document.createTextNode(' '));
            li.appendChild(document.createTextNode(des.value));
            li.appendChild(document.createTextNode(' '));
            li.appendChild(document.createTextNode(price.value));
            li.appendChild(document.createTextNode(' '));
            li.appendChild(document.createTextNode(qtity.value));
            li.appendChild(document.createTextNode(' '));
            var buy1 = document.createElement('button');
            buy1.id='b1';
            buy1.textContent='Buy1'
            li.appendChild(buy1);
            var buy2 = document.createElement('button');
            buy2.id='b2';
            buy2.textContent='Buy2';
            li.appendChild(buy2);
            var buy3 = document.createElement('button');
            buy3.id='b3';
            buy3.textContent='Buy3';
            li.appendChild(buy3);
            list.appendChild(li);
        })
        .catch((err)=>{
            console.log(err);
        })
    // var object = JSON.stringify(result);
    // localStorage.setItem(c_n.value,object);
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/bb75ad2eb7d242a3a08b9ac4e2d75aff/stockdata")
        .then((res)=>{
            for(let i=0;i<res.data.length;i++){
                var li = document.createElement('li');
                li.id = res.data[i]._id
                li.appendChild(document.createTextNode(res.data[i].Candy_Name));
                li.appendChild(document.createTextNode(' '));
                li.appendChild(document.createTextNode(res.data[i].Description));
                li.appendChild(document.createTextNode(' '));
                li.appendChild(document.createTextNode(res.data[i].Price));
                li.appendChild(document.createTextNode(' '));
                li.appendChild(document.createTextNode(res.data[i].Quantity));
                li.appendChild(document.createTextNode(' '));
                var buy1 = document.createElement('button');
                buy1.id='b1';
                buy1.textContent='Buy1'
                li.appendChild(buy1);
                var buy2 = document.createElement('button');
                buy2.id='b2';
                buy2.textContent='Buy2';
                li.appendChild(buy2);
                var buy3 = document.createElement('button');
                buy3.id='b3';
                buy3.textContent='Buy3';
                li.appendChild(buy3);
                list.appendChild(li);
        }
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    
})

function buyonly1(e){
    if (e.target.id=='b1'){
        var x = e.target.parentElement;
        var y = x.id;
        var value = Number(x.childNodes[6].data);
        if (value>0){
            value--;
            result = {
                'Candy_Name':x.childNodes[0].data,
                'Description':x.childNodes[2].data,
                'Price':x.childNodes[4].data,
                'Quantity':value
            }
            axios.put(`https://crudcrud.com/api/bb75ad2eb7d242a3a08b9ac4e2d75aff/stockdata/${y}`,result)
                .then(()=>{
                    x.childNodes[6].data=value;
                    console.log("Thankyou for Purchasing 1",x.childNodes[0].data,x.childNodes[2].data)
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
        else{
            console.log("Not in Stock")
        }
        //     result = {
        //         'Candy Name':x.childNodes[0].data,
        //         'Description':x.childNodes[2].data,
        //         'Price':x.childNodes[4].data,
        //         'Quantity': value
        //     }
        //     var object = JSON.stringify(result);
        //     localStorage.setItem(x.childNodes[0].data,object);
        // }else{
        //     console.log("Sorry! Product is not available at our store!")
        // }
    }
}

function buyonly2(e){
    if (e.target.id=='b2'){
        var x = e.target.parentElement;
        var y = x.id;
        var value = Number(x.childNodes[6].data);
        if (value>=2){
            value-=2;
            result = {
                'Candy_Name':x.childNodes[0].data,
                'Description':x.childNodes[2].data,
                'Price':x.childNodes[4].data,
                'Quantity':value
            }
            axios.put(`https://crudcrud.com/api/bb75ad2eb7d242a3a08b9ac4e2d75aff/stockdata/${y}`,result)
                .then(()=>{
                    x.childNodes[6].data=value;
                    console.log("Thankyou for Purchasing 2",x.childNodes[0].data,x.childNodes[2].data)
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
        else if(value==0){
            console.log("Sorry, we don't have",x.childNodes[0].data,x.childNodes[2].data,"in Stock")
        }
        else{
            console.log("Sorry only",value,x.childNodes[0].data,x.childNodes[2].data,"remaining in Stock")
        }
        // var value = Number(x.childNodes[6].data);
        // if (value>=2){
        //     value-=2;
        //     x.childNodes[6].data = value;
        //     result = {
        //         'Candy Name':x.childNodes[0].data,
        //         'Description':x.childNodes[2].data,
        //         'Price':x.childNodes[4].data,
        //         'Quantity': value
        //     }
        //     var object = JSON.stringify(result);
        //     localStorage.setItem(x.childNodes[0].data,object);
        // }else{
        //     console.log("Sorry! Product is not available at our store as per ypur requirement!")
        // }
    }
}
function buyonly3(e){
    if (e.target.id=='b3'){
        var x = e.target.parentElement;
        var y = x.id;
        var value = Number(x.childNodes[6].data);
        if (value>=3){
            value-=3;
            result = {
                'Candy_Name':x.childNodes[0].data,
                'Description':x.childNodes[2].data,
                'Price':x.childNodes[4].data,
                'Quantity':value
            }
            axios.put(`https://crudcrud.com/api/bb75ad2eb7d242a3a08b9ac4e2d75aff/stockdata/${y}`,result)
                .then(()=>{
                    x.childNodes[6].data=value;
                    console.log("Thankyou for Purchasing 3",x.childNodes[0].data,x.childNodes[2].data)
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
        else if(value==0){
            console.log("Sorry, we don't have",x.childNodes[0].data,x.childNodes[2].data,"in Stock")
        }
        else{
            console.log("Sorry only",value,x.childNodes[0].data,x.childNodes[2].data,"remaining in Stock")
        }
        // var value = Number(x.childNodes[6].data);
        // if (value>=2){
        //     value-=2;
        //     x.childNodes[6].data = value;
        //     result = {
        //         'Candy Name':x.childNodes[0].data,
        //         'Description':x.childNodes[2].data,
        //         'Price':x.childNodes[4].data,
        //         'Quantity': value
        //     }
        //     var object = JSON.stringify(result);
        //     localStorage.setItem(x.childNodes[0].data,object);
        // }else{
        //     console.log("Sorry! Product is not available at our store as per ypur requirement!")
        // }
    }
}