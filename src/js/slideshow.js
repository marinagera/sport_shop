() => {
  function slideshow(wrapper) {
    const controlPrev = wrapper.querySelector(".slideshow__control_prev");
    const controlNext = wrapper.querySelector(".slideshow__control_next");
    const viewport = wrapper.querySelector(".slideshow__viewport");
    const slidesWrapper = wrapper.querySelector(".slideshow__slides");
    const slides = wrapper.querySelectorAll(".slideshow__pic_container");
    const transformCount = 100 / slides.length;
    let activeSlideIndex = 0;

    function increaseSlideIndex() {
      if (activeSlideIndex + 1 < slides.length) {
        activeSlideIndex++;
      } else {
        activeSlideIndex = 0;
      }

      console.log(activeSlideIndex);
    }

    function decreaseSlideIndex() {
      if (activeSlideIndex - 1 < 0) {
        activeSlideIndex = slides.length - 1;
      } else {
        activeSlideIndex--;
      }

      console.log(activeSlideIndex);
    }

    controlNext.addEventListener("click", function () {
      increaseSlideIndex();
      slidesWrapper.style.transform =
        "translateX(-" + transformCount * activeSlideIndex + "%)";
    });

    controlPrev.addEventListener("click", function () {
      decreaseSlideIndex();
      slidesWrapper.style.transform =
        "translateX(-" + transformCount * activeSlideIndex + "%)";
    });
  }

  slideshow(document.querySelector(".slideshow"));
};
