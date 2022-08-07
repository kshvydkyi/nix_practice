function draw(figure) {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext && figure === 'rect') {
        let ctx = canvas.getContext('2d');
        ctx.fillRect(25, 25, 100, 100);
    }
    else if(canvas.getContext && figure === 'triangle'){
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(150,50);
        ctx.lineTo(175,75);
        ctx.lineTo(175,25);
        ctx.fill();
    }
}

draw('rect')
draw('triangle')