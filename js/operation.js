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
    let input = document.querySelector(".frame input");
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
    let input = document.querySelector(".frame input");
    // window.location.href = "https://www.writingo.net/document?source=new1";   

    // let action = document.querySelector(".frame a");
    if (!input.value)
    {
        // action.removeAttribute("target")
        console.log("null");
        // action.href = "javascript:void(0)";
        return false;

    }
    else
    {
        let url = `https://cn.bing.com/search?q=${input.value}`;
        // action.setAttribute("target", "_blank");
        // action.href = url;
        console.log(url);
        window.open(url);
        return true;
    }

}

// 初始化函数
function Awake()
{
    document.querySelector(".frame input").addEventListener("keyup", Enter);
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