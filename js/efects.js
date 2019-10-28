const menuItems = document.querySelectorAll('.menu a[href^="#"]');
var top = document.querySelector('.scrollTop');

var i =0;
var lastScrollTop = 0;
	if(window.innerWidth>800){
		window.addEventListener("scroll", parallax, false);
	}

menuItems.forEach(item => {
		item.addEventListener('click', scrolloIdOnClick);
	})
	function scrolloIdOnClick(event){
		event.preventDefault();
		const element = event.target;
		const id = element.getAttribute('href');
		const to = document.querySelector(id).offsetTop;
	
		window.scroll({
			top:to,
			behavior: "smooth",
		});
	}

	
function parallax(){	
	var skills = document.getElementById('skills');
	var interests = document.getElementById('interests');
	var skillsInte = document.getElementById('skills-interests');
	var about = document.getElementById('about-me');
	var experience = document.getElementById('experience');	
	skills.style.top = -(window.pageYOffset/4) + 'px';
	interests.style.top = (window.pageYOffset/2) + 'px';
	
	if (this.scrollY>lastScrollTop){
		skills.style.opacity = i;
		interests.style.opacity = i;

		if(this.scrollY===0){
			i=0;
			skills.style.opacity = i;		
			interests.style.opacity = i;
		}else if(this.scrollY>experience.offsetTop || this.scrollY===experience.offsetTop ){
			i= 0;
			skills.style.opacity = i;		
			interests.style.opacity = i;			
		}else if (this.scrollY===skillsInte.offsetTop){
			i=1;
			skills.style.opacity = i;		
			interests.style.opacity = i;
		}else if(this.scrollY>about.offsetTop){
			i += 0.01;
			skills.style.opacity = i;
			interests.style.opacity = i;
		}

	}else{
		i += 0.02;
		skills.style.opacity = i;
		interests.style.opacity = i;
		if(this.scrollY<about.offsetTop){
			i=0;
			skills.style.opacity = i;
			interests.style.opacity = i;
		}else if(this.scrollY===experience.offsetTop){
			i= 0;
			skills.style.opacity = i;		
			interests.style.opacity = i;
		
		}
	}

	lastScrollTop = this.scrollY;

}





