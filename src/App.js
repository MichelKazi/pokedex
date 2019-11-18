import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Trainer from './Trainer';

class App extends Component {

  render() {

    this.componentDidMount(){
      window.trainer = new Trainer('michel')
    }

   return (
     <div id="dialogue-container">
       <img id="oak" src="https://www.spriters-resource.com/resources/sheet_icons/4/3701.png" alt=""></img>
         <div id="dialogue-box">
           <p>Welcome to the World of POK&eacute;MON!</p>
           <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="708px" height="212px">
           <image x="0px" y="0px" width="708px" height="212px"
             xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsQAAADUBAMAAABpMigCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAC24eybvsfW1tb////zyHjRAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfjCxAVASaqNnAlAAADe0lEQVR42u3YUW6jMBhFYbwD02QDyQ5QVhBp9r+mCQQb0oFUGnxqxTrfU6rpw6+jK6ah60L/1IkyF+5j7UOalUbsjDF9/3UdOWNM30+FrxcTl7U8f+cRP2Ycax/VlLA8f03M6Jc/I0yMCPMD+PKYsYkRIXU1MSXMf0U8ZmxiholxJsbtJF6+S+uguJ1YBZn4F6wS53cUKmqd+CuP+HRTEcNL4rAKX/uydrwk7iwMeE2cZ3yqfVdDhn71jmLmiMvqV2/acuFT7auaMuTHb3TEjCXx8pw4/fNv+i9zyPRjXBKn/LUv/Hx5qq8vhnLi2vc1IM84biYeat/XgveJa1/XhLTWzcRD7euacHqTeJh+448OGAu+SWzh4+5pxpuJpxGfa9/44e5pxpuJHXEJPyY+177w46UnxV7ic+0DGzDPeC9x7fNaMM/YxBwT80yMu5uYZmKciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXHvE59rn9eC/m1iZ3zc/YfE59oHfr7+TeLBxgWMI37W3Eg8zdhHxUHziHcSO+Pj0oh3Ejvj49KI9xJPM9ZRt+3Ep2XGOial/J74md7GBaQHwmvikNoPte/7fDlk1zljRu64HvCTMy7iW8b43O/spmKWqqsRp/4qYFiqxseIv64jZ1zSWHPKennMeP44fnbGpYwjfi73OiaeP15r/zfRmmuarokpW4lj7aNaErYTh9p3tSPuJO5UjIlxJsaZGGdinIlxJsa9JM7vKGLts1oS1u8o8pu2WPusloTVm7aQv5HUvqotyxe95XOsfVRbwmq5wREj8nL/AiYL3itMy597AAAAAElFTkSuQmCC" />
         </svg>
       </div>
     </div>
     
   );
 }
}

export default App;
