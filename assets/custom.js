jQuery(document).ready(function ($) {
    $(".new_product").click(function() {
        console.log("first")
        $(".product-single__form button[type=submit]").click()
    })
});