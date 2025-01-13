function openNav() {
    document.getElementById("mySidenav").classList.add("open");
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("open");
}



$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

});



// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Full Stack Developer", "UI/UX Designer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->



function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return; 

    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}




/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});



/* SCROLL HOME */// Content animations coming from the left
srtop.reveal('.home .content h2', { origin: 'left', delay: 400 });
srtop.reveal('.home .content p', { origin: 'left', delay: 300 });
srtop.reveal('.home .content .btn', { origin: 'left', delay: 400 });

// Image animation coming from the right
srtop.reveal('.home .image', { origin: 'right', delay: 1000, duration: 2000 }); 

// Social media links animations coming from the bottom for uniformity
srtop.reveal('.home .linkedin', { origin: 'bottom', interval: 200 });
srtop.reveal('.home .github', { origin: 'bottom', interval: 300 });
srtop.reveal('.home .twitter', { origin: 'bottom', interval: 400 });
srtop.reveal('.home .instagram', { origin: 'bottom', interval: 500 });
srtop.reveal('.home .facebook', { origin: 'bottom', interval: 600 });


/* SCROLL ABOUT */
srtop.reveal('.about .heading', { delay: 200 });
srtop.reveal('.about-container .image', { origin: 'left', delay: 1000, duration: 2000 }); 
srtop.reveal('.about .content h2', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .heading', { delay: 200 });
srtop.reveal('.skills .sub-heading', {origin: 'left', delay: 200 });
srtop.reveal('.skills .bar-sub-heading', {origin: 'right', delay: 200 });


/* SCROLL CONTACT */
srtop.reveal('.contact .heading', { delay: 200 });
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

/* SCROLL PROJECT */
srtop.reveal('.projects-container .heading ', { delay: 200 });
srtop.reveal('.project-tab .tab-btn', { origin: 'right', delay: 400 });
srtop.reveal('.project-item', { origin: 'left', delay: 400 });

/*  SCROLL FOOTER */
srtop.reveal('.footer .box ', { delay: 200 });
srtop.reveal('.footer .box .share a', { origin: 'right', delay: 400 });


document.addEventListener("DOMContentLoaded", () => {

});


// Function to animate progress bars
function startProgressBars() {
    // HTML progress
    let htmlProgress = document.querySelector(".html"),
      htmlValue = document.querySelector(".html-progress");
    let htmlStartValue = 0, htmlEndValue = 90, htmlSpeed = 30;
  
    let progressHtml = setInterval(() => {
      htmlStartValue++;
      htmlValue.textContent = `${htmlStartValue}%`;
      htmlProgress.style.background = `conic-gradient(#2EB2D3 ${htmlStartValue * 3.6}deg, #ededed 0deg)`;
      if (htmlStartValue === htmlEndValue) clearInterval(progressHtml);
    }, htmlSpeed);
  
    // CSS progress
    let cssProgress = document.querySelector(".css"),
      cssValue = document.querySelector(".css-progress");
    let cssStartValue = 0, cssEndValue = 90, cssSpeed = 30;
  
    let progressCss = setInterval(() => {
      cssStartValue++;
      cssValue.textContent = `${cssStartValue}%`;
      cssProgress.style.background = `conic-gradient(#2EB2D3 ${cssStartValue * 3.6}deg, #ededed 0deg)`;
      if (cssStartValue === cssEndValue) clearInterval(progressCss);
    }, cssSpeed);
  
    // JavaScript progress
    let javascriptProgress = document.querySelector(".javascript"),
      javascriptValue = document.querySelector(".javascript-progress");
    let javascriptStartValue = 0, javascriptEndValue = 40, jsSpeed = 30;
  
    let progressJs = setInterval(() => {
      javascriptStartValue++;
      javascriptValue.textContent = `${javascriptStartValue}%`;
      javascriptProgress.style.background = `conic-gradient(#2EB2D3 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;
      if (javascriptStartValue === javascriptEndValue) clearInterval(progressJs);
    }, jsSpeed);
  
    // PHP progress
    let phpProgress = document.querySelector(".php"),
      phpValue = document.querySelector(".php-progress");
    let phpStartValue = 0, phpEndValue = 30, phpSpeed = 30;
  
    let progressPhp = setInterval(() => {
      phpStartValue++;
      phpValue.textContent = `${phpStartValue}%`;
      phpProgress.style.background = `conic-gradient(#2EB2D3 ${phpStartValue * 3.6}deg, #ededed 0deg)`;
      if (phpStartValue === phpEndValue) clearInterval(progressPhp);
    }, phpSpeed);
  
    // Python progress
    let pythonProgress = document.querySelector(".python"),
      pythonValue = document.querySelector(".python-progress");
    let pythonStartValue = 0, pythonEndValue = 50, pythonSpeed = 30;
  
    let progressPython = setInterval(() => {
      pythonStartValue++;
      pythonValue.textContent = `${pythonStartValue}%`;
      pythonProgress.style.background = `conic-gradient(#2EB2D3 ${pythonStartValue * 3.6}deg, #ededed 0deg)`;
      if (pythonStartValue === pythonEndValue) clearInterval(progressPython);
    }, pythonSpeed);
  
    // Java progress
    let javaProgress = document.querySelector(".java"),
      javaValue = document.querySelector(".java-progress");
    let javaStartValue = 0, javaEndValue = 50, javaSpeed = 30;
  
    let progressJava = setInterval(() => {
      javaStartValue++;
      javaValue.textContent = `${javaStartValue}%`;
      javaProgress.style.background = `conic-gradient(#2EB2D3 ${javaStartValue * 3.6}deg, #ededed 0deg)`;
      if (javaStartValue === javaEndValue) clearInterval(progressJava);
    }, javaSpeed);
  
    // C++ progress
    let cppProgress = document.querySelector(".cpp"),
      cppValue = document.querySelector(".cpp-progress");
    let cppStartValue = 0, cppEndValue = 50, cppSpeed = 30;
  
    let progressCpp = setInterval(() => {
      cppStartValue++;
      cppValue.textContent = `${cppStartValue}%`;
      cppProgress.style.background = `conic-gradient(#2EB2D3 ${cppStartValue * 3.6}deg, #ededed 0deg)`;
      if (cppStartValue === cppEndValue) clearInterval(progressCpp);
    }, cppSpeed);
  
    // MySQL progress
    let mysqlProgress = document.querySelector(".mysql"),
      mysqlValue = document.querySelector(".mysql-progress");
    let mysqlStartValue = 0, mysqlEndValue = 80, mysqlSpeed = 30;
  
    let progressMysql = setInterval(() => {
      mysqlStartValue++;
      mysqlValue.textContent = `${mysqlStartValue}%`;
      mysqlProgress.style.background = `conic-gradient(#2EB2D3 ${mysqlStartValue * 3.6}deg, #ededed 0deg)`;
      if (mysqlStartValue === mysqlEndValue) clearInterval(progressMysql);
    }, mysqlSpeed);
  }
  
  let skillsSection = document.querySelector(".skills");
  
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startProgressBars(); 
        }
      });
    },
    { threshold: 0.5 } 
  );
  
  observer.observe(skillsSection);
  
  
