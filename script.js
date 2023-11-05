quote=document.getElementById('quote')
button=document.getElementsByTagName('button')
author=document.getElementById('author')

const url='https://api.quotable.io/random'
getQuote=()=>{ 
    fetch(url)
    .then((data)=>data.json())
    .then((item)=> { 
        console.log(item)
        quote.textContent=item.content
        author.textContent=item.author

    })
}
window.addEventListener('load',getQuote)
btn.addEventListener('click',getQuote)