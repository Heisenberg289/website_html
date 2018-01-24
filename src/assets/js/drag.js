// 拖动自定义事件
export default function (el) {
  let oDiv = el
  oDiv.onmousedown = function (e) {
    let l = e.clientX - oDiv.offsetLeft
    let t = e.clientY - oDiv.offsetTop
    document.onmousemove = function (e) {
      oDiv.style.left = e.clientX - l + 'px'
      oDiv.style.top = e.clientY - t + 'px'
    }
    oDiv.onmouseup = function () {
      document.onmousemove = null
      oDiv.onmouseup = null
    }
  }
}
