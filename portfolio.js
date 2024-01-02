// loader effect
window.addEventListener("load", function(){
    setTimeout(loadPage, 5000);
    function loadPage(){
      let loadContainer = document.querySelector(".loader-container");
      let mainContainer = document.getElementById("main-container");
    
      loadContainer.style.display = "none";
      mainContainer.style.display = "block";
    }
  });
  
  
  
  // js typing effect
  var typed = new Typed('#skills', {
    strings:[ 'Frontend developer', 'Designer', 'Freelancer'],
    //strings: ['Frontend developer', 'Graphic designer', 'Typist'],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    });
  
  
    var prevScrollpos = window.pageYOffset;
  
    window.addEventListener("load", function(){
      if(window.innerWidth > 1024){
        window.onscroll = scrollPage;
      } else{
        window.onscroll = deactivateScrollPage;
        document.getElementById("aside-nav").style.display = "none";
      }
    });
    window.addEventListener("resize", function(){
      if(window.innerWidth > 1024){
        window.onscroll = scrollPage;
      } else{
        window.onscroll = deactivateScrollPage;
        document.getElementById("aside-nav").style.display = "none";
      }
    });
   
   
     function scrollPage(){
      var currentScrollPos = window.pageYOffset;
      if(prevScrollpos > currentScrollPos){ 
          document.getElementById("aside-nav").style.display = "none";
      } 
      else{
        document.getElementById("aside-nav").style.display = "block";
      }
      prevScrollpos = currentScrollPos;
    }
    
    function deactivateScrollPage(){
      null;
    }
     
  
      
  
  
   function showHiddenService(element){
    element.remove();
    const hiddenServices = document.getElementById("neutral-container");
    hiddenServices.style.display = "flex";
  }
  
  // side canvas for lower screen size
  var sideCanvas = document.getElementById("canvas");
  openSideCanvas = () =>{
    sideCanvas.style.display = "block";
  }
  closeSideCanvas = () =>{
    sideCanvas.style.display = "none";
  }
                    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  