const messages = [
    "Chúc bạn lúc nào cũng phong độ và vui vẻ như bây giờ nha! 😎✨",
    "Chúc bạn một ngày thật chill, không căng thẳng, không áp lực 💙",
    "Mong hôm nay bạn gặp toàn điều may mắn, làm gì cũng thuận lợi nha! 👍",
    "Chúc bạn luôn mạnh mẽ, bình tĩnh và tự tin trong mọi chuyện 💪💫",
    "Hy vọng ngày của bạn sẽ vui như cách bạn cười vậy 😄🔥",
    "Chúc bạn luôn khỏe, luôn giỏi và luôn là phiên bản tốt nhất của chính mình 💙",
    "Hôm nay nhớ nghỉ ngơi, ăn ngon và đối xử tốt với bản thân nha bro 😌🍀",
    "Chúc bạn ngày càng bản lĩnh, điềm đạm và cuốn hút hơn nữa 😎🔥"
];

function openEnvelope() {
    document.getElementById("openSound").play();
    document.getElementById("envelope").style.display = "none";
    document.getElementById("nameForm").style.display = "block";
    document.getElementById("nameInput").focus();
}

function submitName() {
    const name = document.getElementById("nameInput").value.trim();
    if (name === "") {
        alert("Hãy nhập tên nhé!");
        return;
    }

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("userName").innerText = `Chúc mừng ${name}! 💖`;
    document.getElementById("randomMessage").innerText = randomMessage;

    document.getElementById("nameForm").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("msgSound").play();
}

// Nhấn Enter cũng submit được
document.getElementById("nameInput").addEventListener("keyup", function(e){
    if (e.key === "Enter") submitName();
});