function startProfessionalProgressBars() {
  const skills = [
    { selector: ".teamwork-progress", endValue: 90 },
    { selector: ".timemgt-progress", endValue: 80 },
    { selector: ".communication-progress", endValue: 90 },
    { selector: ".adaptability-progress", endValue: 75 },
  ];

  skills.forEach((skill) => {
    const progressValue = document.querySelector(skill.selector);
    const progressBar = progressValue.parentElement;

    let startValue = 0;
    const speed = 30;

    const progress = setInterval(() => {
      startValue++;
      progressValue.textContent = `${startValue}%`;
      progressBar.style.setProperty("--progress-width", `${startValue}%`);
      progressBar.style.background = `linear-gradient(90deg,#2EB2D3 ${startValue}%, #e0e0e0 ${startValue}%)`;
      if (startValue === skill.endValue) clearInterval(progress);
    }, speed);
  });
}

const professionalSkillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startProfessionalProgressBars();
      }
    });
  },
  { threshold: 0.5 } 
);

const professionalSkillsSection = document.querySelector(".progress-bar-section");
professionalSkillsObserver.observe(professionalSkillsSection);




document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const projectItems = document.querySelectorAll(".project-item");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active-tab"));

      button.classList.add("active-tab");

      const targetCategory = button.dataset.target;

      projectItems.forEach((item) => {
        if (targetCategory === "#all" || item.dataset.filterItemCategory === targetCategory.substring(1)) {
          item.style.display = "flex"; 
        } else {
          item.style.display = "none"; 
        }
      });
    });
  });

  tabButtons[0].click();
});





