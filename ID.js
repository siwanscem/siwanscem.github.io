let profilepic = document.getElementById("profilepic");
let inputFile = document.getElementById("input-file");
inputFile.onchange = function () {
  profilepic.src = URL.createObjectURL(inputFile.files[0]);
};

const seti = "<h1>siwan engineering <br />& technical institute</h1>";
const scem =
  "<h1>siwan college of <br /><span>engineering & management</span></h1>";

let clicked = false;

function generateHTML() {
  const clicked = 1;

  if (clicked) {
    heading = seti;
    lglink = "/asset/old logo.jpg";
  } else {
    heading = scem;
    lglink = "/asset/newlogo.png";
  }

  const name = document.getElementById("name").value;
  const session = document.getElementById("session").value;
  const imglink = document.getElementById("profilepic").src;
  const bgrp = document.getElementById("bgrp").value;
  const rh = document.getElementById("rh").value;
  const course = document.getElementById("course").value;
  const branch = document.getElementById("branch").value;
  const fname = document.getElementById("fname").value;
  const rno = document.getElementById("rno").value;
  const mob = document.getElementById("mob").value;
  const bd = document.getElementById("bd").value;
  const bm = document.getElementById("bm").value;
  const by = document.getElementById("by").value;
  const area = document.getElementById("area").value;
  const dist = document.getElementById("dist").value;

  const pin = document.getElementById("pin").value;
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Student ID Card@SCEM</title>
     
  </head>
  <body>
    <br /><br /><br /><br />
    <div id="card">
      ${heading}
      <div class="flex">
        <span>Session : ${session}</span>
        <img id="pic" src="${imglink}" alt="_picture" />
        <span>&#129656;<br />${bgrp}<sup style="display: inline">${rh}</sup></span>
      </div>
      <div><i>&nbsp;${name}&nbsp;</i></div>
      <div>
        <span> Course : <span>${course}</span> </span>
        <span> Branch : <span>${branch}</span> </span>
      </div>
      <table>
        <tr>
          <td>F. Name</td>
          <td>: ${fname}</td>
        </tr>
        <tr>
          <td>Roll No.</td>
          <td>: ${rno}</td>
        </tr>
        <tr>
          <td>D.O.B.</td>
          <td>: ${bd}-${bm}-${by}</td>
        </tr>
        <tr>
          <td>Mob.</td>
          <td>: ${mob}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>: ${area}${dist}${pin} &nbsp;&nbsp;&nbsp;</td>
        </tr>
      </table>
      
      <div>
        <img id="spic" src="asset/principlesign.svg" alt="sign_" />
        <span><i>Issuing Authority</i></span>
      </div>
      <div>
        <span> Islamia Nagar, Surapur, Siwan - 841226 </span>
        <span> Mob : 9801979696, 8271870080, 8298078825 </span>
      </div>

       <div id="logo">
        <img src="${lglink}" alt="logo" id="lg"/>
      </div>
      <div id="grad">
        <div><span>
          &nbsp;
        </span><span>
          &nbsp;
        </span><span>
          &nbsp;
        </span><span>
          &nbsp;
        </span></div>
  
  
        <div><span>
          &nbsp;
        </span>
        <span>
          &nbsp;
        </span>
        <span>
          &nbsp;
        </span>
        <span>
         &nbsp;
        </span>
         </div>
      </div>
    </div>

    <br /><br />
    <button id="pre" onclick="hide();window.print();">
      Print this ID-Card
    </button>
  </body>
</html>

  `;

  document.getElementById("generatebtn").innerText = "Update Details";

  document.getElementById("idcard").innerHTML = htmlContent;
}

function hide() {
  document.getElementById("tohide1").style.display = "none";
  document.getElementById("tohide2").style.display = "none";
  document.getElementById("pre").style.display = "none";
}
