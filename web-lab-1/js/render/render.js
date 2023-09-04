const canvas = document.getElementById("canvas");

function draw(r, pointxVal, pointyVal) {
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        const size = 300; /////////////????
        canvas.setAttribute("width", size.toString());
        canvas.setAttribute("height", size.toString());
        if (r === undefined) {
            r = 5; /////////////????
        }

        drawPolygon(ctx, size, r);
        drawAxes(ctx, size);
        drawText(ctx, size, r);
        
        if (pointxVal && pointyVal) {
            drawPoint(ctx, size, pointxVal, pointyVal)
        }

    } else {
        //canvas-unsupported code
    }
    function drawPolygon(ctx, size, r) {
        let totalPoints = 12;
        let pointInPixels = size / totalPoints;
        //draw rect
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.fillRect(size / 2, size / 2, -r * pointInPixels / 2, r * pointInPixels);
        //draw triangle
        ctx.beginPath();
        ctx.moveTo((size / 2), size / 2);
        ctx.lineTo(size / 2 + r * pointInPixels, size / 2);
        ctx.lineTo(size / 2, size / 2 + r * pointInPixels);
        ctx.fill();
        //draw circle
        ctx.beginPath();
        ctx.moveTo(size / 2, size / 2);
        ctx.arc(size / 2, size / 2, r * pointInPixels, 0, 3 * Math.PI / 2, Math.PI);
        ctx.fill()
    }
    //Прорисовка осей координат
    function drawAxes(ctx, size) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, size / 2, size, 1);
        ctx.fillRect(size / 2, 0, 1, size);
        // ctx.beginPath(); //Понять
        // ctx.arc(size/2,size/2,3,0,2*Math.PI,false);
        // ctx.fill();
    }
    //Подписи для осей
    function drawText(ctx, size, r) {
        let totalPoints = 12;
        let pointInPixels = size / totalPoints;
        ctx.fillStyle = "black";
        ctx.font = "15px serif";/////////////????
        //право
        ctx.fillText("R", size / 2 + r * pointInPixels, size / 2);
        ctx.fillText("R/2", size / 2 + r * pointInPixels / 2, size / 2);
        //низ
        ctx.fillText("R", size / 2, size / 2 + r * pointInPixels);
        ctx.fillText("R/2", size / 2, size / 2 + r * pointInPixels / 2);
        //верх
        ctx.fillText("R", size / 2, size / 2 - (r * pointInPixels));
        ctx.fillText("R/2", size / 2, size / 2 - (r * pointInPixels / 2));
        //Лево
        ctx.fillText("R/2", size / 2 - (r * pointInPixels / 2), size / 2);
        ctx.fillText("R", size / 2 - r * pointInPixels, size / 2);

    }

    function drawPoint(ctx, size, xVal, yVal) {
        ctx.fillStyle = "red";
        let totalPoints = 12;
        let pointInPixels = size / totalPoints
        ctx.beginPath()
        ctx.arc(size / 2 + pointInPixels * xVal, size / 2 - yVal * pointInPixels, 5, 0, Math.PI * 2)
        ctx.fill();
        return true;

    }
}