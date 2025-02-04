
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});



//  JavaScript for Seed Growth & Dynamic Percentage 
  function toggleDescription(projectId) {
    const description = document.getElementById(projectId);
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
}

function openProjectPage() {
    window.location.href = 'project_page.html'; // Replace with your project page URL
}


function growSeed(element, level) {
  let percentageElement = element.nextElementSibling;

  // Seed Growth Stages
  let growthStages = {
      0: "🌰",
      35: "🌰🌱",
      50: "🌰🌱🌿",
      80: "🌰🌱🌿🌾",
      100: "🌰🌱🌿🌾🌳"
  };

  // Check if the seed is already grown
  if (element.textContent !== "🌰") {
      // Reset seed to initial stage
      element.textContent = "🌰";
      percentageElement.classList.remove("visible");
      percentageElement.textContent = "0%";
      element.classList.remove("rolling");
      element.classList.add("blink-first");
      return;
  }

  // Find nearest growth stage based on progress level
  let stageKeys = Object.keys(growthStages).map(Number);
  let currentStage = stageKeys.reduce((prev, curr) => (level >= curr ? curr : prev), 0);

  // Remove blink effect when clicked
  element.classList.remove("blink-first");

  // Rolling effect before growth
  element.classList.add("rolling");
  setTimeout(() => element.classList.remove("rolling"), 800);

  // Update seed icon with animation delay
  setTimeout(() => {
      element.textContent = growthStages[currentStage];
  }, 800);

  // Show percentage when seed is clicked
  percentageElement.classList.add("visible");

  // Smoothly animate the percentage increase
  let currentPercentage = parseInt(percentageElement.textContent);
  let increment = level > currentPercentage ? 1 : -1;

  let percentageInterval = setInterval(() => {
      currentPercentage += increment;
      percentageElement.textContent = currentPercentage + "%";

      if (currentPercentage === level) {
          clearInterval(percentageInterval);
      }
  }, 10);

  // Animate the percentage update
  percentageElement.classList.add("animate");
  setTimeout(() => percentageElement.classList.remove("animate"), 800);
}

// First seed blinks, then shows all seeds after 2 seconds
setTimeout(() => {
  document.querySelectorAll(".seed.hidden").forEach(seed => {
      seed.classList.remove("hidden");
  });

  document.querySelector(".seed.blink-first").classList.remove("blink-first");
}, 2000);



// project//


const projects = [
  { 
      url: "https://rhythmix-music.netlify.app/", 
      description: "Rhythmix is a web-based music app where users can explore, play, and like songs based on their mood." 
  },
  { 
      url: "./pages/cssproject/index.html", 
      description: " A simple cinema booking website that displays currently showing movies with descriptions and images. Users can browse available films and book tickets seamlessly. The site includes sections like About Us, Now Showing, and Contact Us, making it user-friendly and informative." 
  },
  { 
      url: "./pages/javascriptProject.html", 
      description: "An interactive image slider showcasing adventure-themed quotes to inspire young minds. Each slide features a stunning background image with motivational quotes about exploration, risk-taking, and discovery." 
  },
  { 
      url: "./pages/3DProject/index.html", 
      description: " A JavaScript-powered image slider showcasing adventure-themed images with smooth transitions and navigation buttons." 
  }
];

function changeProject(index) {
  document.getElementById('projectFrame').src = projects[index].url;
  document.getElementById('projectDescription').innerText = projects[index].description;
}

