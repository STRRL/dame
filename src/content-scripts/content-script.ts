function appendDameModal() {
    const modal = document.createElement("div");
    modal.id = "dame-overlay"
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.93)";
    modal.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
    modal.style.backdropFilter = "blur(16px)";
    modal.style.zIndex = "10000"

    const imageUrl = chrome.runtime.getURL("icons/dame.png")
    modal.innerHTML = `
    <div id="dame-overlay-content" style="
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    ">
    <img src=${imageUrl}></img>
    </div>
    `
    document.body.appendChild(modal);
    dameModalAppended = true;
}

let dameModalAppended = false;

async function checker() {
    // if current minute is in 25-30 or in 55-60
    const currentMinute = new Date().getMinutes();
    if ((currentMinute >= 25 && currentMinute <= 30) || (currentMinute >= 55 && currentMinute <= 60)) {
        return;
    }

    // if current tab is twitter or youtube
    if (document.URL.includes("https://twitter.com") || document.URL.includes("https://youtube.com") || document.URL.includes("https://www.youtube.com")) {
        if (!dameModalAppended) {
            appendDameModal();
        }
    }
}

async function main() {
    setInterval(checker, 1000);
}
 
main();
