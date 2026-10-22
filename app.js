const courses = [
  {code:'MBA',name:'Master of Business Administration',category:'postgraduate',duration:'2 years',field:'Business & management',href:'https://iiseindia.com/post-graduation.html'},
  {code:'MCA',name:'Master of Computer Applications',category:'postgraduate',duration:'2 years',field:'Computing & technology',href:'https://iiseindia.com/mcal.html'},
  {code:'BBA',name:'Bachelor of Business Administration',category:'undergraduate',duration:'3 years*',field:'Business & management',href:'https://iiseindia.com/bba.html'},
  {code:'BCA',name:'Bachelor of Computer Applications',category:'undergraduate',duration:'3 years*',field:'Computing & technology',href:'https://iiseindia.com/bca.html'},
  {code:'BJMC',name:'Bachelor of Journalism & Mass Communication',category:'undergraduate',duration:'3 years*',field:'Media & communication',href:'https://iiseindia.com/bjmc.html'},
  {code:'B.Com',name:'Bachelor of Commerce',category:'undergraduate',duration:'3 years*',field:'Commerce',href:'https://iiseindia.com/bcom.html'}
];
const grid=document.querySelector('#course-grid');
function drawCourses(){
  const filter=document.querySelector('.filter.active')?.dataset.filter||'all';
  const query=document.querySelector('#course-search').value.trim().toLowerCase();
  const matches=courses.filter(c=>(filter==='all'||c.category===filter)&&`${c.code} ${c.name} ${c.field}`.toLowerCase().includes(query));
  grid.innerHTML=matches.map(c=>`<a class="course-card" href="${c.href}" target="_blank" rel="noreferrer"><span class="course-code">${c.code}</span><span class="course-arrow" aria-hidden="true">↗</span><h3>${c.name}</h3><p>${c.field}</p><div class="course-meta"><span>${c.category==='postgraduate'?'Postgraduate':'Undergraduate'}</span><span>${c.duration}</span></div></a>`).join('');
  document.querySelector('#no-results').hidden=matches.length>0;
}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');button.classList.add('active');drawCourses()}));
document.querySelector('#course-search').addEventListener('input',drawCourses);
drawCourses();
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');nav.classList.remove('open')}));
const form=document.querySelector('#enquiry-form');
form.addEventListener('submit',event=>{
  event.preventDefault();
  const feedback=document.querySelector('#form-feedback');
  if(!form.reportValidity()){feedback.textContent='Please check the required fields and enter a valid phone number and email.';feedback.style.color='#a33636';return}
  const data=new FormData(form);const subject=encodeURIComponent(`Admissions enquiry${data.get('course')?` — ${data.get('course')}`:''}`);
  const body=encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nCourse of interest: ${data.get('course')||'Not specified'}\n\nMessage:\n${data.get('message')||'No additional message.'}`);
  feedback.textContent='Your email app is opening with your enquiry. Please send the prepared message to complete your request.';feedback.style.color='#135b37';
  window.location.href=`mailto:info@iiseindia.com?subject=${subject}&body=${body}`;
});
