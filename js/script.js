// Simple fade animation on scroll

const cards = document.querySelectorAll('.card, .course-card, .feature');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

cards.forEach(card=>{
  card.classList.add('hidden');
  observer.observe(card);
});



function openModal(course){
  const modal = document.getElementById("courseModal");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalBody");

  modal.style.display = "flex";

  const data = getCourseData(course);

  title.innerText = data.title;
  body.innerHTML = data.content;
}

function closeModal(){
  document.getElementById("courseModal").style.display = "none";
}

window.onclick = function(event){
  const modal = document.getElementById("courseModal");
  if(event.target === modal){
    modal.style.display = "none";
  }
}

function getCourseData(course){

  const courses = {
cpp: {
  title: "C++ Programming",
  fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 5,500 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Programming fundamentals</li>
      <li>Variables, loops, conditions</li>
      <li>Functions and arrays</li>
      <li>Problem solving techniques</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Strong foundation for Computer Science</li>
      <li>Improves logic building</li>
      <li>Prepares for university programming</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Beginners in programming</li>
      <li>Students of ICS / CS / Engineering</li>
      <li>Anyone starting computer science journey</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to write basic programs and solve logical problems confidently.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Experienced Computer Science instructor specializing in foundational programming.</p>
  `
},
java: {
  title: "Java Programming",
 fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,500 / month</p>
      <p><b>Duration:</b> 2.5 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>OOP concepts (classes & objects)</li>
      <li>Core Java syntax</li>
      <li>Inheritance & polymorphism</li>
      <li>Basic application development</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Strong software development foundation</li>
      <li>Prepares for Android development</li>
      <li>Industry-relevant programming skills</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students interested in software engineering</li>
      <li>Beginners with basic programming knowledge</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will understand object-oriented programming and build small applications.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Software development trainer with experience in OOP-based systems.</p>
  `
},

python: {
  title: "Python Programming",
  fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Python basics & syntax</li>
      <li>Logic building & problem solving</li>
      <li>File handling</li>
      <li>Mini projects & automation</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Freelancing opportunities</li>
      <li>AI & automation foundation</li>
      <li>Beginner-friendly high demand skill</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Beginners with no programming background</li>
      <li>Students interested in AI / data / automation</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to build small automation tools and solve real-world problems.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Python & automation specialist with freelancing experience.</p>
  `
},
frontend: {
  title: "Frontend Web Development",
  fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 7,000 / month</p>
      <p><b>Duration:</b> 2.5 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>HTML structure</li>
      <li>CSS styling & responsive design</li>
      <li>JavaScript basics</li>
      <li>Website projects</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Freelancing in web design</li>
      <li>Portfolio building</li>
      <li>High-demand digital skill</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Creative students</li>
      <li>Beginners in web development</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to design and build responsive websites.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Front-end developer with UI/UX and freelancing experience.</p>
  `
},
php: {
   fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,500 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>PHP basics</li>
      <li>Form handling</li>
      <li>MySQL integration</li>
      <li>Dynamic websites</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Backend development skills</li>
      <li>Freelancing opportunities</li>
      <li>Database-driven websites</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Frontend learners moving to backend</li>
      <li>Students interested in full web development</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to build dynamic websites with databases.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Backend developer with experience in PHP/MySQL systems.</p>
  `
},
aspnet: {
  title: "ASP.NET Development",
  fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 7,500 / month</p>
      <p><b>Duration:</b> 3 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>C# fundamentals</li>
      <li>ASP.NET web applications</li>
      <li>MVC architecture</li>
      <li>Database integration</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Enterprise-level development skills</li>
      <li>Job opportunities in software houses</li>
      <li>Structured backend systems knowledge</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students aiming for software engineering careers</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will build structured enterprise web applications.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>.NET developer with enterprise application experience.</p>
  `
}, 
fullstack: {
  title: "Full Stack Web Development",
  fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 10,000 / month</p>
      <p><b>Duration:</b> 4 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Frontend + Backend</li>
      <li>Databases</li>
      <li>API basics</li>
      <li>Complete project development</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>High-income freelancing skill</li>
      <li>Job-ready development ability</li>
      <li>End-to-end project creation</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Serious students aiming for software careers</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will independently build complete web applications.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Full-stack developer with industry and freelancing experience.</p>
  `
},



english: {
  title: "Spoken English",
 fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 5,000 / month</p>
      <p><b>Duration:</b> 2.5 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Basic grammar and sentence formation</li>
      <li>Daily spoken conversation practice</li>
      <li>Vocabulary building</li>
      <li>Confidence building exercises</li>
      <li>Listening and comprehension skills</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Improved communication skills</li>
      <li>Confidence in speaking English</li>
      <li>Useful for interviews and jobs</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Beginners with weak English speaking skills</li>
      <li>Students and job seekers</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to speak basic to intermediate English confidently in daily life situations.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Experienced spoken English trainer focused on practical communication skills.</p>
  `
},
spanish: {
  title: "Spanish Language Course",
  fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> 3 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Basic Spanish grammar</li>
      <li>Vocabulary and sentence structure</li>
      <li>Daily conversation practice</li>
      <li>Listening and speaking exercises</li>
      <li>Common phrases for communication</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>International communication skill</li>
      <li>Useful for travel and online work</li>
      <li>High demand global language</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students interested in foreign languages</li>
      <li>People planning international opportunities</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to understand and use basic Spanish in conversations.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Foreign language instructor with Spanish communication training experience.</p>
  `
},
turkish: {
  title: "Turkish Language Course",
  fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 5,500 / month</p>
      <p><b>Duration:</b> 2.5 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Basic Turkish grammar</li>
      <li>Pronunciation and vocabulary</li>
      <li>Daily conversation practice</li>
      <li>Listening comprehension</li>
      <li>Common expressions</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Useful for travel and tourism</li>
      <li>Opportunities in Turkey-related business</li>
      <li>Growing international language demand</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students interested in Turkey</li>
      <li>People planning abroad opportunities</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to understand and communicate basic Turkish expressions.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Trained Turkish language instructor with conversational expertise.</p>
  `
},
french: {
  title: "French Language Course",
  fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> 3 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>French grammar basics</li>
      <li>Vocabulary building</li>
      <li>Speaking practice</li>
      <li>Listening comprehension</li>
      <li>Everyday conversation skills</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>International career advantage</li>
      <li>Useful for Europe-based opportunities</li>
      <li>Strong global language skill</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students aiming for abroad studies/jobs</li>
      <li>Language enthusiasts</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to communicate in basic French conversations.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Certified French language instructor with beginner-level training expertise.</p>
  `
},
german: {
  title: "German Language Course",
 fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> 3 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>German grammar basics</li>
      <li>Sentence structure</li>
      <li>Vocabulary building</li>
      <li>Speaking practice</li>
      <li>Listening exercises</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Opportunities in Europe</li>
      <li>Study and work abroad pathway</li>
      <li>Strong international career value</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students planning to go abroad</li>
      <li>Career-focused individuals</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will understand and use basic German communication.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>German language instructor with beginner-to-intermediate teaching experience.</p>
  `
},
korean: {
  title: "Korean Language Course",
 fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,500 / month</p>
      <p><b>Duration:</b> 3 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Korean alphabet (Hangul)</li>
      <li>Basic grammar and sentence structure</li>
      <li>Vocabulary building</li>
      <li>Speaking and listening practice</li>
      <li>Daily conversation skills</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>High demand due to Korean culture/global industry</li>
      <li>Useful for jobs and cultural exchange</li>
      <li>Strong international language skill</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>K-pop / Korean culture interested students</li>
      <li>Students planning abroad opportunities</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to understand and speak basic Korean in daily life situations.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Korean language instructor with beginner-level teaching experience.</p>
  `
},
chinese: {
  title: "Chinese Language Course",
  fee: "PKR 20,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> 3 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Introduction to pronunciation </li>
      <li>Basic vocabulary and sentence formation</li>
      <li>Reading and writing Chinese characters (</li>
      <li>Daily conversation practice</li>
      <li>Listening comprehension exercises</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>High-demand international language skill</li>
      <li>Useful for business, trade, and global communication</li>
      <li>Strong advantage in future job markets</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students interested in global career opportunities</li>
      <li>Individuals planning to work with Chinese companies</li>
      <li>Language enthusiasts exploring Asian languages</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to understand and use basic Mandarin for everyday communication.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Trained Mandarin language instructor with focus on pronunciation, writing, and conversational fluency.</p>
  `
},
crochet: {
  title: "Crochet Art Course",
   fee: "PKR 10,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 4,000 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Basic crochet stitches</li>
      <li>Pattern reading</li>
      <li>Small handmade items (flowers, keychains)</li>
      <li>Clothing and decorative items</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Home-based earning opportunity</li>
      <li>Creative skill development</li>
      <li>Handmade product business potential</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Beginners in crafting</li>
      <li>Women interested in home income</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to create and sell handmade crochet items.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Experienced handicraft instructor specializing in crochet designs.</p>
  `
},
knitting: {
  title: "Knitting Course",
  fee: "PKR 10,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 4,000 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Knitting basics and tools usage</li>
      <li>Stitch patterns</li>
      <li>Scarves, caps, and small garments</li>
      <li>Design variations</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Useful home-based skill</li>
      <li>Small business opportunity</li>
      <li>Creative relaxation activity</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Beginners in handicrafts</li>
      <li>Women interested in creative skills</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to create wearable knitted items independently.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Skilled knitting instructor with practical design experience.</p>
  `
},
stitching: {
  title: "Dress Making & Stitching",
  fee: "PKR 10,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 5,000 / month</p>
      <p><b>Duration:</b> 3 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Basic stitching techniques</li>
      <li>Pattern cutting and measurement</li>
      <li>Shalwar kameez stitching</li>
      <li>Fabric handling</li>
      <li>Design customization</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>High-demand local skill</li>
      <li>Home-based earning potential</li>
      <li>Small boutique business opportunity</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Beginners in tailoring</li>
      <li>Women aiming for home income</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to stitch and design clothes professionally.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Professional tailoring instructor with dress designing experience.</p>
  `
},
mehndi: {
  title: "Mehndi & Henna Art Course",
  fee: "PKR 10,000",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 3,500 / month</p>
      <p><b>Duration:</b> 1.5 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Basic mehndi designs</li>
      <li>Floral and bridal patterns</li>
      <li>Hand and foot designs</li>
      <li>Speed practice techniques</li>
      <li>Client handling basics</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>High demand for events & weddings</li>
      <li>Quick income generation skill</li>
      <li>Freelance and home business opportunity</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Creative beginners</li>
      <li>Students looking for quick earning skills</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to create professional mehndi designs for events and clients.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Experienced mehndi artist specializing in bridal and event designs.</p>
  `
},
mdcat: {
  title: "MDCAT Preparation",
  fee: "PKR 15,000 / month",
  duration: "3 months",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 8,000 / month</p>
      <p><b>Duration:</b> 4 months</p>
      <p><b>Classes/Week:</b> 5</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Biology, Chemistry, Physics revision</li>
      <li>MCQ solving techniques</li>
      <li>Past paper practice</li>
      <li>Time management strategies</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Admission in medical colleges</li>
      <li>Strong exam preparation system</li>
      <li>Structured testing practice</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>FSc Pre-Medical students</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be fully prepared for MDCAT with exam strategy and conceptual clarity.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Experienced medical entry test instructors.</p>
  `
},
ecat: {
  title: "ECAT Preparation",
  fee: "PKR 15,000 / month",
  duration: "3 months",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 8,000 / month</p>
      <p><b>Duration:</b> 4 months</p>
      <p><b>Classes/Week:</b> 5</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Mathematics, Physics, Chemistry</li>
      <li>Problem solving techniques</li>
      <li>Speed MCQ practice</li>
      <li>Entry test simulations</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Engineering university admissions</li>
      <li>Improved analytical thinking</li>
      <li>Exam readiness under time pressure</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>FSc Pre-Engineering students</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will develop speed, accuracy, and conceptual strength for ECAT.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Engineering test preparation specialists.</p>
  `
},
natgat: {
  title: "NAT / GAT Preparation",
  fee: "PKR 10,000 ",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 4</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Analytical reasoning</li>
      <li>English comprehension</li>
      <li>Quantitative reasoning</li>
      <li>Practice tests</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>University admissions test preparation</li>
      <li>Improved IQ-based reasoning</li>
      <li>Fast exam readiness</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>University admission seekers</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be prepared to pass NAT/GAT with strong reasoning skills.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Test preparation and aptitude trainers.</p>
  `
},
ielts: {
  title: "IELTS / TOEFL / GRE Preparation",
  fee: "PKR 30,000 / month",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 10,000 / month</p>
      <p><b>Duration:</b> 3 months</p>
      <p><b>Classes/Week:</b> 4</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Reading, writing, listening, speaking</li>
      <li>Essay writing techniques</li>
      <li>Mock tests</li>
      <li>Vocabulary enhancement</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Study abroad opportunities</li>
      <li>Visa and immigration preparation</li>
      <li>International English certification readiness</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students planning to go abroad</li>
      <li>Immigration applicants</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will achieve target scores in international English proficiency exams.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Certified IELTS and English proficiency trainers.</p>
  `
},
css: {
  title: "CSS / PMS Preparation",
  fee: "PKR 25,000 / month",
  duration: "6 months",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 12,000 / month</p>
      <p><b>Duration:</b> 6 months</p>
      <p><b>Classes/Week:</b> 5</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Current affairs</li>
      <li>Pakistan studies</li>
      <li>Essay writing</li>
      <li>General knowledge</li>
      <li>Interview preparation</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Government job preparation</li>
      <li>High-level analytical skills</li>
      <li>Career in civil services</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Graduates aiming for civil services</li>
      <li>Serious competitive exam candidates</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will develop the knowledge and skills required for CSS/PMS exams and interviews.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Experienced civil service exam mentors and subject specialists.</p>
  `
},
basiccomputer: {
  title: "Basic Computer Proficiency",
  fee: "PKR 5,000 ",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 4,000 / month</p>
      <p><b>Duration:</b> 1.5 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Computer basics and file management</li>
      <li>Internet usage and email handling</li>
      <li>Typing skills</li>
      <li>Basic troubleshooting</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Essential digital literacy</li>
      <li>Office and job readiness</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Absolute beginners</li>
      <li>Students and office users</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will confidently use computers for daily and office tasks.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Basic IT instructor with hands-on training experience.</p>
  `
},
msoffice: {
  title: "MS Office (Word, Excel, PowerPoint)",
  fee: "PKR 10,000 ",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 5,000 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>MS Word document creation</li>
      <li>Excel formulas and sheets</li>
      <li>PowerPoint presentations</li>
      <li>Office productivity tools</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Office job requirement skill</li>
      <li>Professional document handling</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students and job seekers</li>
      <li>Office workers</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to create professional documents and spreadsheets.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Office software trainer with practical corporate experience.</p>
  `
},
freelancing: {
  title: "Freelancing Training",
  fee: "PKR 15,000 ",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Fiverr / Upwork introduction</li>
      <li>Profile creation</li>
      <li>Gig setup</li>
      <li>Client communication</li>
      <li>Basic earning strategies</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Online earning opportunity</li>
      <li>Independence from local jobs</li>
      <li>Global income access</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students and job seekers</li>
      <li>Anyone wanting online income</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to start earning online through freelancing platforms.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Experienced freelancer with real marketplace exposure.</p>
  `
},
graphicdesign: {
  title: "Graphic Designing",
  fee: "PKR 10,000 / month",
  duration: "2 months",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 7,000 / month</p>
      <p><b>Duration:</b> 3 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Design principles</li>
      <li>Logo and poster design</li>
      <li>Adobe Photoshop basics</li>
      <li>Brand identity creation</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Freelancing design work</li>
      <li>Creative career option</li>
      <li>High demand skill</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Creative students</li>
      <li>Future designers</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to create professional visual designs.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Professional graphic designer with freelancing experience.</p>
  `
},
canva: {
  title: "Designing with Canva",
  fee: "PKR 10,000 ",
  duration: "1 month",
  classes: "5/ week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 4,500 / month</p>
      <p><b>Duration:</b> 1.5 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Canva basics</li>
      <li>Social media posts design</li>
      <li>Templates and branding</li>
      <li>Fast content creation</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Quick freelancing skill</li>
      <li>Easy to learn design tool</li>
      <li>Social media job opportunities</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Beginners in design</li>
      <li>Social media users</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to create professional designs quickly using Canva.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Digital content designer specializing in Canva workflows.</p>
  `
},
socialmedia: {
  title: "Social Media Management",
  fee: "PKR 10,000 / month",
  duration: "2 months",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Facebook & Instagram management</li>
      <li>Content planning</li>
      <li>Engagement strategies</li>
      <li>Basic analytics</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Business page handling skills</li>
      <li>Freelance opportunities</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Social media users</li>
      <li>Marketing beginners</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to manage and grow social media pages.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Social media marketing specialist with real campaign experience.</p>
  `
},
digitalmarketing: {
  title: "Digital Marketing",
  fee: "PKR 15,000 / month",
  duration: "2 months",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 7,500 / month</p>
      <p><b>Duration:</b> 3 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Facebook & Google Ads basics</li>
      <li>SEO introduction</li>
      <li>Marketing strategies</li>
      <li>Campaign setup</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>High-income digital skill</li>
      <li>Business growth expertise</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Entrepreneurs</li>
      <li>Marketing students</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to run basic digital marketing campaigns.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Digital marketing practitioner with ad campaign experience.</p>
  `
},
videoediting: {
  title: "Video Editing",
  fee: "PKR 15,000 / month",
  duration: "2 months",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,500 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Basic editing tools</li>
      <li>Short video creation</li>
      <li>Transitions and effects</li>
      <li>Social media reels editing</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>High demand for content creation</li>
      <li>Freelancing opportunities</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Creative students</li>
      <li>Social media content creators</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to edit professional-quality videos for social media and clients.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Video editor with experience in content production and freelancing.</p>
  `
},
sql: {
  title: "SQL (Structured Query Language)",
  fee: "PKR 20,000 ",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Database fundamentals</li>
      <li>SELECT, INSERT, UPDATE, DELETE queries</li>
      <li>Joins and relationships</li>
      <li>Filtering and sorting data</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Core skill for all software development</li>
      <li>Used in every backend system</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Programming students</li>
      <li>Future backend developers</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to write SQL queries and manage structured data.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Database specialist with backend development experience.</p>
  `
},
mssql: {
  title: "MS SQL Server",
  fee: "PKR 15,000 ",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,500 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Database creation and management</li>
      <li>Advanced SQL queries</li>
      <li>Stored procedures</li>
      <li>Database security basics</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Enterprise-level database skill</li>
      <li>Used in corporate systems</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Advanced programming students</li>
      <li>Software engineering learners</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to manage professional database systems using MS SQL Server.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Database administrator with enterprise system experience.</p>
  `
},
mysql: {
  title: "MySQL Database Management",
  fee: "PKR 15,000 / month",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> 2 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>MySQL installation and setup</li>
      <li>Database design</li>
      <li>CRUD operations</li>
      <li>PHP + MySQL basics integration</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Widely used in web development</li>
      <li>Freelancing backend projects</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Web development students</li>
      <li>Backend beginners</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to build and manage database-driven websites.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Web backend developer with database integration expertise.</p>
  `
},
access: {
  title: "MS Access Database",
  fee: "PKR 10,000 / month",
  duration: "1 month",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 5,000 / month</p>
      <p><b>Duration:</b> 1.5 months</p>
      <p><b>Classes/Week:</b> 3</p>
    </div>

    <h4>📘 Course Content</h4>
    <ul>
      <li>Database creation</li>
      <li>Tables and relationships</li>
      <li>Forms and reports</li>
      <li>Basic data management</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Office data management skill</li>
      <li>Useful for small businesses</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Office workers</li>
      <li>Beginners in databases</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be able to manage small-scale databases efficiently.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Office systems and database instructor.</p>
  `
}, 
middle: {
  title: "Middle School Education (6th–8th)",
  fee: "PKR 1,000 / month for each subject",
  duration: "Academic Year Basis",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 4,000 / month</p>
      <p><b>Duration:</b> Academic Year</p>
      <p><b>Classes/Week:</b> 5</p>
    </div>

    <h4>📘 Subjects Covered</h4>
    <ul>
      <li>Mathematics</li>
      <li>English</li>
      <li>Science</li>
      <li>Urdu</li>
      <li>Social Studies</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Strong academic foundation</li>
      <li>Concept building from early stage</li>
      <li>Improved school performance</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Middle school students (6–8 grade)</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will develop strong conceptual understanding for higher classes.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Qualified school teachers with experience in foundational education.</p>
  `
}, 
matric: {
  title: "Matric  Preparation",
  fee: "PKR 2000 / month for each subject",
  duration: "Academic Year Basis",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 5,500 / month</p>
      <p><b>Duration:</b> Academic Year</p>
      <p><b>Classes/Week:</b> 5</p>
    </div>

    <h4>📘 Subjects Covered</h4>
    <ul>
      <li>Mathematics</li>
      <li>Physics</li>
      <li>Chemistry</li>
      <li>Biology / Computer Science</li>
      <li>English & Urdu</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Board exam preparation</li>
      <li>Concept-based learning</li>
      <li>Improved grades and performance</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Matric and O Level students</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be fully prepared for board exams with strong conceptual clarity.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Experienced subject specialists for board-level education.</p>
  `
},fscics: {
  title: "Intermediate Programs (F.A, F.Sc, I.Com, ICS)",
  fee: "PKR 3,000 / month for each subject",
  duration: "Academic Year Basis",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 6,000 / month</p>
      <p><b>Duration:</b> Academic Year</p>
      <p><b>Classes/Week:</b> 5</p>
    </div>

    <h4>📘 Subjects Covered</h4>

    <p><b>F.Sc (Pre-Medical / Pre-Engineering):</b></p>
    <ul>
      <li>Physics</li>
      <li>Chemistry</li>
      <li>Biology / Mathematics</li>
    </ul>

    <p><b>I.Com:</b></p>
    <ul>
      <li>Accounting</li>
      <li>Economics</li>
      <li>Business Mathematics</li>
    </ul>

    <p><b>ICS:</b></p>
    <ul>
      <li>Computer Science</li>
      <li>Mathematics / Statistics</li>
      <li>Programming basics</li>
    </ul>

    <p><b>F.A:</b></p>
    <ul>
      <li>Arts subjects</li>
      <li>Humanities</li>
      <li>Social sciences</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>Strong college-level education</li>
      <li>Preparation for university admissions</li>
      <li>Concept clarity for future careers</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Intermediate college students</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be fully prepared for board exams and university entry.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Experienced college-level subject experts.</p>
  `
},
alevel: {
  title: "A Level Preparation (Cambridge Curriculum)",
  fee: "PKR 10,000 / month for each subject",
  duration: "Academic Year Basis",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 8,000 / month</p>
      <p><b>Duration:</b> Academic Year</p>
      <p><b>Classes/Week:</b> 5</p>
    </div>

    <h4>📘 Subjects Covered</h4>
    <ul>
      <li>Mathematics</li>
      <li>Physics</li>
      <li>Chemistry</li>
      <li>Biology</li>
      <li>Business / Computer Science</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>International qualification preparation</li>
      <li>University abroad eligibility</li>
      <li>Advanced conceptual learning</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students aiming for international education</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will be prepared for Cambridge A Level examinations with strong conceptual grounding.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Qualified A-Level instructors with Cambridge teaching experience.</p>
  `
},
olevel: {
  title: "O Level Preparation (Cambridge Curriculum)",
  fee: "PKR 8,000 / month for each subject",
  duration: "Academic Year Basis",
  classes: "5 / week",

  content: `
    <div class="quick-info compact">
      <p><b>Fee:</b> PKR 7,500 / month</p>
      <p><b>Duration:</b> Academic Year</p>
      <p><b>Classes/Week:</b> 5</p>
    </div>

    <h4>📘 Subjects Covered</h4>
    <ul>
      <li>English Language & Literature</li>
      <li>Mathematics</li>
      <li>Physics</li>
      <li>Chemistry</li>
      <li>Biology / Computer Science</li>
    </ul>

    <h4>🚀 Benefits</h4>
    <ul>
      <li>International Cambridge qualification</li>
      <li>Strong foundation for A Level</li>
      <li>Concept-based learning approach</li>
      <li>Improved analytical thinking</li>
    </ul>

    <h4>👥 Who is this for?</h4>
    <ul>
      <li>Students aiming for Cambridge education system</li>
      <li>Students planning for A Levels or abroad studies</li>
    </ul>

    <h4>🎯 Outcome</h4>
    <p>Students will develop strong conceptual understanding aligned with Cambridge standards and be fully prepared for O Level examinations.</p>

    <h4>👨‍🏫 Faculty</h4>
    <p>Experienced Cambridge curriculum teachers with exam-focused training approach.</p>
  `
}





  };

  return courses[course];
}
