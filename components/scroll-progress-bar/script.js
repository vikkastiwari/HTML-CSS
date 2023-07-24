window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (winScroll / height) * 100;
    
    document.querySelector(".scroll-progress-bar").style.width = `${scrollProgress}%`;
});