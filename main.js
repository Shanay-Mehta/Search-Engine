
let input=document.querySelector('input');
let image=document.querySelector('img');
let engine=document.querySelector('div.searchEngine');
let button=document.querySelector('button');
let url=new URL('https://www.google.com/search');
input.addEventListener('input',e=>{
 if(e.target.value.toLowerCase().startsWith('youtube ')){
  image.src='./imgs/youtube.jpg';
  image.alt='Youtube Icon';
  engine.innerText='Search Youtube';
  url.searchParams.set('search_query',input.value.slice(8));
 }
 else if(e.target.value.toLowerCase().startsWith('docs ')){
  image.src='./imgs/docs.jpg';
  image.alt='Docs Icon';
  engine.innerText='Search Docs';
  url=new URL('https://docs.google.com/document');
  url.searchParams.set('q',input.value.slice(5));
 }
 else if(e.target.value.toLowerCase().startsWith('github ')){
  image.src='./imgs/github.jpg';
  image.alt='Github Icon';
  engine.innerText='Search Github';
  url=new URL("https://github.com/search");
  url.searchParams.set('q',input.value.slice(7));
 }
 else if(e.target.value.toLowerCase().startsWith('slides ')){
  image.src='./imgs/slides.jpg';
  image.alt='Slides Icon';
  engine.innerText='Search Slides';
  url=new URL("https://docs.google.com/presentation");
  url.searchParams.set('q',input.value.slice(7));
 }
 else if(e.target.value.toLowerCase().startsWith('sheets ')){
  image.src='./imgs/sheets.png';
  image.alt='Sheets Icon';
  engine.innerText='Search Sheets';
  url=new URL("https://docs.google.com/spreadsheets");
  url.searchParams.set('q',input.value.slice(7));
 }
 else{
  image.src='./imgs/google.png';
  image.alt="Google Icon"
  engine.innerText='Search Google';
  url=new URL('https://www.google.com/search');
  url.searchParams.set('q',input.value);
 }
})
button.addEventListener('click',e=>{
 e.preventDefault();
 window.open(url,'_self');
})