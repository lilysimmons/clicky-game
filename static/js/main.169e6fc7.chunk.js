(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"parrot1",image:"./img/parrot1.jpeg"},{id:2,name:"parrot2",image:"./img/parrot2.jpeg"},{id:3,name:"parrot3",image:"./img/parrot3.jpeg"},{id:4,name:"parrot4",image:"./img/parrot4.jpeg"},{id:5,name:"parrot5",image:"./img/parrot5.jpeg"},{id:6,name:"parrot6",image:"./img/parrot6.jpeg"},{id:7,name:"parrot7",image:"/img/parrot7.jpeg"},{id:8,name:"parrot8",image:"./img/parrot8.jpeg"},{id:9,name:"parrot9",image:"./img/parrot9.jpeg"},{id:10,name:"parrot10",image:"./img/parrot10.jpeg"},{id:11,name:"parrot11",image:"./img/parrot11.jpeg"},{id:12,name:"parrot12",image:"./img/parrot12.jpeg"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),i=a.n(o),c=(a(15),a(4)),s=a(5),l=a(7),m=a(6),g=a(8);a(16);var u=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffle(e.id)},className:"clicked"})))};a(17);var p=function(e){return n.a.createElement("div",{className:"header",status:e.status,style:{backgroundColor:"lavender"}},e.children)};a(18);var d=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};a(19);var h=function(e){return n.a.createElement("h1",{className:"title"},e.children)},f=a(1),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={parrots:f,clickedParrotIDs:[],score:0,topScore:12,status:""},a.shuffle=function(e){console.log("CAW CAW");var t=a.state.clickedParrotIDs;if(t.includes(e))a.setState({clickedParrotIDs:[],score:0,status:"You lost loser!!!! Click on an image to try again."});else{if(t.push(e),t.length===a.state.parrots.length)return a.setState({score:0,clickedParrotIDs:[]}),void alert("You won! Your memory is on fleek. Play again?");a.setState({parrots:f,clickedParrotIDs:t,score:t.length,status:""});var r=0,n=0,o=null;for(r=f.length-1;r>0;r-=1)n=Math.floor(Math.random()*(r+1)),o=f[r],f[r]=f[n],f[n]=o}},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d,null,n.a.createElement(p,null,n.a.createElement("p",{style:{textAlign:"center"}},"Test your memory! You can only click an image once. It's harder than you think. Score of 12 wins the game."),n.a.createElement("h2",{style:{textAlign:"center"}},"Score: ",this.state.score," | Score to meet: ",this.state.topScore),n.a.createElement("h3",{style:{textAlign:"center",color:"red"}},this.state.status)),n.a.createElement(h,null,"Clicky Parrot Shuffle"),this.state.parrots.map(function(t){return n.a.createElement(u,{shuffle:e.shuffle,id:t.id,key:t.id,image:t.image})}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.169e6fc7.chunk.js.map