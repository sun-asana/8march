(function() {
    // Создаем слой для частиц, если его еще нет
    let trailLayer = document.getElementById('gh-trail-layer');
    if (!trailLayer) {
        trailLayer = document.createElement('div');
        trailLayer.id = 'gh-trail-layer';
        trailLayer.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:999999;overflow:hidden;';
        document.body.appendChild(trailLayer);
    }

    const colors = ["#fff700", "#ff85a2", "#e2daff"];
    let lastMove = 0;

    window.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastMove < 30) return;
        lastMove = now;

        // Используем clientX/Y для игнорирования смещений самого окна
        const x = e.clientX;
        const y = e.clientY;

        const particle = document.createElement('div');
        const size = Math.random() * 5 + 3;

        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.8;
            filter: blur(1px);
            box-shadow: 0 0 5px white;
            transition: transform 0.8s ease-out, opacity 0.8s;
            z-index: 1000000;
        `;
        trailLayer.appendChild(particle);

        setTimeout(() => {
            particle.style.transform = `translate(${(Math.random() - 0.5) * 50}px, ${(Math.random() - 0.5) * 50}px) scale(0)`;
            particle.style.opacity = "0";
        }, 20);

        setTimeout(() => particle.remove(), 800);
    });
})();
