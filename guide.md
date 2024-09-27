# HTML, CSS, and JavaScript Workshop Documentation

This workshop project teaches the basics of HTML, CSS, and JavaScript by creating a personal portfolio website. The project is divided into three main files: `index.html`, `style.css`, and `script.js`. Let's break down each file and explain its components.

## HTML (index.html) and CSS(style.css)

The HTML file structures the content of the website. Let's examine its key sections:

### head

```html
<title>- Portfolio</title>
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
  rel="stylesheet"
/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Dots:wght@400..700&display=swap"
  rel="stylesheet"
/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
  rel="stylesheet"
/>
<link rel="stylesheet" href="style.css" />
```





### body,html section
```html
<div id="container">
</div>
```

<!-- add all further code inside this div tag -->

```css
body, html {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #1E1E1E;
    color: #FFFFFF;
    scroll-behavior: smooth;
    font-size:16px;
}

#container{
    max-width: 900px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    margin-bottom: 3rem;

}
```






### Navigation menu / navbar

```html
<nav>
  <a id="home" onclick="changeColor(this)" href="#">Home</a>
  <a onclick="changeColor(this)" href="#about">About</a>
  <a onclick="changeColor(this)" href="#projects">Projects</a>
  <a onclick="changeColor(this)" href="#experience">Experience</a>
</nav>
```

```css
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  position: sticky;
  backdrop-filter: blur(10px);
  width: fit-content;
  border-radius: 32px;
  margin: 12px auto;
  padding-right: 32px;
  top: 16px;
  z-index: 1000;
  padding: 12px 10px;
}

.logo {
  font-weight: bold;
  font-size: 24px;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 24px;
  font-family: "Edu AU VIC WA NT Dots", cursive;
}

.active {
  background-color: #ff6b6b !important;
  color: white;
  transition: background-color 1s ease;
}
```

### Hero section

```html
<section id="hero">
  <img src="./assests/image.jpg" alt="Profile Picture" />
  <h1>Sharad Bhadait</h1>
  <!-- <h2>Full-Stack Developer</h2> -->
  <div class="cta-buttons">
    <button>Get in Touch</button>
    <button>Download CV</button>
    <button>Linkedin</button>
    <button>Github</button>
  </div>
</section>
```

```css
#hero {
  padding: 50px 0;
}

#hero img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 5px;
}

#hero h1 {
  font-size: 3rem;
  margin: 20px 0 10px;
  font-family: "Satisfy", cursive;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
  margin-bottom: 6rem;
}

.cta-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 32px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
}

.cta-buttons button:first-child {
  background-color: #ff6b6b;
  color: #1e1e1e;
}

.cta-buttons button:last-child {
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
}
```

### About section

```html
<section id="about">
  <h2>ABOUT ME</h2>
  <p>
    Hi, I'm Sharad, a full-stack developer based in India. I specialize in
    creating interactive, responsive websites and web applications. I'm
    passionate about exploring and learning the latest in web development and
    cloud technologies. My expertise lies in full-stack web development, with a
    core stack of React, Next.js, Node.js, and MongoDB. I've recently expanded
    my skills to include cloud platforms (AWS, GCP, Azure) and containerization
    with Docker.
  </p>
</section>
```

```css
#about {
  padding: 6rem 0;
  font-family: monospace;
}
#about h2 {
  font-size: 2rem;
}
```

### Skills Section

```html
<section id="skills">
  <h2>Skills</h2>
  <div>
    <span>Nodejs</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>JAVASCRIPT</span>
  </div>
</section>
```

```css
#skills div {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

#skills div span {
  border: 2px solid white;
  padding: 12px 16px;
  border-radius: 8px;
  border-style: solid;
  background-color: #ff6b6b;
}
```

### Project Section

```html
<section id="projects">
  <div id="project-title">
    <h2>PROJECTS</h2>
    <img
      width="100px"
      src="https://media.tenor.com/QhRvvwpCdVoAAAAi/rocket.gif"
      alt="Logo"
    />
  </div>

  <div class="project-flex">
    <div class="project-card">
      <img src="./assests/project-thumbnail-1.png" alt="HTML Tutorial" />
      <div class="project-info">
        <h3>POWER OF HTML</h3>
        <p>HTML TUTORIAL</p>
      </div>
    </div>
    <div class="project-card">
      <img src="./assests/project-thumbnail-2.png" alt="CSS Tutorial" />
      <div class="project-info">
        <h3>UNLOCK CSS MAGIC</h3>
        <p>CSS TUTORIAL</p>
      </div>
    </div>
  </div>
</section>
```

