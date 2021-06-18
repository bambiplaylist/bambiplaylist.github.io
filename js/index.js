let files = ["https://download1346.mediafire.com/odtjekfxl9cg/3evxj4eizau3zxj/00+Rapid+Induction.mp3","https://download940.mediafire.com/8aqy2tln4r5g/uzklthqotd635cg/01+Bubble+Induction.mp3","https://download1073.mediafire.com/kewevxvqppbg/xmykotmrvds4l80/02+Bubble+Acceptance.mp3","https://download938.mediafire.com/anrx4htyf8ag/uti9prn1fko4v5r/03+Bambi+Named+and+Drained.mp3","https://download941.mediafire.com/jx8tdusgbfeg/02spg0s5rpf9pvu/04+Bambi+IQ+Lock.mp3","https://download1509.mediafire.com/m1orxmoh4gwg/srxlr9sjhy1erag/05+Bambi+Body+Lock.mp3","https://download1593.mediafire.com/xw6orfvabbtg/6ih8rqz52nsqsup/06+Bambi+Attitude+Lock.mp3","https://download1494.mediafire.com/sqa45l6w1t2g/v99t1lr2y55wydl/07+Bambi+Uniformed.mp3","https://download942.mediafire.com/yhvu0r6h53dg/k5n43if2p58p4b5/08+Bambi+Takeover.mp3","https://download1509.mediafire.com/ivl76thlosig/cx0frdbc9wxyxzj/09+Bambi+Cockslut.mp3","https://download1979.mediafire.com/z2c7ipyi2plg/bt13qrohv3ptf1m/10+Bambi+Awakens.mp3","https://download1077.mediafire.com/tet3geuj2x7g/61r2xmd9qt5pp43/01+Blank+Mindless+Doll.mp3","https://download1347.mediafire.com/lmb93m5ks04g/jxpwe9gm7snt7uq/02+Cock+Dumb+Hole.mp3","https://download1582.mediafire.com/otveeunv8bug/ng7on8wjz9pnatf/03+Uniform+Slut+Puppet.mp3","https://download1502.mediafire.com/56n6z74tx6pg/6l0o3g401lgc9r9/04+Vain+Horny+Happy.mp3","https://download1645.mediafire.com/de44ck500xrg/3sbd11l39xk8mkt/05+Bimbo+Drift.mp3","https://download1648.mediafire.com/1zpy88mrhtug/5i0xoikhxntd8z5/01+Fake+Plastic+Fuckpuppet.mp3","https://download849.mediafire.com/sy9keb826k3g/sqajvk2igjo5im6/02+Designer+Pleasure+Puppet.mp3","https://download1653.mediafire.com/chyhvnx6atmg/1sa9xk0qbhrfkwe/03+Bimbo+Fuckpuppet+Oblivion.mp3","https://download1080.mediafire.com/vfyby5c0cy3g/qakm12363xmg6yx/01+Blowup+Pleasure+Toy.mp3","https://download942.mediafire.com/z02iuiti66yg/m3n8eow1g9dg261/02+Perfect+Bimbo+Maid.mp3","https://download1334.mediafire.com/hevu9fhiexcg/b4ucpzd63hfjs45/03+Restrained+and+Milked.mp3","https://download948.mediafire.com/45ix91vhoavg/lih3vc45g0jwjx0/01+Bimbo+Giggletime.mp3","https://download1496.mediafire.com/cblzoys0cigg/g8n5l6w6wosvizp/02+Mindlocked+Cock+Zombie.mp3","https://download1072.mediafire.com/mpkrmkk1hx6g/0zcm92b0c1psx5f/00+Bimbo+Drone.mp3","https://download1979.mediafire.com/t1kkgw5teiig/sfwiov3qj8qru20/01+Bimbo+Relaxation.mp3","https://www.mediafire.com/file/ocukxwxo6z2ornw/02_Bimbo_Mindwipe.mp3/file","https://download843.mediafire.com/6il7tgz6bhkg/4ik3lkld3u6oqzy/03+Bimbo+Slumber.mp3","https://download1581.mediafire.com/48voz7f7a5ng/73400acym5dwj21/04+Bimbo+Tranquility.mp3","https://download1321.mediafire.com/5k87cawuotdg/p7vdv725xargq70/05+Bimbo+Pride.mp3","https://download1591.mediafire.com/zq1ctqvuijsg/bsr9qi97188bqgi/06+Bimbo+Pleasure.mp3","https://download1514.mediafire.com/i1pas4pvw1bg/hivv4oiv0x1yc6q/07+Bimbo+Servitude.mp3","https://download936.mediafire.com/e2pkud5tk8pg/ul1torvgt8rn0fe/08+Bimbo+Addiction.mp3","https://download1335.mediafire.com/o10y9xuj0ldg/omftkkihfbdfvj7/09+Bimbo+Amnesia.mp3","https://download1588.mediafire.com/2u4iatczlgqg/ezhj8dfyhnvn4qh/10+Bimbo+Protection.mp3"];
let list = document.getElementsByTagName("input");
let active = [""];

