    // 側邊購物車
    /*    For Cart Sidebar  */
    $(".cart_sidebar_info").removeClass("info-opened");
        $(".body-overlay").removeClass("opened");
        
    $(".header_cart_icon").on("click", function () {
        $(".cart_sidebar_info").addClass("info-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".cart_sidebar_close-btn").on("click", function () {
        $(".cart_sidebar_info").removeClass("info-opened");
        $(".body-overlay").removeClass("opened");
    });
    $(".body-overlay").on("click", function () {
        $(".cart_sidebar_info").removeClass("info-opened");
        $(".body-overlay").removeClass("opened");
    });

        