(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{33:function(e,t,n){e.exports=n(61)},38:function(e,t,n){},39:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},40:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),o=n(30),c=n.n(o),r=(n(38),n(4)),s=n(5),l=n(7),u=n(6),m=n(2),p=n(8),h=(n(39),n(40),n(18)),d=n.n(h),k=n(31),A=function e(t,n){Object(r.a)(this,e),this.name=t,this.stats=n},x=function(){function e(t){Object(r.a)(this,e),this.fetchPokeAPI=function(){var e=Object(k.a)(d.a.mark((function e(t){var a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n(42),e.prev=1,e.next=4,a.get("https://fizal.me/pokeapi/api/v2/".concat(isNaN(t)?"name/":"id/").concat(t,".json"));case 4:return i=e.sent,e.abrupt("return",i.data);case 8:e.prev=8,e.t0=e.catch(1),console.error("".concat(t," was not a valid entry!"));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.name=t,this.pokemonList=[],this.all=this.all.bind(this),this.addPokemon=this.addPokemon.bind(this),this.fetchPokeAPI=this.fetchPokeAPI.bind(this)}return Object(s.a)(e,[{key:"all",value:function(){return this.pokemonList}},{key:"addPokemon",value:function(e){var t=this;return this.fetchPokeAPI(e).then((function(e){var n={weight:e.weight,hp:e.stats[5].base_stat,attack:e.stats[4].base_stat,defense:e.stats[3].base_stat,abilities:e.abilities.map((function(e){return e.ability.name.replace("-"," ")}))},a=new A(e.name,n);return a.spriteURL=e.sprites.front_default,t.pokemonList.push(a),console.log("".concat(a.name," was added to ").concat(t.name,"'s team!"))}))}},{key:"removePokemon",value:function(e){}}]),e}(),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={name:null},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{id:"name-box",onChange:function(t){return e.setState({name:t.target.value})}}),i.a.createElement("button",{id:"submit-btn",onClick:function(){return e.props.onSubmit(e.state.name)}},"Enter"))}}]),t}(a.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"dialogue-box"},i.a.createElement("p",{id:"dialogue-text"},b[this.props.dialogueIndex]),i.a.createElement("img",{style:{cursor:"pointer"},onClick:this.props.onClick,src:"https://www.shareicon.net/data/256x256/2015/11/01/665144_arrows_512x512.png",alt:""}),2===this.props.dialogueIndex&&i.a.createElement(f,{onSubmit:this.props.onSubmit}),i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"708px",height:"212px"},i.a.createElement("image",{x:"0px",y:"0px",width:"708px",height:"212px",xlinkHref:"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsQAAADUBAMAAABpMigCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAC24eybvsfW1tb////zyHjRAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfjCxAVASaqNnAlAAADe0lEQVR42u3YUW6jMBhFYbwD02QDyQ5QVhBp9r+mCQQb0oFUGnxqxTrfU6rpw6+jK6ah60L/1IkyF+5j7UOalUbsjDF9/3UdOWNM30+FrxcTl7U8f+cRP2Ycax/VlLA8f03M6Jc/I0yMCPMD+PKYsYkRIXU1MSXMf0U8ZmxiholxJsbtJF6+S+uguJ1YBZn4F6wS53cUKmqd+CuP+HRTEcNL4rAKX/uydrwk7iwMeE2cZ3yqfVdDhn71jmLmiMvqV2/acuFT7auaMuTHb3TEjCXx8pw4/fNv+i9zyPRjXBKn/LUv/Hx5qq8vhnLi2vc1IM84biYeat/XgveJa1/XhLTWzcRD7euacHqTeJh+448OGAu+SWzh4+5pxpuJpxGfa9/44e5pxpuJHXEJPyY+177w46UnxV7ic+0DGzDPeC9x7fNaMM/YxBwT80yMu5uYZmKciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXEmxpkYZ2KciXHvE59rn9eC/m1iZ3zc/YfE59oHfr7+TeLBxgWMI37W3Eg8zdhHxUHziHcSO+Pj0oh3Ejvj49KI9xJPM9ZRt+3Ep2XGOial/J74md7GBaQHwmvikNoPte/7fDlk1zljRu64HvCTMy7iW8b43O/spmKWqqsRp/4qYFiqxseIv64jZ1zSWHPKennMeP44fnbGpYwjfi73OiaeP15r/zfRmmuarokpW4lj7aNaErYTh9p3tSPuJO5UjIlxJsaZGGdinIlxJsa9JM7vKGLts1oS1u8o8pu2WPusloTVm7aQv5HUvqotyxe95XOsfVRbwmq5wREj8nL/AiYL3itMy597AAAAAElFTkSuQmCC"})))}}]),t}(a.Component),b=["Welcome to the World of POK\xe9MON!","My name jeff","What your name is cuh","this is a dialogue too."],g=E,w=n(15),j=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/188/188918.png",width:"20",alt:"pokeball"}))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={viewport:{width:700,height:700,latitude:40.7042,longitude:-74.01102,zoom:12}},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(w.b,Object.assign({className:"map",mapboxApiAccessToken:"pk.eyJ1IjoibWthemkiLCJhIjoiY2szNm42Y214MDM5djNjcnozcmFseGplaiJ9.romUGZKRAwbaprnN_LrRiw"},this.state.viewport,{onViewportChange:function(t){return e.setState({viewport:t})}}),i.a.createElement(w.a,{latitude:40.715326,longitude:-73.992354,offsetLeft:-20,offsetTop:-10},i.a.createElement(j,null)),i.a.createElement(w.a,{latitude:40.702639,longitude:-73.984791,offsetLeft:-20,offsetTop:-10},i.a.createElement(j,null)),i.a.createElement(w.a,{latitude:40.714936,longitude:-74.003351,offsetLeft:-20,offsetTop:-10},i.a.createElement(j,null)))}}]),t}(a.Component),Y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={trainer:null,acknowledged:!1,dialogueIndex:0,typing:!1},n.acknowledge=n.acknowledge.bind(Object(m.a)(n)),n.makeTrainer=n.makeTrainer.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.trainer=new x("")}},{key:"acknowledge",value:function(){this.setState({acknowledged:!0,dialogueIndex:this.state.dialogueIndex+1,typing:!0})}},{key:"makeTrainer",value:function(e){this.setState({dialogueIndex:this.state.dialogueIndex+1,trainer:new x(e)}),window.trainer=new x(e)}},{key:"render",value:function(){return console.log("app.js state",this.state),i.a.createElement("div",{id:"dialogue-container"},i.a.createElement("img",{id:"oak",src:"https://www.spriters-resource.com/resources/sheet_icons/4/3701.png",alt:""}),i.a.createElement(v,null),i.a.createElement(g,{dialogueIndex:this.state.dialogueIndex,onClick:this.acknowledge,onSubmit:this.makeTrainer}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.2286cdef.chunk.js.map