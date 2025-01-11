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

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

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
    if (!skillsContainer) return; // Ensure skillsContainer exists

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




// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
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
      htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;
      if (htmlStartValue === htmlEndValue) clearInterval(progressHtml);
    }, htmlSpeed);
  
    // CSS progress
    let cssProgress = document.querySelector(".css"),
      cssValue = document.querySelector(".css-progress");
    let cssStartValue = 0, cssEndValue = 90, cssSpeed = 30;
  
    let progressCss = setInterval(() => {
      cssStartValue++;
      cssValue.textContent = `${cssStartValue}%`;
      cssProgress.style.background = `conic-gradient(#fca61f ${cssStartValue * 3.6}deg, #ededed 0deg)`;
      if (cssStartValue === cssEndValue) clearInterval(progressCss);
    }, cssSpeed);
  
    // JavaScript progress
    let javascriptProgress = document.querySelector(".javascript"),
      javascriptValue = document.querySelector(".javascript-progress");
    let javascriptStartValue = 0, javascriptEndValue = 40, jsSpeed = 30;
  
    let progressJs = setInterval(() => {
      javascriptStartValue++;
      javascriptValue.textContent = `${javascriptStartValue}%`;
      javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;
      if (javascriptStartValue === javascriptEndValue) clearInterval(progressJs);
    }, jsSpeed);
  
    // PHP progress
    let phpProgress = document.querySelector(".php"),
      phpValue = document.querySelector(".php-progress");
    let phpStartValue = 0, phpEndValue = 30, phpSpeed = 30;
  
    let progressPhp = setInterval(() => {
      phpStartValue++;
      phpValue.textContent = `${phpStartValue}%`;
      phpProgress.style.background = `conic-gradient(#20c997 ${phpStartValue * 3.6}deg, #ededed 0deg)`;
      if (phpStartValue === phpEndValue) clearInterval(progressPhp);
    }, phpSpeed);
  
    // Python progress
    let pythonProgress = document.querySelector(".python"),
      pythonValue = document.querySelector(".python-progress");
    let pythonStartValue = 0, pythonEndValue = 50, pythonSpeed = 30;
  
    let progressPython = setInterval(() => {
      pythonStartValue++;
      pythonValue.textContent = `${pythonStartValue}%`;
      pythonProgress.style.background = `conic-gradient(#306998 ${pythonStartValue * 3.6}deg, #ededed 0deg)`;
      if (pythonStartValue === pythonEndValue) clearInterval(progressPython);
    }, pythonSpeed);
  
    // Java progress
    let javaProgress = document.querySelector(".java"),
      javaValue = document.querySelector(".java-progress");
    let javaStartValue = 0, javaEndValue = 50, javaSpeed = 30;
  
    let progressJava = setInterval(() => {
      javaStartValue++;
      javaValue.textContent = `${javaStartValue}%`;
      javaProgress.style.background = `conic-gradient(#b07219 ${javaStartValue * 3.6}deg, #ededed 0deg)`;
      if (javaStartValue === javaEndValue) clearInterval(progressJava);
    }, javaSpeed);
  
    // C++ progress
    let cppProgress = document.querySelector(".cpp"),
      cppValue = document.querySelector(".cpp-progress");
    let cppStartValue = 0, cppEndValue = 50, cppSpeed = 30;
  
    let progressCpp = setInterval(() => {
      cppStartValue++;
      cppValue.textContent = `${cppStartValue}%`;
      cppProgress.style.background = `conic-gradient(#00599c ${cppStartValue * 3.6}deg, #ededed 0deg)`;
      if (cppStartValue === cppEndValue) clearInterval(progressCpp);
    }, cppSpeed);
  
    // MySQL progress
    let mysqlProgress = document.querySelector(".mysql"),
      mysqlValue = document.querySelector(".mysql-progress");
    let mysqlStartValue = 0, mysqlEndValue = 80, mysqlSpeed = 30;
  
    let progressMysql = setInterval(() => {
      mysqlStartValue++;
      mysqlValue.textContent = `${mysqlStartValue}%`;
      mysqlProgress.style.background = `conic-gradient(#00758f ${mysqlStartValue * 3.6}deg, #ededed 0deg)`;
      if (mysqlStartValue === mysqlEndValue) clearInterval(progressMysql);
    }, mysqlSpeed);
  }
  
  // Intersection Observer to detect when the skills section is visible
  let skillsSection = document.querySelector(".skills");
  
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startProgressBars(); // Start animating progress bars
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );
  
  // Observe the skills section
  observer.observe(skillsSection);
  