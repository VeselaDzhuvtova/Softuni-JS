function housePainting (input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let wallArea = x * y;
    let windowArea = 1.5 * 1.5;
    let walls = 2 * wallArea - 2 * windowArea;

    let backWall = x * x;
    let door = 1.2 * 2;
    let frontWall = backWall - door;
    let frontAndBackWalls = backWall + frontWall;
    let totalAreaWalls = walls + frontAndBackWalls;

    let greenPaint = totalAreaWalls / 3.4;

    let roofRectangle = 2 * (x * y);
    let roofTriangle = 2 * (x * h / 2);
    let totalAreaRoof = roofRectangle + roofTriangle;
    let redPaint = totalAreaRoof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2))

}
housePainting([6, 10, 5.2])