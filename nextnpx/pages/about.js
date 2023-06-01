import Link from 'next/link';

export default function FirstPost() {
    return (
      
      <div class="container">
  
          <h1><a href="/">About</a></h1>
          {/* <h2 style="color:#fff">I'm <span class="typing" style="color:#0E8388"></span></h2> */}
          
  
          <div class="social-links">
              <a href="https://www.linkedin.com/in/mikail-krochta-1216691a2/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              <a href="https://www.github.com/milkyk" target="_blank" class="github"><i class="bx bxl-github"></i></a>
              <a href="mailto:mikailkrochta@gmail.com" target="_blank" class="google"><i class="bx bxl-google"></i></a>
          </div> 
          
      </div>
    );
  }