```css
#projects {
  padding-top: 2rem;
}

#project-title {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 3rem 0;
}

#projects h2 {
  color: #ff6b6b;
  font-size: 32px;
  margin-bottom: 20px;
}

.project-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
}

.project-card {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  background-color: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-card:hover img {
  transform: scale(1.05);
}

.project-info {
  padding: 20px;
  text-align: left;
}

.project-info h3 {
  margin-top: 0;
}
```

### Experience section

```html
<section id="experience">
  <h2>EXPERIENCE</h2>
  <div class="experience-item">
    <div>
      <h3>
        <img src="./assests/search.png" alt="Google Logo" /> Senior Software
        Engineer
      </h3>
      <p>
        As a Senior Software Engineer at Google, I played a pivotal role in
        developing innovative solutions for Google's core search algorithms.
        Collaborating with a dynamic team of engineers, I contributed to the
        enhancement of search accuracy and efficiency, optimizing user
        experiences for millions of users worldwide.
      </p>
      <p>June 2024 - Sept 2024</p>
    </div>
  </div>
</section>
```

```css
#experience {
  text-align: left;
}

#experience h2 {
  color: #61dafb;
  margin-bottom: 20px;
  text-align: center;
}

.experience-item {
  background-color: #2a2a2a;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  text-align: left;
}

.experience-item h3 {
  display: flex;
  align-items: center;
  gap: 10px;
}

.experience-item h3 img {
  width: 30px;
  height: 30px;
}
```

### media queries

```css
@media (max-width: 768px) {
  .container {
    padding: 0;
  }

  nav {
    display: flex;
    border: none;
    flex-wrap: wrap;
    border-radius: 0;
    box-shadow: 2px 2px 10px rgba(255, 170, 131, 0.1);
    margin-top: 0;
    top: 0;
    justify-content: center;
  }

  .logo {
    font-size: 20px;
  }

  #hero h1 {
    font-size: 36px;
  }

  #hero p {
    font-size: 16px;
    margin: auto 2rem;
  }

  .cta-buttons {
    display: flex;
    gap: 10px;
  }

  .project-card {
    width: 90%;
  }

  .experience-item {
    flex-direction: column;
    text-align: left;
    margin: auto 1rem;
  }
}

@media (max-width: 480px) {
  #hero h1 {
    font-size: 28px;
  }

  #hero p {
    font-size: 14px;
  }

  .cta-buttons {
    display: flex;
    flex-wrap: wrap;
  }

  .cta-buttons button {
    padding: 8px 16px;
    width: fit-content;
  }
}
```

### scripts tags in html

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
  integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
  integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
<script src="script.js" defer></script>
```

### JS Code

```js
const home = document.getElementById("home");
home.classList.add("active");
function changeColor(button) {
  // Remove 'active' class from all buttons
  const buttons = document.querySelectorAll("nav a");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Add 'active' class to the clicked button
  button.classList.add("active");
}

gsap.from(".hero img", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.5,
});

gsap.from(".cta-buttons button", {
  opacity: 0,
  y: 60,
  stagger: 0.1,
  duration: 1,
  delay: 0.3,
});

gsap.from(".hero h1", {
  opacity: 0,
  y: 60,
  delay: 0.3,
  duration: 1,
});

gsap.from("#about", {
  opacity: 0,
  y: 60,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 70%",
  },
});

gsap.from(".experience-icons ", {
  opacity: 0,
  y: 60,
  duration: 1,
  delay: 0.3,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".experience-icons",
    scroller: "body",
    start: "top 70%",
  },
});

gsap.from(".experience-icons div span", {
  opacity: 0,
  y: 60,
  duration: 1,
  delay: 0.3,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".experience-icons",
    scroller: "body",
    start: "top 70%",
  },
});

gsap.from("#project-title", {
  opacity: 0,
  y: 60,
  duration: 0.4,
  delay: 0.1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#project-title",
    scroller: "body",
    start: "top 70%",
  },
});

gsap.from(".project-card", {
  opacity: 0,
  y: 60,
  duration: 0.4,
  delay: 0.1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".project-card",
    scroller: "body",
    start: "top 70%",
  },
});
```
