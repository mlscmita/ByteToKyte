const home = document.getElementById("home");
home.classList.add("active");
function changeColor(button) {
  // Remove 'active' class from all buttons
  const buttons = document.querySelectorAll("nav a");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Add 'active' class to the clicked button
  button.classList.add("active");
}




gsap.from(".hero img",{
  opacity:0,
  y:30,
  duration:1,
  delay:0.5
})

gsap.from(".cta-buttons button",{
  opacity:0,
  y:60,
  stagger:0.1,
  duration:1,
  delay:0.3
})

gsap.from(".hero h1",{
  opacity:0,
  y:60,
  delay:0.3,
  duration:1,
})

gsap.from("#about",{
  opacity:0,
  y:60,
  duration:1,
  delay:0.3,
  scrollTrigger:{
    trigger:"#about",
    scroller:"body",
    start:"top 70%"
  }
})

gsap.from(".experience-icons ",{
  opacity:0,
  y:60,
  duration:1,
  delay:0.3,
  stagger:0.1,
  scrollTrigger:{
    trigger:".experience-icons",
    scroller:"body",
    start:"top 70%"
  }
})

gsap.from(".experience-icons div span",{
  opacity:0,
  y:60,
  duration:1,
  delay:0.3,
  stagger:0.1,
  scrollTrigger:{
    trigger:".experience-icons",
    scroller:"body",
    start:"top 70%"
  }
})

gsap.from("#project-title",{
  opacity:0,
  y:60,
  duration:0.4,
  delay:0.1,
  stagger:0.1,
  scrollTrigger:{
    trigger:"#project-title",
    scroller:"body",
    start:"top 70%"
  }
})

gsap.from(".project-card",{
  opacity:0,
  y:60,
  duration:0.4,
  delay:0.1,
  stagger:0.1,
  scrollTrigger:{
    trigger:".project-card",
    scroller:"body",
    start:"top 70%"
  }
})


