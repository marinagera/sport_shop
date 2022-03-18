(function () {
  const productInfo = document.querySelector(".product__info_item");
  const productInfoBtn = productInfo.querySelector(".product__info_btn");
  const infoItem2 = document.querySelector(".info_item2");
  const info2Btn = infoItem2.querySelector(".info_btn2");
  const infoItem3 = document.querySelector(".info_item3");
  const info3Btn = infoItem3.querySelector(".info_btn3");

  function titleClickHandler() {
    console.log("clicked on BTN");
    productInfo.classList.toggle("product__info_item_active");
  }

  function title2ClickHandler() {
    console.log("clicked on BTN");
    infoItem2.classList.toggle("info_item2_active");
  }

  function title3ClickHandler() {
    console.log("clicked on BTN");
    infoItem3.classList.toggle("info_item3_active");
  }

  productInfoBtn.addEventListener("click", titleClickHandler);
  info2Btn.addEventListener("click", title2ClickHandler);
  info3Btn.addEventListener("click", title3ClickHandler);
})();
