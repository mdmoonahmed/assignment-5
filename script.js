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
    const card = btn.closest(".p-5");
    const textEl = card.querySelector(".copy-text");
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
    console.log(heartCount,currentCount);
    
    
    if(btn.classList.contains('fa-solid')){
      btn.classList.remove('fa-solid');
      btn.classList.add('fa-regular');
      heartCount.innerText = currentCount - 1;
    }
    else{
       btn.classList.remove('fa-regular');
      btn.classList.add('fa-solid');
      heartCount.innerText = currentCount + 1;
    }
    

  });
});

const btnMenu = document.getElementById("btn-history");
const menu = document.getElementById("menu-history");
btnMenu.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});
