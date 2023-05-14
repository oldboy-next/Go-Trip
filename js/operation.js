// 搜索框
var display = true;
$(() =>
{
    Awake();
    const searchBtn = $("#search");
    const searchFrame = $("#frame");

    searchBtn.click(() =>
    {
        if (display)
        {
            searchFrame.css("opacity", "1");
            setButton(true);
        }
        else
        {
            searchFrame.css("opacity", "0");
            setButton(false);
        }
        display = !display;
    })
})

// 设置按钮状态
function setButton(disabled)
{
    let goBtn = document.querySelector(".search .frame .search-btn");
    let input = document.querySelector(".frame input");
    if (disabled)
    {
        input.removeAttribute("disabled");
        goBtn.setAttribute("style", "display:flex;");
    }
    else
    {
        input.setAttribute("disabled", "");
        goBtn.setAttribute("style", "display:none;");
    }
}

// 搜索功能
function onSearch()
{
    let input = document.querySelector(".frame input");
    if (!input.value)
    {
        // console.log("null");
        return false;
    }
    else
    {
        var url = `https://cn.bing.com/search?q=${input.value}`;
        console.log(url);
        window.open(url);
        return true;
    }

}

// 初始和
var menu = null;
// 初始化函数
function Awake()
{
    document.querySelector(".frame input").addEventListener("keyup", Enter);
    menu = document.querySelector(".link-nav-list");
}

// 回车搜索
function Enter(event)
{
    if (event instanceof Event)
    {
        if (event.key === "Enter")
        {
            onSearch();
        }
    }
}

// 显示菜单
var isMenu = true;
window.addEventListener("resize", function ()
{
    menu.style.transition = "0s";
    if (this.window.screen.availWidth >= 1500)
    {
        menu.classList.remove("hop");
        isMenu = true;
    }
})
function ShowMenu()
{
    if (isMenu)
    {
        menu.style.transition = "opacity 0.4s linear ,height 0.3s linear";
        menu.classList.add("hop");
    }
    else
    {
        menu.classList.remove("hop");
    }

    isMenu = !isMenu;
}

// 主题切换
let dark = true;
function DisplayColor()
{
    let ions = document.querySelectorAll(".display a ion-icon");
    let html = document.querySelector("html");
    let color = "#123fff";
    if (ions[0])
    {
        html.classList.item(0) === "dark" ? html.setAttribute("class", "light") : html.setAttribute("class", "dark");
        if (dark)
        {
            ions[0].setAttribute("style", "display:none;");
            ions[1].setAttribute("style", "display:block;");
            color = window.scrollY === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,1)";
        }
        else
        {
            ions[0].setAttribute("style", "display:block;");
            ions[1].setAttribute("style", "display:none;");
            color = window.scrollY === 0 ? "rgba(19,19,19,0.2)" : "rgba(19,19,19,1)";
        }
        dark = !dark;
        $(".header-nav").css("background", color);
    }
}
