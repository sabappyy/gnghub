function changeGallery(image,element){

document.getElementById("gallery-main").src=image;

document.querySelectorAll(".gallery-thumb").forEach(img=>{

img.classList.remove("active");

});

element.classList.add("active");

}

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

function toggleFAQ(index){

    const answer = document.getElementById(`faq-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    if(answer.style.maxHeight){

        answer.style.maxHeight = null;
        answer.style.padding = "0 20px";
        icon.innerHTML = "+";

    }else{

        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.padding = "20px";
        icon.innerHTML = "−";

    }

}