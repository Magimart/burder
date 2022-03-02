import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  return (
    <div className="body">
      <header className="header">        
          Burda Media Assignment
      </header>
       {/* question one */}
       <HoriAndVertical/>
       {/* question 2 */}
       <DebugDiv/>
       {/* question three */}
       <DebugFunction/>
       {/* question four */}
       <GetItem/>
       {/* question five */}
       <GetUsers/>
       

    </div>
  );
}

export default App;



//===============================question 1

export const HoriAndVertical = () => {


 /* 
 * Check (1/6) 
 * 
 * Center the inner div both vertically and horizontally.
 */


//______________answer
//  .outer-div {
//   background: red;
//   box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
//   width: 100%;
//   height: 100vh;
//   display: flex;
//     justify-content: center;
//     align-items: center;  
// }


  return (
    <>
                <div className="outer-div">
                 <div className="inner-div">
                    Please center me!
                  </div>
                </div> 
    </>
  )
}


//===============================question 2


 export const DebugDiv = () => {


  /* 
 * Check (2/6) 
 * 
 * How would you fix this Javascript code to make it work?
 */
  // solve(solution);

  // const solution = 'I made it work';
  
  // solve = function(solution) {
  //     document.getElementById('content').innerHTML = solution;
  // }

  //____________________answer
        var solution = 'I made it work';

          function solve(solution){

            document.getElementById('content').innerHTML = solution;
          }
          //  solve(solution);


   return (
     <>
          <div className="content" id="content">
               question two
          </div>
     </>
   )
 }


//===============================question 3


 export const DebugFunction = () => {


  /* 
 * Check (3/6) 
 * 
 * There are 3 errors in this piece of code. Find and fix them.
 */

              // (function() {
              //   const iAmANumber = 0;
              //   for (iAmANumber=0; iAmANumber<10; iAmANumber++) {
              //     if (iAmANumber === '9') {
              //       document.querySelector('.thisiswrong').classList.add('hidden');
              //       document.querySelector('thisisright').classList.add('success');
              //     }
              //   }
              // })();

  //____________________answer
                          // (function() {
                          //   for (let iAmANumber=0; iAmANumber < 10; iAmANumber++) {
                                
                          //     if (iAmANumber === 9) {
                          //       document.querySelector('.thisiswrong').classList.add('hidden');
                          //         document.querySelector('.thisisright').classList.add('success');
                          //     }
                                
                          //   }
                          // })();
            

   return (
        <>

          <div className="divWrapper">
          <div className="thisiswrong">
            <span className="quesThree">question three</span>
                 Where are the errors?
          </div>
          <div className="thisisright">
               Code worked!
          </div>          </div>

       </>
   )
 }






//===============================question 4


 export const GetItem = ()  => {


        /* 
        * Check (4/6) 
        * 
        * Generate the List based on given data by just using javascript.
        */
 
       const data = {
         results: 5,
         error: null,
         data: [{
             id: 1,
             name: 'entry one',
             aNumber: 42,
           },
           {
             id: 2,
             name: 'entry two',
             aNumber: 104,
           },
           {
             id: 3,
             name: 'entry three',
             aNumber: 31,
           },
           {
             id: 4,
             name: 'entry four',
             aNumber: 80,
           },
           {
             id: 5,
             name: 'entry five',
             aNumber: 15,
           }
         ]
       };
       
       // Your Solution here:
       //__________________--solution with vanilla
 
       //_______________htlm
         //   <h2>Hardcoded List</h2>
         //   <ul id="items">
         //     <li id='name1'>Entry One</li>
         //     <li id='name4'>Entry Four</li>
         //     <li id='name2'>Entry Two</li>
         //   </ul>
         // </div>
 
 
 
        //  function getItemNames(items){
  
        //        items &&  items.data.forEach((el) => {
        //        console.log(el)
        //          if(el.id === 1){
        //            document.querySelector('#name1').innerHTML = el.name
        //          }
        //          if(el.id === 4){
        //            document.querySelector('#name4').innerHTML = el.name
        //          }
        //          if(el.id === 2){
        //            document.querySelector('#name2').innerHTML = el.name
        //          }                 
        //      })
        //    }
            // getItemNames(data)
             //_____________________________________solution two with node(es6)
  
 
             return (
               <>
                     <div className="list">
                      <h2>Hardcoded List</h2>

                          {
                                data && data.data.map((el, i)=> {
                                  console.log("this function fired")
                                  console.log(el) 
                           return ( 
                                      <ul key={el.id}>
                                       {el.id === 1? <li>{el.name}</li> :"" } 
                                       { el.id === 4? <li>{el.name}</li> :"" }   
                                       { el.id === 2? <li>{el.name}</li> :"" }                                        
                                      </ul> 
                                   )
                              })
                             }
                        
                     </div>
 
                     <div>
                       <h2>Programmatic List</h2>
                       <ul id='printTextHere'>
                            {/* check solution above its deplayed in the DOM */}
                       </ul>
                     </div>
               </>
          )
        
     }




 //====================================question 5  
 
 
