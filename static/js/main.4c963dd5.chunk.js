(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{33:function(e,t,n){e.exports=n(63)},38:function(e,t,n){},39:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},40:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),i=n(30),r=n.n(i),s=(n(38),n(5)),c=n(4),l=n(7),u=n(6),h=n(2),m=n(8),p=(n(39),n(40),n(17)),d=n.n(p),k=n(31),f=n(42),b=function(){function e(){var t=this;Object(s.a)(this,e),this.queryData=function(){var e=Object(k.a)(d.a.mark((function e(n){var a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("https://fizal.me/pokeapi/api/v2/".concat(isNaN(n)?"name/":"id/").concat(n,".json"));case 3:return a=e.sent,o=a.data,t.name=o.name,t.id=o.id,t.hp=o.stats[5].base_stat,t.attack=o.stats[4].base_stat,t.defense=o.stats[3].base_stat,t.weight=o.weight,t.spriteURL=o.sprites.front_default,t.abilities=o.abilities.map((function(e){return e.ability.name.replace("-"," ")})),e.abrupt("return",Promise.resolve(t));case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),this.name=null}return Object(c.a)(e,[{key:"randomQuery",value:function(){return this.queryData(Math.floor(800*Math.random())+1)}}]),e}(),v=function(){function e(t){Object(s.a)(this,e),this.name=t,this.pokemonList=[],this.all=this.all.bind(this),this.addPokemon=this.addPokemon.bind(this)}return Object(c.a)(e,[{key:"all",value:function(){return this.pokemonList}},{key:"addPokemon",value:function(e){var t=new b;t.queryData(e),this.pokemonList.push(t)}},{key:"removePokemon",value:function(e){this.pokemonList=this.pokemonList.filter((function(t){return isNaN(e)?t.id!=e:t.name!=e}))}}]),e}(),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={name:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{id:"name-box",onChange:function(t){return e.setState({name:t.target.value})}}),o.a.createElement("button",{id:"submit-btn",onClick:function(){return e.props.onSubmit(e.state.name)}},"Enter"))}}]),t}(a.Component),w=(a.Component,["Welcome to the World of POK\xe9MON!","My name jeff","What your name is cuh","Alright thats all I need"]),j=n(18),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={pokemon:null},n.setPokemon=n.setPokemon.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setPokemon",value:function(){var e=this;(this.state.pokemon?function(){return Promise.resolve(e.state.pokemon)}:function(t){return(new b).randomQuery().then((function(t){return e.setState({pokemon:t}),t}))})().then((function(t){e.props.pokemonHandler(t)}))}},{key:"render",value:function(){return o.a.createElement("div",{onClick:this.setPokemon,style:{cursor:"pointer"}},o.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/188/188918.png",width:"24",alt:"pokeball"}))}}]),t}(a.Component),O=(n(61),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,!this.props.pokemon&&o.a.createElement("div",{id:"no-card"},o.a.createElement("h2",null,"Welcome!"),o.a.createElement("img",{src:"http://pixelartmaker.com/art/dc12aa356cb08f1.png",width:"150",alt:""}),o.a.createElement("h3",null,"Click on a pokeball and find out what's in it!")),this.props.pokemon&&o.a.createElement("div",{id:"card"},o.a.createElement("h1",null,this.props.pokemon.name),o.a.createElement("img",{src:this.props.pokemon.spriteURL,alt:""}),o.a.createElement("p",null,"HP: ",this.props.pokemon.hp),o.a.createElement("p",null,"Attack: ",this.props.pokemon.attack),o.a.createElement("p",null,"Defense: ",this.props.pokemon.defense),o.a.createElement("p",null,"Weight: ",this.props.pokemon.weight)))}}]),t}(a.Component)),E=(n(62),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={viewport:{width:"85vw",height:"100vh",latitude:40.7042,longitude:-74.01102,zoom:7},labelShowing:!1,navigatorChecked:!1,pokemon:null},n.showLabel=n.showLabel.bind(Object(h.a)(n)),n.hideLabel=n.hideLabel.bind(Object(h.a)(n)),n.locate=n.locate.bind(Object(h.a)(n)),n.pokemonHandler=n.pokemonHandler.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.locate()}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(t.navigatorChecked!==this.state.navigatorChecked){var a=Array(50).fill(0).map((function(){return{lat:n.state.viewport.latitude+(Math.random()-.5)/15,lng:n.state.viewport.longitude+(Math.random()-.5)/15}}));this.setState({locations:a})}}},{key:"locate",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){};navigator?navigator.geolocation.getCurrentPosition((function(n){e.setState({navigatorChecked:!0,viewport:{width:"85vw",height:"100vh",longitude:n.coords.longitude,latitude:n.coords.latitude,zoom:12.5}},t())})):this.setState({navigatorChecked:!0},t())}},{key:"pokemonHandler",value:function(e){this.setState({pokemon:e}),console.log(e)}},{key:"showLabel",value:function(){this.setState({labelShowing:!0})}},{key:"hideLabel",value:function(){this.setState({labelShowing:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(j.b,Object.assign({className:"map",mapStyle:"mapbox://styles/mapbox/dark-v10",style:{},mapboxApiAccessToken:"pk.eyJ1IjoibWthemkiLCJhIjoiY2szNm42Y214MDM5djNjcnozcmFseGplaiJ9.romUGZKRAwbaprnN_LrRiw"},this.state.viewport,{onViewportChange:function(t){return e.setState({viewport:t})}}),o.a.createElement(O,{pokemon:this.state.pokemon,style:{zIndex:1}}),this.state.navigatorChecked&&this.state.locations&&this.state.locations.map((function(t){var n=t.lat,a=t.lng;return o.a.createElement(j.a,{latitude:n,longitude:a,offsetLeft:-20,offsetTop:-10,style:{zIndex:21},captureClick:!1},o.a.createElement(y,{pokemonHandler:e.pokemonHandler}))}))))}}]),t}(a.Component)),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={trainer:null,acknowledged:!1,dialogueIndex:0,typing:!1},n.acknowledge=n.acknowledge.bind(Object(h.a)(n)),n.makeTrainer=n.makeTrainer.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.trainer=new v("")}},{key:"acknowledge",value:function(){this.setState({acknowledged:!0,dialogueIndex:this.state.dialogueIndex+1,typing:!0})}},{key:"makeTrainer",value:function(e){this.setState({dialogueIndex:this.state.dialogueIndex+1,trainer:new v(e)}),window.trainer=new v(e)}},{key:"render",value:function(){return console.log("app.js state",this.state),o.a.createElement("div",{id:"dialogue-container"},o.a.createElement(E,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4c963dd5.chunk.js.map