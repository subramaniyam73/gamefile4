let assignedValues=[],gameStatus=true,i,cc,bestScores=[],levelValue,levelValue2,tempLevelValue;
let gradientValues=["3d004d","660080","8f00b3","cc00ff","e580ff","b3daff","80c1ff","4da9ff","0077e6","005cb3","004280","004d00","006600","009900","00b300","00cc00","00ff00","80ff80","b3ffb3","b3d1ff","66a3ff","3385ff","0066ff","0047b3","003380","800000","b30000","e60000","ff6666"];
let gradientValues2=["ff6666","ff4d4d","ff3333","cc0000","b30000","990000","800000","4d94ff","3385ff","1a75ff","0066ff","0052cc","003d99","80ff80","66ff66","00cc00","00b300","009900","008000"];
gradientCount=0;
for(let w=0;w<5;w++)
{
  localStorage.setItem(bestScores[w],+(0));
}
document.querySelector("#ng").style.opacity="0.3";

document.querySelector(".lookControl").innerHTML="<br>choose the difficulty";
document.querySelector(".lookControl").addEventListener("click",function(){
  if(levelValue){
    audioObject1.play();
    setTimeout(function(){audioObject1.pause();audioObject1.load();},4000);

  setTimeout(function(){document.querySelector(".lookControl").innerHTML="<br><br>3";},0);
  setTimeout(function(){document.querySelector(".lookControl").innerHTML="<br><br>2";},1000);
  setTimeout(function(){document.querySelector(".lookControl").innerHTML="<br><br>1";},2000);
  setTimeout(function(){document.querySelector(".lookControl").innerHTML="";},3000);


  setTimeout(function(){document.querySelector(".lookControl").style.height="0";},3000);
  setTimeout(function(){document.querySelector(".lookControl").style.width="0";},3000);
  setTimeout(function(){timerObject.start();},3000);
}

});
document.querySelector("#ng").addEventListener("click",function(){



  for(let lll=1;lll<=20;lll++)
  {
    document.querySelector("#b"+lll).classList.remove("cover");
  }
  for(let lll=1;lll<=20;lll++)
  {
    document.querySelector("#b"+lll).style.backgroundColor="#400082";
  }

  if(count===(40+(levelValue-1)*20+1))
  {

    document.querySelector("#l1").style.opacity="1.0";
    document.querySelector("#l2").style.opacity="1.0";
    document.querySelector("#l3").style.opacity="1.0";

    levelValue=0;
    for(let nnn=0;nnn<5;nnn++)
    {
      document.querySelector("#el"+(nnn+1)).textContent="";
    }
    timerObject.reset();
  document.querySelector(".lookControl").innerHTML="<br><br>choose the difficulty";
  setTimeout(function(){document.querySelector(".lookControl").style.height="470px";},0);

  setTimeout(function(){document.querySelector(".lookControl").style.width="582px";},0);
  av();
  ae();
}

});


let xx,yy,ff,flag,bb,count=1;


function av()
{
  assignedValues.length=0;
  for(i=0;i<20;i++)
  {
    xx=(Math.floor(Math.random()*20)+1);
    if(!assignedValues.includes(xx))
    {
      assignedValues.push(xx);
      flag=0;
    }
    else{
      ff=1;
      while(ff)
      {
        yy=(Math.floor(Math.random()*20)+1);
        if(!assignedValues.includes(yy))
        {
          assignedValues.push(yy);
          ff=0;
        }
      }


    }
  }

  for(i=0;i<20;i++)
  {
    document.querySelector("#b"+(i+1)).textContent=assignedValues[i];


  }
}

