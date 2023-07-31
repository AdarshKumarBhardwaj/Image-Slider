const slides=document.querySelectorAll(".slide")
var counter=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
let total=slides.length;
const goprev=()=>{
    if(counter<0){
        return gonext()
    }
    else{
    counter--;
    slideimage()}
}
const gonext=()=>{
    if(counter+1>total)
    {
        return goprev()
    }
    else{
    counter++;
    slideimage()
     }
}

const slideimage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}