/* 
 * Check (5/6) 
 * 
 * There is an API: https://jsonplaceholder.typicode.com/users
 * 
 * write some code to call that API, retrieve the user data (10 entries) and
 * display the full name (property "name") in the boxes
 */




//_________________answer_____________solution with react hooks

const GetUsers = () => {

  const [users, setUsers] = useState([]);


        const fetchUsersUrl = 'https://jsonplaceholder.typicode.com/users';

        async function fetchUsers(url){

          const response = await fetch(url);

              await response.json()

                 .then((el) => {
                      setUsers(el)
                 })           
         }
           useEffect(() => {
             fetchUsers(fetchUsersUrl)
           },[])


      return (
               <>
                 <div class="wrapper">
                   <div class="box box1">
                       {
                       users && users.map((user,i) => {
                         return (
                           <div key={i}
                              className="usersApi"
                           >
                                <h2 className="userApiHeader"> user : {user.name}</h2>
                           </div>
                         )
                       })
                       }
                   </div>
                    
                 </div> 
              </>
      )

}

//_____________________________________________answer 2 with vanilla
//_____________________uncoment code below please


/* 
* Check (5/6) 
* 
* There is an API: https://jsonplaceholder.typicode.com/users
* 
* write some code to call that API, retrieve the user data (10 entries) and
* display the full name (property "name") in the boxes
*/

var url = 'https://jsonplaceholder.typicode.com/users'

// async function fetchApi (){

//      const response = await fetch(url);
//         await response.json()
//       .then((data) => {
//         let users = data                                  
//         users && users.filter((el)=> el.name && el.name).map((user) => { 
        
//                     let userName = user.name;
//                     //________create user by iterating thru
//                      getUserNames(userName);             
//                })  
//        }) .catch(function(error) {
//          console.log(error);
//        })          
// }
//    fetchApi(url)

//     const getUserNames = (users) => {
//        console.log(users)          
//        users && users? ( document.getElementById("box1").innerHTML = users):""
//     }






 /* 
 * Check (6/6) 
 * 
 * This code is not written very efficiently. Make it better just by using JavaScript.
 */


//  const debugCode = () => {}debugCode()

/* 
 * Check (6/6) 
 * 
 * This code is not written very efficiently. Make it better just by using JavaScript.
 */


//_________________________________answer
/* 
 * Check (6/6) 
 * 
 * This code is not written very efficiently. Make it better just by using JavaScript.
 */

/* 
 * Check (6/6) 
 * 
 * This code is not written very efficiently. Make it better just by using JavaScript.
 */


const fruitCollection = [{

  fruit: 'apple',
  vegetable: 'tomato',
  legume: 'pea',
},
{
  fruit: 'banana',
  vegetable: 'cucumber',
  legume: 'bean',
},
{
  fruit: null,
  vegetable: 'pepper',
  legume: 'lentils',
},
];


