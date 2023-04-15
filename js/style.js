var sWidth = window.innerWidth - 17;
var sHeight = window.innerHeight - 60;

$(() =>
{

    var home = $(".home");
    console.log(window.innerWidth);
    home.css("width", `${(sWidth)}`);
    home.css("height", `${sHeight}`);

    var box = $(".box");
    box.css("width", `${(window.innerWidth) * 4}`);
    box.css("height", `${(window.innerHeight) - 60}`);

    $(".box>img").css("width", `${sWidth}`);
    $(".box>img").css("height", `${sHeight}`);

})

// 判断鼠标移动方向
var lastX = 0;
var moveV = 0;
window.addEventListener("mousedown", function (event)
{
    // 100 - 0 = 100 l = 100
    // 120 - 100 = 20 else 90 - 100 = -10
    var currentX = event.clientX;
    var deltaX = currentX - lastX;
    if (deltaX > 0)
    {
        console.log("向右移动");

    } else if (deltaX < 0)
    {
        console.log("向左移动")
    }
    lastX = currentX;

});

