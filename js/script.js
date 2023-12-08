 const slide = document.getElementById("imagebox");
 const name = document.getElementById("imgname")
 const position = document.getElementById("imgpost")
let slideimages =['test.jpg','test1.jpg','testimonial-1.jpg','test2.jpg','test3.jpg'];
const len= slideimages.length
console.log(len)
let imgnames=["TONY","DOMNIC","JAMES","PAUL","HOBBS"];
let post=["Bath,AB2","Bath,BAS2","Bath,BA2","Bath,ACC2","Bath,HBA2"]


let i=0;

function change(){
    if(i<slideimages.length){
        console.log(slideimages[i])
        let img = slideimages[i]
        nametag = imgnames[i]
        slide.src=`${img}`
        name.textContent=`${nametag}`
        position.textContent=`${post[i]} `
        updateDots(i);
        i++
    }else{
        i=0;
    }
    setTimeout("change()",4000)
}


function  next(){
if(i<=len-1){
    
    let img = slideimages[i];
    slide.src=`${img}`
    nametag = imgnames[i]
    name.textContent=`${nametag}`
    position.textContent=`${post[i]} `
    updateDots(i);
    i++;
}else{
    i=0
}
}
function previous(){
    console.log("haiii")
    const lenind =len-1;
    console.log(lenind)
    if(i>=0){
        
        let ind =i-1
        if(ind<0){
        let img = slideimages[lenind];
        slide.src=`${img}`
        nametag = imgnames[lenind]
        name.textContent=`${nametag}`
        position.textContent=`${post[lenind]} `
        i--;
        }else{
            let img = slideimages[ind];
            slide.src=`${img}`
            nametag = imgnames[ind]
            name.textContent=`${nametag}`
            position.textContent=`${post[ind]} `
            i--;
            updateDots(i);
        }
        
    }
    else{
        i=lenind
    }
}

function updateDots(activeIndex) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === activeIndex) {
        dot.classList.add('active');
      }
    });
  }
  
 
  function currentSlide(slideIndex) {
    i = slideIndex;
    updateDots(i);
  
    let img = slideimages[i];
    slide.src = img;
    nametag = imgnames[i];
    name.textContent = nametag;
    position.textContent = post[i];
  }

window.onload = change();