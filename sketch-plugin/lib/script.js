!function(){let o=!1;const t=document.createElement("div");t.className="layer-img",t.style="position: fixed; z-index: 9999; top: 0; left: 0; bottom: 0; right: 0; opacity: .7; font-size: 16px; display: none; overflow: auto; background-color: rgb(0, 255, 255, .4);",t.onscroll=function(o){o.stopPropagation()},t.onmousemove=function(o){o.stopPropagation()},t.ontouchmove=function(o){o.stopPropagation()},t.onmousewheel=function(o){o.stopPropagation()};const e=document.createElement("img");e.style="display: block; width: 100%; position: static; padding: 200px 0;",e.src="";const n=document.createElement("div");n.innerText="toggle",n.style="position: fixed; z-index: 10000; top: 8px; right: 8px; opacity: 1; font-size: 16px; width: 60px; height: 22px; border: 1px solid #000; border-radius: 4px; text-align: center;",n.onclick=function(){p()};var i=document.createElement("input");function p(){t.style.display=o?"none":"block",o=!o}i.placeholder="请输入视觉稿地址, 按回车生效",i.style="position: fixed; z-index: 10000; top: 8px; left: 8px; font-size: 16px; width: 260px; height: 22px;",i.onkeydown=function(o){13==o.keyCode&&(function(){let o=i.value;/^https?:\/\//.test(o)||(o=o.replace("/",""),o="http://localhost:8228/"+o),e.src=o}(),this.blur())},function(){let o=option=x=!1;window.onkeydown=function(e){const n=e.keyCode;17===n&&(o=!0),18===n&&(option=!0),88===n&&(x=!0),38===n&&(t.scrollTop+=1,e.preventDefault()),40===n&&(t.scrollTop-=1,e.preventDefault()),o&&option&&x&&p()},window.onkeyup=function(t){const e=t.keyCode;17===e&&(o=!1),18===e&&(option=!1),88===e&&(x=!1)}}();const d=document.createElement("style");d.innerText='.layer-img::after {  content: ""; position: fixed; z-index: 10001;  left: 0; top: 0; right: 0; bottom: 0;  border: 3px solid green; pointer-events: none;}',t.appendChild(e),t.appendChild(i),document.body.appendChild(t),document.body.appendChild(n),document.body.appendChild(d)}(),module.exports={};