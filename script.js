$(document).ready(function(){

$('#menu').click(function(){
  $(this).toggleClass('fa-times');
  $('header').toggleClass('toggle');
});
 $(window).on('scroll load',function(){

 $('#menu').removeClass('fa-times');
  $('header').removeClass('toggle');
 });
//smooth scrolling 
 $('a[href*="#"]').on('click',function(e){
   
   e.preventDefault();

   $('html,body').animate({
     
     scrollTop : $($(this).attr('href')).offset().top,
   },
     500,
      'linear'
   );
 });
});


const skillsList = document.querySelector('.skills-list');
const skillDetails = document.querySelector('.skill-details');
const skillInfo = document.querySelectorAll('.skill-info');

skillsList.addEventListener('click', e => {
  const clickedSkill = e.target;
  const skillId = clickedSkill.textContent.toLowerCase().replace(' ', '-');
  const skillToShow = document.getElementById(`${skillId}-info`);

  if (clickedSkill.classList.contains('active')) {
    clickedSkill.classList.remove('active');
    skillToShow.style.display = 'none';
  } else {
    for (let i = 0; i < skillInfo.length; i++) {
      skillInfo[i].style.display = 'none';
      skillsList.children[i].classList.remove('active');
    }

    clickedSkill.classList.add('active');
    skillToShow.style.display = 'block';
  }
});
