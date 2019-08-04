<template>

  <footer class="bottom-footer">
    
      <nuxt-link class="bottom-footer__link" to="/"><div class="title-container">
        <h3>The world's most trusted solution for Finance Controls and Automation</h3>
    </div> 
    
    </nuxt-link>


    <section class="social-media">
      
       
            
                <a href="https://www.facebook.com/blackline" target="_blank" class="icon"><i class="fab fa-facebook"></i></a>
            
           
                <a href="https://www.youtube.com/user/BlackLineSystems" target="_blank" class="icon"><i class="fab fa-youtube"></i></a>
           
            
                <a href="https://www.twitter.com/blackline" target="_blank" class="icon"><i class="fab fa-twitter-square"></i></a>
            
                <a href="https://www.linkedin.com/company/blackline" target="_blank" class="icon"><i class="fab fa-linkedin"></i></a>
            
      
      
    </section>

   

    <nav class="footer-nav navbar">
              <a href="https://www.blackline.com/" target="_blank" class="ng-binding">Blackline</a>
            
              <a href="https://www.blackline.com/contact" target="_blank" class="ng-binding">Contact</a>
            
              <a href="https://www.blackline.com/company/in-the-news" target="_blank" class="ng-binding">News</a>
           
              <div class="copyright ng-binding">© 2019 Blackline Inc. All rights reserved</div> 
             
        </nav>
        
      
  </footer> 


 
</template>

<script>

</script>

<style>


.footer-nav a{
    color:#444444;
    text-decoration: none;
    padding-right: 2rem;
    font-size: 1rem;
    
}


.footer-nav{
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.title-container{
  color: #666666;
  padding-top: 0.5rem;
  font-weight: 300;

}

.bottom-footer__link{
  text-decoration: none;
  font-size: 1.2rem;
  

}

  .social-media{
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 1.5rem 0rem 1.5rem 0;
}

  .social-media ul{
  display: flex;
  flex-direction: row;
}

li a{
  padding-right: 2rem;
 
}

 .copyright{
   font-size: 1rem;
   color: #444444;
 }

 .icon{
   margin: 0rem 2rem;
   font-size: 2rem;
   color: #037bc0;
 }

  .footer-nav a:hover{
   color: #037bc0;
 }

 .social-media a:hover{
   color: #444444;
 }

</style>