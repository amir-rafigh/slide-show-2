const img = document.getElementsByTagName('img');
const dot = document.getElementsByClassName('dots');
const numslide = document.querySelector('.num-slide');
const cont_img =document.getElementsByClassName('container-img')[0];


function back(){
    cont_img.className="container-img";
    setTimeout(() => {
        cont_img.className+=" animation"
        for( var i = 4 ; i>=0 ; i--){
    
            if(i == 0){
                img[i].className ="";
                dot[i].className="dots";
                i=4;
                img[i].className+="d-img";
                dot[i].className+=" dot-color";
                numslide.innerHTML = i + 1;
    
                return
            }
            
    
            else if(img[i].className == "d-img"){
                img[i].className ="";
                dot[i].className="dots";
                img[i-1].className+="d-img";
                dot[i-1].className+=" dot-color";
                numslide.innerHTML= i ;
    
                return
            }
        }
        
    }, 100);
}

function next(){
    cont_img.className="container-img";
    setTimeout(() => {
        cont_img.className+=" animation"
        
        for(var i = 0 ; i<img.length ; i++){
            
            if(i==4){
                img[i].className="";
                dot[i].className="dots";
                i=0;
                img[i].className+="d-img";
                dot[i].className+=" dot-color";
                numslide.innerHTML= i + 1
    
                return
            }
           else if(img[i].className=="d-img"){
                img[i].className="";
                dot[i].className="dots";
                img[i + 1].className+="d-img";
                dot[i + 1].className+=" dot-color";
                numslide.innerHTML = i + 2;
                
                return
            }
        }
    }, 100);

}