av();
ae();
function ae(){
count=1;
for(let j=1;j<=20;j++)
{

  document.querySelector("#b"+j).addEventListener("click",function(){

    cc=document.querySelector("#b"+j).textContent;
    if(cc==count)
    {
      audioObject2.play();
      //setTimeout(function(){audioObject2.pause();audioObject2.load();},1000);

      setTimeout(function(){document.querySelector("#b"+j).classList.add("tapped");},0);
      setTimeout(function(){document.querySelector("#b"+j).classList.remove("tapped");},200);
      if(cc==1)
      {
        timerObject.start();
      }
      else if(cc==(40+(levelValue-1)*20))
      {
        timerObject.stop();
        if(localStorage.getItem(levelValue+"beet1")==null)
          {
          localStorage.setItem(levelValue+"beet1",document.querySelector(".timerSpan").textContent);

        }
        else if(localStorage.getItem(levelValue+"beet2")==null)
        {
          localStorage.setItem(levelValue+"beet2",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"beet3")==null)
        {
          localStorage.setItem(levelValue+"beet3",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"beet4")==null)
        {
          localStorage.setItem(levelValue+"beet4",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"beet5")==null)
        {
          localStorage.setItem(levelValue+"beet5",document.querySelector(".timerSpan").textContent);
        }
        else if(localStorage.getItem(levelValue+"beet6")==null||localStorage.getItem(levelValue+"beet6")=="")
        {
          localStorage.setItem(levelValue+"beet6",document.querySelector(".timerSpan").textContent);
        }
        if(localStorage.getItem(levelValue+"beet6")!=null)
        {
          for(x1=1;x1<6;x1++)
          {
            for(x2=x1+1;x2<=6;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"beet"+x2))<Number(localStorage.getItem(levelValue+"beet"+x1)))
              {
                temp=localStorage.getItem(levelValue+"beet"+x1);
                localStorage.setItem(levelValue+"beet"+x1,localStorage.getItem(levelValue+"beet"+x2));
                localStorage.setItem(levelValue+"beet"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=5;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem("beet"+y1);

          }
          localStorage.setItem(levelValue+"beet6","");


        }
        else if(localStorage.getItem(levelValue+"beet5")!=null)
        {
          for(x1=1;x1<5;x1++)
          {
            for(x2=x1+1;x2<=5;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"beet"+x2))<Number(localStorage.getItem(levelValue+"beet"+x1)))
              {
                temp=localStorage.getItem(levelValue+"beet"+x1);
                localStorage.setItem(levelValue+"beet"+x1,localStorage.getItem(levelValue+"beet"+x2));
                localStorage.setItem(levelValue+"beet"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=5;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"beet"+y1);
          }



        }

        else if(localStorage.getItem(levelValue+"beet4")!=null)
        {
          for(x1=1;x1<4;x1++)
          {
            for(x2=x1+1;x2<=4;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"beet"+x2))<Number(localStorage.getItem(levelValue+"beet"+x1)))
              {
                temp=localStorage.getItem(levelValue+"beet"+x1);
                localStorage.setItem(levelValue+"beet"+x1,localStorage.getItem(levelValue+"beet"+x2));
                localStorage.setItem(levelValue+"beet"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=4;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"beet"+y1);
          }



        }

        else if(localStorage.getItem(levelValue+"beet3")!=null)
        {
          for(x1=1;x1<3;x1++)
          {
            for(x2=x1+1;x2<=3;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"beet"+x2))<Number(localStorage.getItem(levelValue+"beet"+x1)))
              {
                temp=localStorage.getItem(levelValue+"beet"+x1);
                localStorage.setItem(levelValue+"beet"+x1,localStorage.getItem(levelValue+"beet"+x2));
                localStorage.setItem(levelValue+"beet"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=3;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"beet"+y1);
          }



        }
        else if(localStorage.getItem(levelValue+"beet2")!=null)
        {
          for(x1=1;x1<2;x1++)
          {
            for(x2=x1+1;x2<=2;x2++)
            {
              if(Number(localStorage.getItem(levelValue+"beet"+x2))<Number(localStorage.getItem(levelValue+"beet"+x1)))
              {
                temp=localStorage.getItem(levelValue+"beet"+x1);
                localStorage.setItem(levelValue+"beet"+x1,localStorage.getItem(levelValue+"beet"+x2));
                localStorage.setItem(levelValue+"beet"+x2,temp);
              }

            }
          }
          for(y1=1;y1<=2;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"beet"+y1);
          }



        }
        else if(localStorage.getItem(levelValue+"beet1")!=null)
        {

          for(y1=1;y1<=1;y1++)
          {
            document.querySelector("#el"+y1).textContent=localStorage.getItem(levelValue+"beet"+y1);
          }



        }


        document.querySelector("#ng").style.opacity="1.00";




      }
    if(cc<=(20*levelValue))
    {
      setTimeout(function(){document.querySelector("#b"+j).textContent=(+cc)+(+20);},200);
      document.querySelector("#b"+j).style.background="#"+gradientValues2[gradientCount];
      gradientCount++;
      if(gradientCount==gradientValues2.length)
      {
        gradientCount=0;
      }
    }
    else{
      document.querySelector("#b"+j).classList.add("cover");
    }

    count++;
    }
    else{
      audioObject3.play();
      document.querySelector("#b"+j).classList.add("wronged");
      setTimeout(function(){document.querySelector("#b"+j).classList.remove("wronged");},200)
      //setTimeout(function(){audioObject3.pause();audioObject3.load();},500);

    }

  });
}
}
var Stopwatch = function(elem, options) {

  var timer       = createTimer(),
      offset,
      clock,
      interval;
  options = options || {};
  options.delay = options.delay || 1;
  elem.appendChild(timer);
  reset();
  timer.classList.add("timerSpan");
  function createTimer() {
    return document.createElement("span");
  }



  function start() {
    if (!interval) {
      offset   = Date.now();
      interval = setInterval(update,1);
    }
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function reset() {
    clock = 0;
    render(0);
  }

  function update() {
    clock +=delta();
    render();
  }

  function render() {
    timer.innerHTML = clock/1000;
  }

  function delta() {
    var now = Date.now(),
        d   = now - offset;

    offset = now;
    return d;
  }
  this.start  = start;
  this.stop   = stop;
  this.reset  = reset;
};
let timerObject=new Stopwatch(document.querySelector(".timerr"));
let audioObject1=new Audio("audioFiles/audio1.mp3");
let audioObject2=new Audio("audioFiles/new1.mp3");
let audioObject3=new Audio("audioFiles/metallic.mp3");

document.querySelector("#l1").addEventListener("click",function(){
  document.querySelector("#l1").classList.add("tapped");
  setTimeout(function(){document.querySelector("#l1").classList.remove("tapped");},200);
  if(count===1)
  {
    if(!levelValue)
    {
      levelValue=1;
      document.querySelector("#l1").classList.add("tapped");
      setTimeout(function(){document.querySelector("#l1").classList.remove("tapped");},200);
      document.querySelector(".lookControl").innerHTML="<br>click to start";
      document.querySelector("#l2").style.opacity="0.3";
      document.querySelector("#l3").style.opacity="0.3";
    }
  }
});
document.querySelector("#l2").addEventListener("click",function(){
  document.querySelector("#l2").classList.add("tapped");

  setTimeout(function(){document.querySelector("#l2").classList.remove("tapped");},200);

  if(count===1)
  {
    if(!levelValue)
    {
      levelValue=2;
      document.querySelector("#l1").classList.add("tapped");
      setTimeout(function(){document.querySelector("#l1").classList.remove("tapped");},200);
      document.querySelector(".lookControl").innerHTML="<br>click to start";
      document.querySelector("#l1").style.opacity="0.3";
      document.querySelector("#l3").style.opacity="0.3";
    }
  }
});
document.querySelector("#l3").addEventListener("click",function(){
  document.querySelector("#l3").classList.add("tapped");

  setTimeout(function(){document.querySelector("#l3").classList.remove("tapped");},200);

  if(count===1)
  {
    if(!levelValue)
    {
      levelValue=3;
      document.querySelector("#l1").classList.add("tapped");
      setTimeout(function(){document.querySelector("#l1").classList.remove("tapped");},200);
      document.querySelector(".lookControl").innerHTML="<br>click to start";
      document.querySelector("#l2").style.opacity="0.3";
      document.querySelector("#l1").style.opacity="0.3";
    }
  }
});
