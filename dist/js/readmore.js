const myFunction = () => {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
};

const myRead = () => {
  let dtDots = document.getElementById("dts");
  let dtText = document.getElementById("dtmore");
  let dtbtnText = document.getElementById("dtBtn");

  if (dtDots.style.display === "none") {
    dtDots.style.display = "inline";
    dtbtnText.innerHTML = "Read more";
    dtText.style.display = "none";
  } else {
    dtDots.style.display = "none";
    dtbtnText.innerHTML = "Read less";
    dtText.style.display = "inline";
  }
};

const myReadmore = () => {
  let dtDots = document.getElementById("dtscard1");
  let dtText = document.getElementById("dtmorecard1");
  let dtbtnText = document.getElementById("dtBtncard1");

  if (dtDots.style.display === "none") {
    dtDots.style.display = "inline";
    dtbtnText.innerHTML = "Read more";
    dtText.style.display = "none";
  } else {
    dtDots.style.display = "none";
    dtbtnText.innerHTML = "Read less";
    dtText.style.display = "inline";
  }
};