const generateDom = () => {


 const foodEl = document.createElement('div');
 foodEl.classList.add('food');

//fruits 
const fruitEl = document.createElement('div');
fruitEl.id = 'fruit';
  const fruitHeadlineEl = document.createElement('h2');
  fruitHeadlineEl.innerText = 'Fruits';
  fruitEl.appendChild(fruitHeadlineEl);
  
  const fruitCountEl = document.createElement('span');
  fruitCountEl.innerHTML = 'Count: <b>n</b>';
  fruitEl.appendChild(fruitCountEl);
  
  const fruitExamplesEl = document.createElement('div');
  fruitExamplesEl.classList.add('examples');
  fruitEl.appendChild(fruitExamplesEl);
   foodEl.appendChild(fruitEl);

//section vegetable
const vegetableEl = document.createElement('div');
vegetableEl.id = 'vegetable';

  const vegetableHeadlineEl = document.createElement('h2');
  vegetableHeadlineEl.innerText = 'Vegetables';
  vegetableEl.appendChild(vegetableHeadlineEl);
  
  const vegetableCountEl = document.createElement('span');
  vegetableCountEl.innerHTML = 'Count: <b>n</b>';
  vegetableEl.appendChild(vegetableCountEl);
  
  const vegetableExamplesEl = document.createElement('div');
  vegetableExamplesEl.classList.add('examples');
  vegetableEl.appendChild(vegetableExamplesEl);
  foodEl.appendChild(vegetableEl);
  
  //section legume  
  const legumeEl = document.createElement('div');
  legumeEl.id = 'legume';

  const legumeHeadlineEl = document.createElement('h2');
  legumeHeadlineEl.innerText = 'Legumes';
  legumeEl.appendChild(legumeHeadlineEl);
  
  const legumeCountEl = document.createElement('span');
  legumeCountEl.innerHTML = 'Count: <b>n</b>';
  legumeEl.appendChild(legumeCountEl);
  
  const legumeExamplesEl = document.createElement('div');
  legumeExamplesEl.classList.add('examples');
  legumeEl.appendChild(legumeExamplesEl);
  
  foodEl.appendChild(legumeEl);
  document.body.appendChild(foodEl);
}

const parseData = () => {

let fruitItems =    fruitCollection.filter((el) => el.fruit && el.fruit ).map((el) => el.fruit)
let vegetableItems =    fruitCollection.filter((el) => el.vegetable && el.vegetable ).map((el) => el.vegetable)
let legumeItems =    fruitCollection.filter((el) => el.legume && el.legume ).map((el) => el.legume)

 let collection = {
          fruits: {
             data: fruitItems,
          },
            vegetables: {
              data: vegetableItems,
          },
            legumes: {
             data: legumeItems,
         },
  }     
  return  collection 
}


const createElementsFromResult = (r) => {

const fruits = r.fruits.data.map(el=>el);
const vegetables = r.vegetables.data.map(el=>el);
const legumes = r.legumes.data.map(el=>el);
const fruitEl = document.getElementById('fruit');
const legumeEl = document.getElementById('legume');
const vegetableEl = document.getElementById('vegetable');

//__________creating items dom

     fruits &&  [...fruits].forEach((fruit, i, arr) => {

         const fruitChildEl = document.createElement('p');
         fruitChildEl.innerText = fruit;
         fruitEl.children[2].appendChild(fruitChildEl);
         fruitEl.children[1].children[0].innerText = arr.length;
   }) 

//___________________vegetables
    vegetables &&  [...vegetables].forEach((vege, i, arr) => {
          
         const vegetableChildEl = document.createElement('p');
         vegetableChildEl.innerText = vege;
         vegetableEl.children[2].appendChild(vegetableChildEl);
         vegetableEl.children[1].children[0].innerText = arr.length;
     
       }) 
       
//___________________legumes
    legumes &&  [...legumes].forEach((leg, i, arr) => {
          
            const legumeChildEl = document.createElement('p');
                legumeChildEl.innerText = leg;
                legumeEl.children[2].appendChild(legumeChildEl);
                legumeEl.children[1].children[0].innerText = arr.length       
       })          

}

const applyStyles = () => {

const body = document.body;
body.style.background = '#333';
body.style.fontFamily = 'Arial, Helvetica, sans-serif';
body.style.color = '#333';
body.style.margin = '0';
body.style.padding = '0';

const h2 = document.querySelectorAll('h2');
h2.forEach(h => {
h.style.margin = '0 4px';
h.style.padding = '0';
});

const span = document.querySelectorAll('span');
span.forEach(s => {
s.style.margin = '0 4px';
s.style.padding = '0';
});

const foodDivs = document.querySelectorAll('.food > div');
foodDivs.forEach(fd => {
fd.style.background = '#fff';
fd.style.margin = '10px';
fd.style.padding = '10px';
fd.style.borderRadius = '4px';
});

const examplePs = document.querySelectorAll('.examples p');
examplePs.forEach(ep => {
ep.style.background = '#ddd';
ep.style.margin = '4px';
ep.style.padding = '4px';
ep.style.borderRadius = '4px';
});
}
generateDom();

const populateDom = () => {
            const result = parseData();
               result && createElementsFromResult(result);
                            applyStyles()
          }
populateDom()













