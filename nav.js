var init = () => {
    $("#hamburger").on("click", toggleMenu);
    $("topnav a").on("click", navigate);
}

var toggleMenu = (e) => {
    var animDuration = 400;
    var icon = $(e.target).first();
    var rotDirection = "";

    if($("topnav").is(":visible"))
    {
        rotDirection = "-"
    }

    icon.css({
        "transform": "rotate("+rotDirection+"180deg)",
        "transform-duration": animDuration+"ms"
    });

    $("topnav").slideToggle(animDuration);
}

var navigate = (e) => {
    var ele = e.target;
    var url = $(ele).text().toLowerCase()+".html";

    $.ajax({
        url: url,
        success: (res) => {
            $("content").html(res);
        },
        error: (res) => {
            pushError({
                code: "404",
                text: "Konnte Resource nicht laden",
                debuginfo: url
            })
            console.log("Error 404 while loading subsite");
        },
    });
}

$(document).ready(init)