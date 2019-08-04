
let div1 = document.querySelector('#八卦-wrapper')
console.log(div1)
let dragging = false
let lastX
let lsatY
div1.onmousedown = function (e) {
    dragging = true
    lastX = e.clientX
    lsatY = e.clientY
}

document.onmousemove = function (e) {
    if (dragging === true) {
        let deltaX = e.clientX - lastX
        let deltaY = e.clientY - lsatY
        let top = parseInt(div1.style.top) || 0
        let left = parseInt(div1.style.left) || 0
        let resultY = top + deltaY
        let resultX = left + deltaX

        if (resultY < 0) {
            resultY = 0
        }
        if (resultX < 0) {
            resultX = 0
        }
        div1.style.top = resultY + 'px'
        div1.style.left = resultX + 'px'
        lastX = e.clientX
        lsatY = e.clientY

    }
    document.onmouseup = function () {
        dragging = false
    }
}
