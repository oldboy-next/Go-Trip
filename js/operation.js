

var display = true;
$(() =>
{
    const searchBtn = $("#search");
    const searchFrame = $(".search-frame");

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
    var input = document.querySelector(".search-frame input");
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
    var value = document.querySelector(".search-frame input");;
    var action = document.querySelector(".search-frame a");
    if (!value.value)
    {
        action.removeAttribute("target")
        console.log("null");
        action.href = "javascript:void(0)";
        return false;

    }
    else
    {
        action.setAttribute("target", "_blank");
        var url = `https://cn.bing.com/search?q=${value.value}`;
        action.href = url;
        console.log(url);
        return true;
    }

};