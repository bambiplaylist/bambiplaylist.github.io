let files = ["https://download1346.mediafire.com/odtjekfxl9cg/3evxj4eizau3zxj/00+Rapid+Induction.mp3","https://download940.mediafire.com/8aqy2tln4r5g/uzklthqotd635cg/01+Bubble+Induction.mp3","https://download1073.mediafire.com/kewevxvqppbg/xmykotmrvds4l80/02+Bubble+Acceptance.mp3","https://download938.mediafire.com/anrx4htyf8ag/uti9prn1fko4v5r/03+Bambi+Named+and+Drained.mp3","https://download941.mediafire.com/jx8tdusgbfeg/02spg0s5rpf9pvu/04+Bambi+IQ+Lock.mp3","https://download1509.mediafire.com/m1orxmoh4gwg/srxlr9sjhy1erag/05+Bambi+Body+Lock.mp3","https://download1593.mediafire.com/xw6orfvabbtg/6ih8rqz52nsqsup/06+Bambi+Attitude+Lock.mp3","https://download1494.mediafire.com/sqa45l6w1t2g/v99t1lr2y55wydl/07+Bambi+Uniformed.mp3","https://download942.mediafire.com/yhvu0r6h53dg/k5n43if2p58p4b5/08+Bambi+Takeover.mp3","https://download1509.mediafire.com/ivl76thlosig/cx0frdbc9wxyxzj/09+Bambi+Cockslut.mp3","https://download1979.mediafire.com/z2c7ipyi2plg/bt13qrohv3ptf1m/10+Bambi+Awakens.mp3","https://download1077.mediafire.com/tet3geuj2x7g/61r2xmd9qt5pp43/01+Blank+Mindless+Doll.mp3","https://download1347.mediafire.com/lmb93m5ks04g/jxpwe9gm7snt7uq/02+Cock+Dumb+Hole.mp3","https://download1582.mediafire.com/otveeunv8bug/ng7on8wjz9pnatf/03+Uniform+Slut+Puppet.mp3","https://download1502.mediafire.com/56n6z74tx6pg/6l0o3g401lgc9r9/04+Vain+Horny+Happy.mp3","https://download1645.mediafire.com/de44ck500xrg/3sbd11l39xk8mkt/05+Bimbo+Drift.mp3","https://download1648.mediafire.com/1zpy88mrhtug/5i0xoikhxntd8z5/01+Fake+Plastic+Fuckpuppet.mp3","https://download849.mediafire.com/sy9keb826k3g/sqajvk2igjo5im6/02+Designer+Pleasure+Puppet.mp3","https://download1653.mediafire.com/chyhvnx6atmg/1sa9xk0qbhrfkwe/03+Bimbo+Fuckpuppet+Oblivion.mp3","https://download1080.mediafire.com/vfyby5c0cy3g/qakm12363xmg6yx/01+Blowup+Pleasure+Toy.mp3","https://download942.mediafire.com/z02iuiti66yg/m3n8eow1g9dg261/02+Perfect+Bimbo+Maid.mp3","https://download1334.mediafire.com/hevu9fhiexcg/b4ucpzd63hfjs45/03+Restrained+and+Milked.mp3","https://download948.mediafire.com/45ix91vhoavg/lih3vc45g0jwjx0/01+Bimbo+Giggletime.mp3","https://download1496.mediafire.com/cblzoys0cigg/g8n5l6w6wosvizp/02+Mindlocked+Cock+Zombie.mp3"];
let list = document.getElementsByTagName("input");
let active = [];

let orderer = document.getElementById("order");

let inputHandle = (e) => {
  active = [];
  for(i=0;i<list.length;i++){
    if(list[i].checked){
      active.push(files[i]);
    }  
  }
  
}

var list = document.getElementById('order')
var nums = [0, 1, 2, 3, 4, 5, 6];
var dragging, draggedOver;
var randomNums = [0, 1, 2, 3, 4, 5, 6];
var isRight = 'Not in order!';

const genRandom = () => {
  randomNums = randomNums.sort(() => Math.random() - 0.5)
  renderItems(randomNums)
}

const renderItems = (data) =>{
  list.innerText = ''
  data.forEach(num=>{
    var node = document.createElement("li");    
    node.draggable = true
    node.addEventListener('drag', setDragging) 
    node.addEventListener('drop', compare) 
    node.addEventListener('dragover', allowDrop)
    var textnode = document.createTextNode(`${num}`);
     node.appendChild(textnode);
    list.appendChild(node)
  })
  dragging = null
  draggedOver = null
}

const compare = (e) =>{
  var index1 = randomNums.indexOf(dragging);
  var index2 = randomNums.indexOf(draggedOver);
  randomNums.splice(index1, 1)
  randomNums.splice(index2, 0, dragging)
 
  if (randomNums.join("") === nums.join("")){
    isRight = 'In order!'
  } else {
    isRight = 'Not in order!'
  }
  renderItems(randomNums)
 
};

function allowDrop(ev) {
    ev.preventDefault();
    draggedOver = parseInt(ev.target.innerText)
}

const setDragging = (e) =>{
  dragging = parseInt(e.target.innerText)
}

genRandom()
 
