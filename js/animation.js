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
        let top = $(".header-nav");
        console.log("up");
        top.css("background", "rgba(255, 255, 255, 0.2)");
        top.css("height", "85px")
        isScroll = false;
    }
    if (window.scrollY > 0 && isScroll === false)
    {
        let top = $(".header-nav");
        console.log("down");
        top.css("background", "rgb(19, 19, 19)")
        top.css("height", "110px")
        isScroll = true;
    }
}