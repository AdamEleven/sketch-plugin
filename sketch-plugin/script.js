/* eslint-disable */
;(function () {
  let imgIsShowing = false;

  // 最外层容器
  const box = document.createElement('div');
  box.className = 'layer-img';
  box.style = 'position: fixed; z-index: 9999; top: 0; left: 0; bottom: 0; right: 0; opacity: .7; font-size: 16px; display: none; overflow: auto; background-color: rgb(0, 255, 255, .4);';
  box.onscroll = function (e) {
    e.stopPropagation();
  };
  box.onmousemove = function (e) {
    e.stopPropagation();
  };
  box.ontouchmove = function (e) {
    e.stopPropagation();
  };
  box.onmousewheel = function (e) {
    e.stopPropagation();
  };

  function ctrlScroll() {
    box.style.pointerEvents = 'all';
  }

  function unCtrlScroll() {
    box.style.pointerEvents = 'none';
  }

  // 浮层组件
  const img = document.createElement('img');
  img.style = 'display: block; width: 100%; position: static; padding: 200px 0;';
  img.src = '';

  function showImg() {
    box.style.display = 'block';
  }

  function hideImg() {
    box.style.display = 'none';
  }

  function switchImg() {
    let url = input.value;
    if (!/^https?:\/\//.test(url)) {
      if (/^\//) url = url.replace('/', '');
      url = 'http://localhost:8228/' + url;
    }
    img.src = url;
  }

  // 开关
  const btn = document.createElement('div');
  btn.innerText = 'toggle';
  btn.style = 'position: fixed; z-index: 10000; top: 8px; right: 8px; opacity: 1; font-size: 16px; width: 60px; height: 22px; border: 1px solid #000; border-radius: 4px; text-align: center;';
  btn.onclick = function () {
    toggleImg();
  };

  // 图片地址
  var input = document.createElement('input');
  input.placeholder = '请输入视觉稿地址, 按回车生效';
  input.style = 'position: fixed; z-index: 10000; top: 8px; left: 8px; font-size: 16px; width: 260px; height: 22px;';
  input.onkeydown = function (e) {
    if (e.keyCode == 13) {
      switchImg();
      this.blur();
    }
  };

  // 图片展示开关
  function toggleImg() {
    if (imgIsShowing) hideImg();
    else showImg();
    imgIsShowing = !imgIsShowing;
  }

  // 快捷键注册
  (function () {
    let ctrl = option = x = false;
    window.onkeydown = function (e) {
      const code = e.keyCode;
      if (code === 17) ctrl = true;
      if (code === 18) option = true;
      if (code === 88) x = true;

      if (code === 38) {
        box.scrollTop += 1;
        e.preventDefault();
      } // ↑
      if (code === 40) {
        box.scrollTop -= 1;
        e.preventDefault();
      } // ↓
      if (ctrl && option && x) toggleImg();
    };
    window.onkeyup = function (e) {
      const code = e.keyCode;
      if (code === 17) ctrl = false;
      if (code === 18) option = false;
      if (code === 88) x = false;
    };
  }());

  // 样式
  const imgStyle = document.createElement('style');
  imgStyle.innerText = '.layer-img::after {  content: ""; position: fixed; z-index: 10001;  left: 0; top: 0; right: 0; bottom: 0;  border: 3px solid green; pointer-events: none;}';

  // 添加到页面
  box.appendChild(img);
  box.appendChild(input);
  document.body.appendChild(box);
  document.body.appendChild(btn);
  document.body.appendChild(imgStyle);
})()