// logo 入场动画

$(document).ready(() =>
{
    Awake();
    window.addEventListener("scroll", down);
})

function Awake()
{
    var icon = $("#logo-img").hide();
    var font = $("h1").hide();

    var top = $(".header-nav");
    top.hide(0).slideDown(1000, () =>
    {
        icon.fadeIn(1000);
        font.fadeIn(2000)

        $(".link-nav>a").animate({
            opacity: "1"
        }, 1000);
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

var play = true;
// 导航栏颜色
function down()
{
    var top = $(".header-nav");
    if (window.scrollY < 50 && play === true)
    {
        console.log("up");
        top.css("background", "rgba(255, 255, 255, 0.2)")
        play = false;
    }
    if (window.scrollY > 50 && play === false)
    {
        console.log("down");
        top.css("background", "rgb(19, 19, 19)")
        play = true;
    }
}