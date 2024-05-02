
//* create element function
function element(tag, classname, id, text) {
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.id = id;
    tags.innerHTML = text;
    return tags;
  }
  const container = element("div","container my-5","","")
  const row=element("div","row","","")
//* API fetch:
const ts=1714125917204;
//console.log(ts);
const publickey="3b1a85b0bc529851fb913ecdf6fc66ef";
const hash="1c410769c9fa7b90df22b8b44fc68514";
const respone=fetch("http://gateway.marvel.com/v1/public/comics?ts=1714126553675&apikey=3b1a85b0bc529851fb913ecdf6fc66ef&hash=39546bf3f416e296a5ce9a47fd0c6ffe");

//const respone=fetch("http://gateway.marvel.com/v1/public/characters?ts=1714126553675&apikey=3b1a85b0bc529851fb913ecdf6fc66ef&hash=39546bf3f416e296a5ce9a47fd0c6ffe")

respone.then((data)=>data.json())
.then((ele)=>{
    //console.log(ele);
   for(var i=0;i<ele.data.count;i++)
   {
        const imgsrc=ele.data.results[i].thumbnail.path+".jpg";
        const a=document.createElement("div");
       a.classList="col-lg-2 col-sm-12 col-md-6 ";
       a.innerHTML=`
       <div class="card ss">
  <img src=${imgsrc} class="card-img-top" alt="...">
  
  <div class="card-body my-3">
    <p class="card-text textcolor fw-bolder" id="card-text" onclick="btn(${ele.data.results[i].id})">${ele.data.results[i].title}</p>
    <p class="text">${ele.data.results[i].variantDescription}</p>
  </div>
</div>
       `
       row.append(a)
       container.append(row)
        
   }
   
}).catch((error)=>alert("There is no data in api"));
document.body.append(container)
function btn(id)
{
  const ids=id;
  const respone=fetch(`http://gateway.marvel.com/v1/public/comics/${ids}/creators?ts=1714126553675&apikey=3b1a85b0bc529851fb913ecdf6fc66ef&hash=39546bf3f416e296a5ce9a47fd0c6ffe`);
  respone.then((data)=>data.json())
  .then((ele)=>{
    //console.log(ele.data.results[0].id);
   // console.log(ele.data.results[0].fullName);
alert(ele.data.results[0].fullName +" is the creators of this comic");
}
).catch((error)=>alert("There is no creator mentioned in api"))
}


