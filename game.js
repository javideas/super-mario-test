class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.interval = null;
        this.bg = new Background(ctx);
        this.mario = new Mario(ctx);
    }
    start(){
        this.initListeners();

        this.interval = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
        }, 1000/60);
    }
    initListeners() {
        document.onkeydown = e => {
            game.mario.onKeyDown(e.keyCode);
        }
        
        document.onkeyup = e => {
            game.mario.onKeyUp(e.keyCode);
        }
    }
    stop(){
        clearInterval(this.interval);
    }
    draw(){
        this.bg.draw();
        this.mario.draw();
    }
    move(){
        this.bg.move();
        this.mario.move();
    }
    clear(){
        this.mario.clearBullets();
        this.ctx.clearRect(
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
        )
    }
}