import "aos/dist/aos.css";
import anime from "animejs";
import Aos from "aos";

//  export const AosInit =  AOS.init({
//     duration: 2000,
//     once: false,
//   })

export function jalankanAos() {
  Aos.init({
    duration: 2000,
    once: false,
  });

  const arrowAnimation = anime.timeline({
    autoplay: true,
    // delay: 150,
    loop: true,
    direction: "alternate",
    easing: "easeInOutCirc",
  });
  arrowAnimation.add({
    targets: "#arrow-scroll",
    duration: 2000,

    translateY: [
      { value: -4, duration: 700, delay: 300 },
      { value: 0, duration: 700, delay: 300 },
    ],
  });
}
