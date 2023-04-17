// logo 入场动画

// jquery
$(document).ready(() =>
{
    Awake();
    window.addEventListener("scroll", down);
})

// 出初化
function Awake()
{
    var icon = $("#logo-img").hide();
    var font = $("h1").hide();

    var top = $(".header-nav");
    top.hide(0).slideDown(1000, () =>
    {
        icon.fadeIn(1000);
        font.fadeIn(2000);

        $(".link-nav>a").animate({
            opacity: "1"
        }, 1000);
        // window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// 导航栏颜色
function down()
{
    var top = $(".header-nav");
    if (window.scrollY === 0)
    {
        // console.log("up");
        top.css("background", "rgba(255, 255, 255, 0.2)");
        top.css("height", "85px")
    }
    if (window.scrollY > 0)
    {
        // console.log("down");
        top.css("background", "rgb(19, 19, 19)")
        top.css("height", "110px")
    }
}