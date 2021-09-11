let canvas = document.getElementById('canvas')
let ctx = canvas.getContext("2d")
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

ctx.fillStyle = "black"
ctx.strokeStyle = "none"
ctx.clientWidth = 8
ctx.lineCap = 'round'

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}


let painting = false
let last = []
let isTouchDevice = 'ontouchstart' in document.documentElement

if (isTouchDevice) {
    canvas.ontouchStart = (e) => {
        //  painting = true
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY
        last = [x, y]


    }
    canvas.ontouchmove = (e) => {
            let x = e.touches[0].clientX
            let y = e.touches[0].clientY
                //  if (painting === true) {
            drawLine(last[0], last[1], x, y)
            last = [x, y]
                // }


        }
        // canvas.ontouchend = e => {
        //     painting = false

    // }
} else {
    canvas.onmousedown = (e) => {
        painting = true
        last = [e.clientX, e.clientY]
    }
    canvas.onmousemove = (e) => {
        if (painting === true) {
            drawLine(last[0], last[1], e.clientX, e.clientY)
            last = [e.clientX, e.clientY]
        }

    }
    canvas.onmouseup = () => {
        painting = false
    }
}