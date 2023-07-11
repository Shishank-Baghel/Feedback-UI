const ratingEls = document.querySelectorAll('.rating');
const btn1 = document.getElementById('btn');
const container1=document.getElementById('container')

let selectedRating="";




ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener('click',(event)=>{
        // console.log(event.target.innerText || event.target.parentNode.innerText);
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        removeActive();
     event.target.classList.add('active')
     event.target.parentNode.classList.add('active')
    })
});

btn1.addEventListener('click',()=>{
    if(selectedRating !== ''){
        container1.innerHTML=`
        <h1>Thank You </h1>
        <br/>
        <br/>
        <strong> Feedback : ${selectedRating}</strong>
        <br/>
        <br/>
        <strong>Please Smile</strong>
        `

    }
})

function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove('active');
    })
}