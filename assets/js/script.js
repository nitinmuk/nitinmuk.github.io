$(document).ready(() => {

    hideContainer("#contact-me");
    hideContainer("#portfolio");
    $("#navLinks").on("click", (event) => {
        switch ($(event.target).attr("href")) {
            case "#portfolio":
                showContainer("#portfolio");
                hideContainer("#about-me");
                hideContainer("#contact-me");
                hideContainer("#linkedin");
                break;
            case "#about-me":
                showContainer("#about-me");
                showContainer("#linkedin");
                hideContainer("#portfolio");
                hideContainer("#contact-me");
                break;
            case "#contact-me":
                showContainer("#contact-me");
                hideContainer("#portfolio");
                hideContainer("#about-me");
                hideContainer("#linkedin");
                break;
        }
    });

    /**
     * hides input div by adding hide class 
     * @param {input div which need to be hidden} container 
     */
    function hideContainer(container) {
        $(container).addClass("hide");
    }
    /**
     * make div visible by removing hide class
     * @param {input div which need to be visible} container 
     */
    function showContainer(container) {
        $(container).removeClass("hide");
    }

}
)