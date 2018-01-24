// 图片还没有加载好时颜色填充
export default function (el, binding) {
  // var color = Math.floor(Math.random() * 1000000)// 设置随机颜色
  // el.src = '' // 图片未加载好时设置默认图片
  el.style.backgroundColor = '#b8babc'

  var img = new Image()
  img.src = binding.value// -->binding.value指的是指令后的参数
  img.onload = function () {
    el.style.backgroundColor = ''
    el.src = binding.value
  }
}
