class Bullet {
    constructor (ctx, x, y, fillStyle, lightness, hardness, xFriction) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.y0 = 257 + 75;
        this.r = 5; 
        this.w = this.r;
        this.h = this.r;
        this.vx = 10;
        this.vy = 1;
        this.ax = 0;
        this.ay = 0.5;
        this.lightness = lightness;
        this.hardness = hardness;
        this.xFriction = xFriction;
        this.fillStyle = fillStyle;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }
    move() {
        this.vx += this.ax;
        this.vy += this.hardness;
        this.x += this.vx;
        this.y += this.vy;
        // if (this.x + this.w >= this.ctx.canvas.width || this.x <= 0){
        //     this.vx *= -1;
        // }
        if (this.y + this.h >= this.y0) {
            this.y = this.y0 - this.h;
            this.vy *= this.lightness;
            if(this.vy < 0 && this.vy >- 2.1) {
                this.vy = 0;
            }
            this.friction();
        }
    }
    friction() {
        if(this.vx >= 0) {
            this.vx -= this.xFriction;
        }
        if(this.vx <= 0) {
            this.vx += this.xFriction;
        }   
    }
}