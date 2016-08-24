function MilkyWay(t) {
    this.init = function () {
        return this.freezed = !1, this.speedOffset = 0, this.canvas = document.getElementById(t.id), this.canvas ? (this.ctx = this.canvas.getContext("2d"), this.stars = [], this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.centerX = this.canvas.width / 2, this.centerY = this.canvas.height / 2, this.audio = t.soundId ? document.getElementById(t.soundId) : null, void this.populateSky()) : !1
    }, this.random = function (t, a, i) {
        return parseFloat(Math.min(t + Math.random() * (a - t), a).toFixed(i || 4))
    }, this.randomInt = function (t, a) {
        var i = t + Math.random() * (a + 1 - t);
        return i = Math.floor(i)
    }, this.randomDistribution = function () {
        return arguments[Math.floor(Math.random() * arguments.length)]
    }, this.toRad = function (t) {
        return t * (Math.PI / 180)
    }, this.playAudio = function (t) {
        var a = this.audio;
        t && (this.audioStopped = !1), a && !this.audioStopped && (this.audio.play(), $(a).stop().animate({volume: .3}))
    }, this.pauseAudio = function (t) {
        var a = this.audio;
        t && (this.audioStopped = !0), a && $(a).stop().animate({volume: 0}, function () {
            a.pause()
        })
    }, this.registerHandler = function (t) {
        var a = this;
        t = t ? document.querySelector(t) : this, t.addEventListener("mousemove", function (t) {
            var i = Math.abs(a.centerX - t.clientX), e = Math.abs(a.centerY - t.clientY), n = Math.max(i, e), s = Math.abs(a.centerX - i), h = Math.abs(a.centerY - e), r = Math.min(s, h);
            150 > n ? (a.freezed = !0, a.speedOffset = Math.min(.2, r / 13e3)) : (a.freezed = !1, a.speedOffset = Math.min(.2, r / 5e3))
        })
    }, this.populateSky = function () {
        var a = Math.round(Math.sqrt(Math.pow(this.centerY, 2) + Math.pow(this.centerX, 2))), i = Math.floor(this.canvas.width * t.popularity);
        this.stars = [];
        for (var e = 0; i > e; e++) {
            var n = {};
            n.color = [231, 8, 8], n.angle = Math.ceil(360 * Math.random()), n.opacity = this.random(.15, .85), n.width = this.randomDistribution(3, 2, 2, 2, 2, 1), n.length = n.width / 2e3, n.trailLength = 0, n.radius = this.randomDistribution(this.randomInt(0, a), this.randomInt(25, a), this.randomInt(45, a), this.randomInt(50, a)), n.speed = Math.abs((20 / n.radius + Math.random()) / 150), this.stars.push(n)
        }
    }, this.clearCtx = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }, this.drawStars = function () {
        this.clearCtx();
        for (var a = 0; a < this.stars.length; a++) {
            var i = this.stars[a];
            i.angleRad = this.toRad(i.angle), i.angleRadEnd = i.angleRad + i.length, i.angleRadStart = i.angleRadStart ? i.angleRadStart : i.angleRad, this.freezed ? i.trailLength > t.maxTrailLength && (i.angleRadStart = i.angleRadEnd - i.trailLength) : i.angleRadStart = Math.min(i.angleRadStart + (t.freezedRollupSpeed + i.trailLength / 30), i.angleRad), i.trailLength = i.angleRadEnd - i.angleRadStart;
            var e = -Math.min(i.trailLength, .6);
            this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(" + i.color[0] + "," + i.color[1] + "," + i.color[2] + "," + Math.max(i.opacity + e, .1) + ")", this.ctx.lineCap = "round", this.ctx.lineWidth = i.width, this.ctx.arc(this.centerX, this.centerY, i.radius, i.angleRadStart, i.angleRadEnd, !1), this.ctx.stroke(), i.angle += Math.max(i.speed + this.speedOffset, t.speedMin), 360 == i.angle && (i.angle = 0)
        }
    }, this.paused = !1, this.animated = !1, this.animateSky = function () {
        function t() {
            a = Date.now(), i = a - s, i > h && (s = a - i % h, e.drawStars()), e.paused ? e.animated = !1 : requestAnimationFrame(t)
        }

        var a, i, e = this, n = 351, s = Date.now(), h = 1e3 / n;
        t()
    }, this.playAnimate = function () {
        this.paused = !1, this.speedOffset = 0, this.freezed = !1, this.animated || (this.animateSky(), this.animated = !0), $(this.canvas).animate({opacity: 1}), this.playAudio()
    }, this.pauseAnimate = function () {
        this.paused = !0, this.freezed ? $(this.canvas).animate({opacity: .2}) : $(this.canvas).animate({opacity: .5}), this.pauseAudio()
    };
    var a = this;
    window.onresize = function () {
        a.init()
    }, this.init()
}