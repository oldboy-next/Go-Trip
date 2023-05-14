// logo 入场动画

// jquery
$(document).ready(() =>
{
    window.addEventListener("scroll", down);

    let iter = gen();

    try
    {
        for (const value of iter)
        {
            iter.next();
        }
    } catch (error)
    {
        console.log("Error");
    }
})

// 动画序列
function* gen()
{
    yield $(".link-top").hide().slideDown(500,);
    yield $(".link-nav").hide().slideDown(600);
    yield $(".search").hide().slideDown(700);
    yield $(".phone").hide().slideDown(800);
    return "END ANIM";
}

// 导航栏颜色
let isScroll = false;
function down()
{
    if (window.scrollY === 0 && isScroll === true)
    {
        $(".header-nav").css("height", "85px");
        let color = $("html").hasClass("dark") ? "rgba(19,19,19,0.2)" : "rgba(255,255,255,0.2)";
        $(".header-nav").css("background", color);

        isScroll = false;
    }
    if (window.scrollY > 0 && isScroll === false)
    {
        $(".header-nav").css("height", "110px");

        let color = $("html").hasClass("dark") ? "rgba(19,19,19,1)" : "rgba(255,255,255,1)";
        $(".header-nav").css("background", color);
        isScroll = true;
    }
}