let orderer = document.getElementById("order");

function detectBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE';//crap
    } else {
        return 'Unknown';
    }
} 

window.onload = () => { 
  if(window.location.href.includes("?")){
    audioos = window.location.href.split("?list=")[1]
    audioos = audioos.split(",");
    for(i=0;i<audioos.length;i++){
      audios.push(new Audio(files[parseInt(audioos[i])]));
      
    } 
    audios.forEach(function(sound) {
      if(detectBrowser()=="Firefox"){
        sound.load();
      }
      sound.onended = onended;
    });
    indexes = [];
    for(j=0;j<audios.length;j++){
      indexes.push(files.indexOf(audios[j].src));
    }
    document.getElementById("permLink").innerText = window.location.href+"?list="+indexes.join(",");
    document.getElementById("permLink").href = window.location.href+"?list="+indexes.join(",");
  }
};

let inputHandle = (e) => {
  active = [];
  for(i=0;i<list.length;i++){ 
    if(list[i].checked){  
      active.push(files[i]); 
    }   
  }  
  renderItems(active)
} 
 
var list2 = document.getElementById('order') 
var nums = ["a"];
var dragging, draggedOver;

const genRandom = () => {
  active = active.sort(() => Math.random() - 0.5)
  renderItems(active)
}

const renderItems = (data) =>{
  list2.innerText = ''
  data.forEach(num=>{
    var node = document.createElement("li");    
    node.draggable = true
    node.addEventListener('drag', setDragging) 
    node.addEventListener('drop', compare) 
    node.addEventListener('dragover', allowDrop)
    var textnode = document.createElement(`a`);
    textnode.className = "ss";
    textnode.href = `${num}`;
    textnode.innerText = `${num.split("/")[5].split(".mp3")[0].replaceAll("+"," ")}`;
    node.appendChild(textnode);
    list2.appendChild(node)
  })
  dragging = null
  draggedOver = null
}

const compare = (e) =>{
  var index1 = active.indexOf(dragging);
  var index2 = active.indexOf(draggedOver);
  active.splice(index1, 1)
  active.splice(index2, 0, dragging)
  
  renderItems(active)
 
}; 

function allowDrop(ev) {
    ev.preventDefault();
    draggedOver = ev.target.innerHTML.split("href=\"")[1].split("\">")[0];
    audios = [];
}

const setDragging = (e) =>{
  dragging = e.target.innerHTML.split("href=\"")[1].split("\">")[0];
  audios = [];
}

var audios = [];
var currentIndex = 0;

let create = () => {
  audios = [];
  for(i=0;i<active.length;i++){
    audios.push(new Audio(active[i]));
  }
  audios.forEach(function(sound) {
    if(detectBrowser()=="Firefox"){
      sound.load();
    }
    sound.onended = onended;
  });
  indexes = [];
  for(j=0;j<audios.length;j++){
    indexes.push(files.indexOf(audios[j].src));
  }
  document.getElementById("permLink").innerText = window.location.href+"?list="+indexes.join(",");
  document.getElementById("permLink").href = window.location.href+"?list="+indexes.join(",");
  return false;
}
                    
function onended(evt) {
  currentIndex = (currentIndex + 1) % audios.length; // increment our index
  audios[currentIndex].play(); // play the next sound
}

document.getElementById("play").onclick = () => {
  audios[0].play();
};
                    
document.getElementById("stop").onclick = () => {
  for(i=0;i<audios.length;i++){
    audios[i].pause();
  }
};
