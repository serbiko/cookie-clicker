let cookieCount = 0;

document.getElementById("cookie").addEventListener("click", function() {
    cookieCount++;
    document.getElementById("cookieCount").innerText = cookieCount;
});
