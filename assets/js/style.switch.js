"use strict";
    var myCursor=jQuery(".mouse-cursor");
    if(myCursor.length&&$("body")) {
    const r=document.querySelector(".cursor-inner"), e=document.querySelector(".cursor-outer");
    let o, s=0, t=!1;
    window.onmousemove=function(i) {
    t||(e.style.transform="translate("+i.clientX+"px,  "+i.clientY+"px)"), r.style.transform="translate("+i.clientX+"px,  "+i.clientY+"px)", o=i.clientY, s=i.clientX;
}
, $("body").on("mouseenter", "a, .trigger,  .cursor-pointer", function() {
    r.classList.add("cursor-hover"), e.classList.add("cursor-hover");
}
), $("body").on("mouseleave", "a, .trigger,  .cursor-pointer", function() {
    $(this).is("a")&&$(this).closest(".cursor-pointer").length||(r.classList.remove("cursor-hover"), e.classList.remove("cursor-hover"));
}
), r.style.visibility="visible", e.style.visibility="visible"}var wrapper=jQuery(".gaspar"), button=jQuery(".style-switch-wrapper .cursor li a"), show=jQuery(".style-switch-wrapper .cursor li a.show"), hide=jQuery(".style-switch-wrapper .cursor li a.hide");
    button.on("click", function() {
    var r=jQuery(this);
    return r.hasClass("showme")||(button.removeClass("showme"), r.addClass("showme")), !1;
}
), show.on("click", function() {
    wrapper.attr("data-magic-cursor", "");
}
), hide.on("click", function() {
    wrapper.attr("data-magic-cursor", "hide");
}
);
    var isMobile=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), preloader=$("#preloader");
    isMobile?preloader.remove(): (setTimeout(function() {
    preloader.addClass("preloaded");
}
, 800), setTimeout(function() {
    preloader.remove();
}
, 2e3));
    