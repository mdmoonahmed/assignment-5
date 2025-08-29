// get inner text

function getInnerTextNumber(id) {
  const innerText = parseInt(document.getElementById(id).innerText);

  return innerText;
}

// set inner text for copy count

function setInnerText(value) {
  const newInnerText = document.getElementById("copy-count");
  newInnerText.innerText = value;

  return newInnerText;
}

// function for copy button

document.querySelectorAll(".btn-copy").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card-container");
    const textEl = card.querySelector(".service-num");
    const text = textEl.innerText.trim();
    

    const availableCount = getInnerTextNumber("copy-count");
    const newCount = availableCount + 1;

    if (btn.classList.contains("copied")) {
      alert("Number already copied.");
      return;
    }
    setInnerText(newCount);
    alert("Are you sure you want to copy this number?");

    btn.classList.add("copied");

    navigator.clipboard.writeText(text).then(() => {
      btn.innerText = "Copied!";
      setTimeout(
        () => (btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy'),
        1500
      );
    });
  });
});

// function for heart icon

document.querySelectorAll(".btn-heart").forEach((btn) => {
  btn.addEventListener("click", function () {
    const heartCount = document.getElementById('heart-count');
    const currentCount = parseInt(heartCount.innerText);
    
    
    if(btn.classList.contains('fa-solid')){
      btn.classList.remove('fa-solid');
      btn.classList.add('fa-regular');
      btn.style.color = '';
      heartCount.innerText = currentCount - 1;
    }
    else{
       btn.classList.remove('fa-regular');
      btn.classList.add('fa-solid');
      btn.style.color = 'red';
      heartCount.innerText = currentCount + 1;
    }
    

  });
});
// function for call 
document.querySelectorAll('.btn-call').forEach((btn) => {
  btn.addEventListener('click',function(event){
     // function for coin 
     const availableCoin = document.getElementById('coin');
     const availableCoinEl = parseInt(availableCoin.innerText);
     
     if(availableCoinEl < 20){
       alert('You do not have sufficient coins to make a call.');
       return;
     }

    availableCoin.innerText= availableCoinEl - 20;



     const serviceName = btn.closest('.card-container');
     const serviceNameEl = serviceName.querySelector('.service-name').innerText;
     
     const serviceNum= btn.closest('.card-container');
     const serviceNumEl = serviceNum.querySelector('.service-num').innerText;
     
     
     alert('Calling'+' '+serviceNameEl+" "+ serviceNumEl);

    // call history function for desktop
    const serNameBan = btn.closest('.card-container');
    const serNameBanEl = serNameBan.querySelector('.service-name-ban').innerText;
    
    const historyContainer = document.getElementById('history-container');
    const createDiv =document.createElement('div');
    createDiv.className = 'flex justify-between p-3 bg-[#f5eef2] mb-3';

    
    let createH = document.createElement('h4');
    createH.className= 'font-medium';
    createH.innerText = serNameBanEl;
    
    
    let createP = document.createElement('p');
    createP.className= 'text-[14px] text-gray-500';
    createP.innerText=serviceNumEl;
    
    
    let leftDiv = document.createElement('div');
    leftDiv.className= 'flex flex-col justify-start';
    
    
    
    const time = new Date().toLocaleTimeString();
    const createRightP= document.createElement('p');
    createRightP.innerText= time;

    
    leftDiv.appendChild(createH);
    leftDiv.appendChild(createP);
    
    createDiv.appendChild(leftDiv);
    createDiv.appendChild(createRightP);
    
    historyContainer.prepend(createDiv);
    
    
    // call history function for mobile
    
    const historyContainerMobile = document.getElementById('history-container-mobile');
    
    const createDivClone = createDiv.cloneNode(true);
    historyContainerMobile.prepend(createDivClone);
  })
})
 // function for clear button desktop
document.getElementById('btn-clear').addEventListener('click',function(){
  const desktopHistory = document.getElementById('history-container');
  desktopHistory.innerHTML= '';
})

// // function for clear button mobile

document.getElementById('btn-clear-mobile').addEventListener('click',function(){
  const mobileHistory = document.getElementById('history-container-mobile');
  mobileHistory.innerHTML= '';
})



// history section for mobile
const btnMenu = document.getElementById("btn-history");
const menu = document.getElementById("menu-history");
btnMenu.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});
