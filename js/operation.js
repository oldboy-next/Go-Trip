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
    var input = document.querySelector(".frame input");
    // var button = document.querySelector(".search-frame button");
    if (disabled)
    {
        input.removeAttribute("disabled");
        // button.removeAttribute("disabled");
    }
    else
    {
        input.setAttribute("disabled", "");
        // button.setAttribute("disabled", "");
    }
}

// 搜索功能
function onSearch()
{
    var input = document.querySelector(".frame input");
    // window.location.href = "https://www.writingo.net/document?source=new1";   

    // var action = document.querySelector(".frame a");
    if (!input.value)
    {
        // action.removeAttribute("target")
        console.log("null");
        // action.href = "javascript:void(0)";
        return false;

    }
    else
    {
        var url = `https://cn.bing.com/search?q=${input.value}`;
        // action.setAttribute("target", "_blank");
        // action.href = url;
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
