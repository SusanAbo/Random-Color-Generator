let color_view= document.querySelector('.color-view');
let btn = document.querySelector('.btn')
let color_code = document.querySelector('#color-code')


const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

  btn.addEventListener('click', (event)=>{
    event.preventDefault();
    let currentColor = hexaColor()
    color_code.innerHTML = currentColor;
    color_code.style.color = currentColor;
    color_view.style.backgroundColor = currentColor;
  })

    
