document.getElementById("tweet").setAttribute("href", `https://twitter.com/intent/tweet?text=My score on the current HNG leaderboard: `);

async function getData(url) {
    const response = await fetch(url, { 
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
       }); 
   return response.json();
   };
   
   getData('/routeboards') .then(data => { console.log(data);
   
        data.sort (function(a,b) {
            console.log(b.points);
             return parseInt(a.points) + parseInt(b.points);
        });
   
   let  first3 = data.splice(0, 3);
   first3.sort (function(a,b) {
        return parseInt(a.points) + parseInt(b.points);
    });
   console.log(data);
   console.log(first3);
   let firstname = document.getElementById('firstname');
   firstname.innerHTML = first3[0].name
   
   let secondname = document.getElementById('secondname')
   secondname.innerHTML = first3[1].name
   
   let thirdname = document.getElementById('thirdname')
   thirdname.innerHTML = first3[2].name
   
   
   
//    let  first3 = data.splice(0, 3)
   let firstpt = document.getElementById('firstpt')
   firstpt.innerHTML = first3[0].points
   
   let secondpt = document.getElementById('secondpt')
   secondpt.innerHTML = first3[1].points
   
   let thirdpt = document.getElementById('thirdpt')
   thirdpt.innerHTML = first3[2].points
   
   document.getElementsByClassName('name')[0].innerHTML = data[0].name
   document.getElementsByClassName('points')[0].innerHTML = data[0].points
   for(let i=1; i<data.length; i++){
        let x = document.getElementById('card')
        let clone = x.cloneNode(true)
               document.getElementById('leaderboard').appendChild(clone)
   
   document.getElementsByClassName('name')[i].innerHTML = data[i].name
   document.getElementsByClassName('points')[i].innerHTML = data[i].points
   }
    });