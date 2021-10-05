// var menu = [
//     {

//         id: 1,
//         title: '.NET WHITE MUG',
//         price: 15,
//         // // img:"./assests/1.PNG",
//     },
//     // {
//     //    id:2,
//     //     // title:'.NET BLUE SHIRT',
//     //     // price:16,
//     //     // img:"./assests/2.PNG",
//     // },
//     // {
//     //     // id:3,
//     //     // title:'.NET BLACK SHIRT',
//     //     // price:17,
//     //     // img:"./assests/3.PNG",

// ];

var up= document.querySelector('.edits')





const cartSection = document.querySelector('.cart')

document.getElementById('additem').addEventListener('click', (e) => {
    e.preventDefault()

    // var menus = {
    //     title: document.getElementById('title').value,
    //     price: document.getElementById('price').value
    // }
    // menu.push(menus)

    document.forms[3].reset();
    axios.get('https://reqres.in/api/users').then(res =>{
        let menus=JSON.stringify(res.data.data)
       
        showOutput(menus)
     }    
     ).catch(err=>console.error(err));

    // let displaymenu = menu.map((items) => {
    //     return ` 
    //    <div class="col-md-3 ">
    //        <div class="card my-3 mx-3 p-3 bg-primary">
            
    //            <div class="card-body text-center">
    //                <p class="btn text-light bg-warning">[ADD TO CART]</p>
    //                <h4 class="card-title">
                   
    //                    ${items.id}
    //                </h4>
    //                <h1 class="card-text">
    //                     $${items.name}
    //                </h1>
    //            </div>
    //        </div>
    //        </div> 
    //       `;

    // });
    // displaymenu = displaymenu.join("")
    // cartSection.innerHTML = displaymenu;

});
document.querySelector('#linkReg').addEventListener('click', (e) => {
    const home = document.querySelector("#home");
    const register = document.querySelector("#reg");
    e.preventDefault()
    home.classList.add("form--hidden");
    register.classList.remove("form--hidden")
});
document.querySelector('#linksing').addEventListener('click', (e) => {
    const login = document.querySelector("#login");
    const register = document.querySelector("#reg");
    let fullName = document.querySelector('#fname').value;
    let phoneNum = document.querySelector('#p-num').value;
    let email = document.querySelector('#email').value;

    e.preventDefault()
    let data = []
    if (fullName == '' | phoneNum == '' | email == '') {
        const error = document.querySelectorAll('.error')
        for (let i = 0; i < error.length; i++) {
            error[i].innerHTML = 'enter the feild'
        }
    }
    else {
        let persons = {
            'fullName': fullName,
            'phoneNum': phoneNum,
            'email': email
        }
        data.push(persons)
        let datasting = JSON.stringify(data)
        localStorage.setItem('userdata', datasting)
        register.classList.add("form--hidden");
        login.classList.remove('form--hidden');
    }

});

document.querySelector('#linksingin').addEventListener('click', (e) => {
    const home = document.querySelector("#home");
    const login = document.querySelector("#login");
    e.preventDefault()
    home.classList.add("form--hidden");
    login.classList.remove("form--hidden")
});
document.querySelector('#linktocart').addEventListener('click', (e) => {

    const login = document.querySelector("#login");
    const cartbtn = document.querySelector('#add');
    const carts=document.querySelector('#cart')
    let email = document.querySelector('#e-mail').value;
    let password = document.querySelector('#p-word').value;
    e.preventDefault()
    let dataobj = JSON.parse(localStorage.getItem('userdata'));
    const error = document.querySelectorAll('.errors')
    for (let i = 0; i < error.length; i++) {
        if (email == '' | password == '') {
            error[i].innerHTML = 'enter the feild'
        }
        else if (email !== dataobj[i].email) {
        error[i].innerHTML = 'plz enter the valid mail';
        }
        if (email == dataobj[i].email) {
            login.classList.add("form--hidden")
            cartbtn.classList.remove('form--hidden')
            carts.classList.remove('form--hidden')
        }

    }

});
document.querySelector('#linktoaddbtn').addEventListener('click', (e) => {

    const cartbtn = document.querySelector('#add')
    const card = document.querySelector('#card')
    e.preventDefault()
   
   
    card.classList.remove("form--hidden")
    cartbtn.classList.add('form--hidden')

});
// document.querySelector('#linksin').addEventListener('click', (e) => {


//     const cart = document.querySelector('#cart')
//     e.preventDefault()

//     cart.classList.remove("form--hidden")


// });





function showOutput(menus) {
    debugger;
    var required=menus
    var data=JSON.parse(required)
   
//     display=`<pre>${JSON.stringify(required, null, 2)}
//    </pre>
//  `
//  <img src="${required.data[0].avatar}" alt="" srcset="">
let displaymenu=''  
for(let i=0;i<data.length;i++){
    
     displaymenu += 
    ` 
    <div class="col-md-3 ">
      <div class="card my-3 mx-3 p-3 bg-primary">
       
          <div class="card-body text-center">
             
              <h4 class="card-title">
              
                  ${data[i].id}
              </h4>
              <h1 class="card-text">
                   ${data[i].email}
              </h1>
               <button   class='btn edits bg-warning' type="button"><i class="fas fa-edit"></i></button>
              <a><button class='btn bg-warning'><i class="fas fa-trash-alt"></i></button></a>
          </div>
          
      </div>
      </div> 
     
     
       `;

       cartSection.innerHTML = displaymenu; 
       var up= document.querySelector('.edits')
console.log(up.length)

    
}  
up.addEventListener('click',upDate)  
}

function upDate(e){
    
    var sai= e.currentTarget;
    console.log(sai)
    let id=sai.parentElement.firstElementChild.innerText;
    console.log(id)

   
    
//    let id= document.querySelector('').parentElement.firstElementChild.innerText
   
   var edit=document.getElementById('edit');
   edit.classList.remove('form--hidden')

}

// up.addEventListener('click',upDate)
//  function upDate(e){
//      var sai= e.currentTarget;
//      console.log(sai)

    
     
// //    let id= document.querySelector('').parentElement.firstElementChild.innerText
    
//     var edit=document.getElementById('edit');
//     edit.classList.remove('form--hidden')

// //  }
 

