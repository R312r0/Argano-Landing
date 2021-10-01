const openMenu = () => {
	//click on menu icon
	const item = document.getElementById('openMenuBlock');
	item.addEventListener('click',()=>{
		document.body.style.overflow = 'hidden';
		document.body.style.height = '100vh';
		const menuMobile = document.getElementById('menuMobile');
		menuMobile.classList.remove('mobile__menu--close');
		menuMobile.classList.add('mobile__menu--open');
	});

	//click on cross icon
	const itemClose = document.getElementById('closeIcon');
	itemClose.addEventListener('click',()=>{
		document.body.style.overflow = 'auto';
		document.body.style.height = '100%';
		const menuMobile = document.getElementById('menuMobile');
		menuMobile.classList.remove('mobile__menu--open');
		menuMobile.classList.add('mobile__menu--close');
	});

	const mobileLinks = document.querySelectorAll('.mobile_links_a');
	mobileLinks.forEach(el=>{
		el.addEventListener('click',()=>{
			document.body.style.overflow = 'auto';
			document.body.style.height = '100%';
			const menuMobile = document.getElementById('menuMobile');
			menuMobile.classList.remove('mobile__menu--open');
			menuMobile.classList.add('mobile__menu--close');
		});
	})

	
}

document.addEventListener("DOMContentLoaded", () => {

	const animMain = document.querySelector("#firstAnimation");
	const animMainMobile = document.querySelector("#firstAnimationMobile");


	const secondAnim = document.querySelector("#second-animation")
	const thirdAnim = document.querySelector("#third-animation")
	const fourthAnim = document.querySelector("#fourth-animation")
	const fifthAnim = document.querySelector("#fifth-animation")
	const sixAnim = document.querySelector("#six-animation")
	const seventhAnim = document.querySelector("#seventh-animation")

	const secondIos = document.querySelector("#second-animation-ios")
	const thirdIos = document.querySelector("#third-animation-ios")
	const fourthIos = document.querySelector("#fourth-animation-ios")
	const fifthIos = document.querySelector("#fifth-animation-mobile")
	const sixIos = document.querySelector("#six-animation-ios")
	const seventhIos = document.querySelector("#seventh-animation-ios")



	if (document.documentElement.clientWidth < 575) {
		animMain.style.display = "none";

		if (iOS()) {

			secondAnim.style.display = "none"
			thirdAnim.style.display = "none"
			fourthAnim.style.display = "none"
			fifthAnim.style.display = "none"
			sixAnim.style.display = "none"
			seventhAnim.style.display = "none"
	
			secondIos.display = "block"
			thirdIos.display = "block" 
			fourthIos.display = "block" 
			fifthIos.display = "block" 
			sixIos.display = "block" 
			seventhIos.display = "block" 
	
		}

	}

	else {

		animMainMobile.style.display = "none";

		secondAnim.style.display = "block"
		thirdAnim.style.display = "block"
		fourthAnim.style.display = "block"
		fifthAnim.style.display = "block"
		sixAnim.style.display = "block"
		seventhAnim.style.display = "block"

		secondIos.style.display = "none"
		thirdIos.style.display = "none" 
		fourthIos.style.display = "none" 
		fifthIos.style.display = "none" 
		sixIos.style.display = "none" 
		seventhIos.style.display = "none" 

	}



checkScrollAnimation();

});


function iOS() {
	return [
	  'iPad Simulator',
	  'iPhone Simulator',
	  'iPod Simulator',
	  'iPad',
	  'iPhone',
	  'iPod'
	].includes(navigator.platform)
	// iPad on iOS 13 detection
	|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

function isElementInViewport(el) {
	// special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
	  el = el[0];
	}
	var rect = el.getBoundingClientRect();
	return (
	  (rect.top <= 0
		&& rect.bottom >= 0)
	  ||
	  (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.top <= (window.innerHeight || document.documentElement.clientHeight))
	  ||
	  (rect.top >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	);
  }


const checkScrollAnimation = () =>{
	if(document.documentElement.clientWidth > 575){
		const elementsToShow = document.querySelectorAll('.show-on-scroll');

		window.addEventListener('scroll', function() {
			console.log("Scrollin'");
	
			elementsToShow.forEach(function (element) {
				if (isElementInViewport(element)) {
				  element.classList.add("animated","animatedFadeInUp", "fadeInUp");
				} 
			  });
		  });
	}
	
}

const stopLoading = () => {
	setTimeout(()=>{
		if(document.documentElement.clientWidth > 575){
			const text = document.getElementById('afterLoad');
			text.classList.add("animated", "animatedFadeInUp" , "fadeInUp");
		}
		
		document.body.classList.remove("loading");
		document.getElementsByClassName('loadingWindow')[0].style.display = 'none';
	},300)
	
}

const loading = () => { 
	var elem = document.getElementById("Bar");    
	var width = 10; 
	var id = setInterval(frame, 1); 
	function frame() { 
	  if (width >= 100) { 
		clearInterval(id); 
	  } else { 
		width++;  
		elem.style.width = width + '%';  
	  } 
	} 
  }

