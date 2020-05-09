let canv    = document.getElementById('canv'),
    ctx     = canv.getContext('2d');

let h = window.innerHeight,
    w = window.innerWidth;

canv.width  = w;
canv.height = h;

let s         = 20,    //площать клетки
    sw        = w / s, //кол-во клеток в ширину
    sh        = h / s, //кол-во клеток в высоту
    border    = 4, //обводка
    snakeLong = 5, //Первоначальная длина змейки
    dir       = 1; //Первоначальное направление змейки

let snake = []; //змейка
for(let i = 0; i < snakeLong; i++) {
    snake.push({x: ~~(sw / 2) - i, y: ~~(sh / 2)});
}

document.onkeydown = keyDown;

const interval = setInterval(function() { //16.6 фпс
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = '#ddd';
    
    for(let i = 0; i < sw; i++) {
        ctx.fillRect(i * s, 0, border, h);
    }

    for(let i = 0; i < sh; i++) {
        ctx.fillRect(0, i * s, w, border);
    }

    ctx.fillStyle = 'green';
    for(let i = 0; i < snake.length; i++) {
        let x = snake[i].x;
        let y = snake[i].y;
        ctx.fillRect(x * s + border, y * s + border, s - border, s - border);    
    }
    
    for (let i = snake.length - 1; i > 0; i--) {
		snake[i].x = snake[i - 1].x;
		snake[i].y = snake[i - 1].y;
	}
    
    let dx = snake[0].x,//первоначальная координата головы змейки по x
        dy = snake[0].y;//первоначальная координата головы змейки по y
    if(dir == 0) {
        dy--;
    }
    else if(dir == 1) {
        dx++;
    }
    else if(dir == 2) {
        dy++;
    } else {
        dx--;
    }
    snake[0].x = (dx % sw + sw) % sw;
    snake[0].y = (dy % sh + sh) % sh;
}, 60);
   
function keyDown(e) {
    let newDir;
    if(e.keyCode == 38 || e.keyCode == 87) {
        newDir = 0;
    }
    if(e.keyCode == 39 || e.keyCode == 68) {
        newDir = 1;
    }
    if(e.keyCode == 40 || e.keyCode == 83) {
        newDir = 2;
    }
    if(e.keyCode == 37 || e.keyCode == 65) {
        newDir = 3;
    }
    if(((dir + 2) % 4) != newDir) {
        dir = newDir;
    }
}













//let cnv = document.getElementById('cnv');
//let ctx = cnv.getContext('2d');
//
//let w = window.innerWidth;
//let h = window.innerHeight;
//cnv.width = w;
//cnv.height = h;
//
//let s = 40;
//let sw = ~~(w / s) - 1;
//let sh = ~~(h / s) - 1;
//let border = 4;
//
//let dirChanged = false;
//let dir = 1;
//let snake = [];
//for (let i = 0; i < 3; i++) {
//	snake.push({x: ~~(sw / 2) - i, y: ~~(sh / 2)});
//}
//
//let foodX = 0;
//let foodY = 0;
//newFood();
//
//function newFood() {
//	let valid = true;
//	do {
//		foodX = ~~(Math.random() * sw);
//		foodY = ~~(Math.random() * sh);
//		valid = true;
//		for (let i = 0; i < snake.length; i++) {
//			if(foodX == snake[i].x && foodY == snake[i].y) {
//				valid = false;
//			}
//		}
//	} while(!valid);
//}
//
//function newSnake() {
//	dir = 1;
//	snake = [];
//	for (let i = 0; i < 3; i++) {
//		snake.push({x: ~~(sw / 2) - i, y: ~~(sh / 2)});
//	}
//}
//
//setInterval(update, 100);
//document.onkeydown = keyDown;
//
//update();
//function update() {
//	ctx.clearRect(0, 0, w, h);
//	ctx.fillStyle = '#ddd';
//	for (let i = 0; i <= sw; i++) {
//		ctx.fillRect(i * s, 0, border, sh * s + border);
//	}
//	for (let i = 0; i <= sh; i++) {
//		ctx.fillRect(0, i * s, sw * s + border, border);
//	}
//  ctx.fillStyle = '#47d';
//	ctx.fillRect(foodX * s + border, foodY * s + border, s - border, s - border);
//  ctx.fillStyle = '#333'
//	let dx = snake[0].x;
//	let dy = snake[0].y;
//	if(dx == foodX && dy == foodY) {
//		newFood();
//		snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
//	}
//	for (let i = 0; i < snake.length; i++) {
//		let x = snake[i].x;
//		let y = snake[i].y;
//		ctx.fillRect(x * s + border, y * s + border, s - border, s - border);
//	}
//	for (let i = snake.length - 1; i > 0; i--) {
//		snake[i].x = snake[i - 1].x;
//		snake[i].y = snake[i - 1].y;
//	}
//	if(dir == 0) {
//		dy--;
//	}
//	else if(dir == 1) {
//		dx++;
//	}
//	else if(dir == 2) {
//		dy++;
//	}
//	else {
//		dx--;
//	}
//	snake[0].x = (dx % sw + sw) % sw;
//	snake[0].y = (dy % sh + sh) % sh;
//	for (let i = 1; i < snake.length; i++) {
//		if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
//			newFood();
//			newSnake();
//		}
//	}
//	dirChanged = false;
//}
//
//function keyDown(e) {
//	if(dirChanged) return;
//	let newDir = -1;
//	switch(e.keyCode) {
//		case 87:
//			newDir = 0;
//			break;
//		case 68:
//			newDir = 1;
//			break;
//		case 83:
//			newDir = 2;
//			break;
//		case 65:
//			newDir = 3;
//			break;
//	}
//  if(newDir == -1) return;
//	if(((dir + 2) % 4) != newDir) {
//		dir = newDir;
//		dirChanged = true;
//	}
//}
