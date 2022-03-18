(function () {
  const filterBlock = document.querySelector(".filter_block");
  const filterBtn = filterBlock.querySelector(".filter_block_btn");
  const block2 = document.querySelector(".block2");
  const block2Btn = block2.querySelector(".block2_btn");
  const block3 = document.querySelector(".block3");
  const block3Btn = block3.querySelector(".block3_btn");
  const block4 = document.querySelector(".block4");
  const block4Btn = block4.querySelector(".block4_btn");

  function titleClickHandler() {
    console.log("clicked on BTN");
    filterBlock.classList.toggle("filter_block_active");
  }

  function title2ClickHandler() {
    console.log("clicked on BTN");
    block2.classList.toggle("block2_active");
  }

  function title3ClickHandler() {
    console.log("clicked on BTN");
    block3.classList.toggle("block3_active");
  }

  function title4ClickHandler() {
    console.log("clicked on BTN");
    block4.classList.toggle("block4_active");
  }

  filterBtn.addEventListener("click", titleClickHandler);
  block2Btn.addEventListener("click", title2ClickHandler);
  block3Btn.addEventListener("click", title3ClickHandler);
  block4Btn.addEventListener("click", title4ClickHandler);
})();
