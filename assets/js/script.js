$(document).ready(() => {

    /**
     * display panelToShow pane and hide other panes also
     * saves last visisted pane in local storage.
     * @param {current panel where user is} panelToShow 
     */
    const displayPanel = panelToShow => {
        localStorage.setItem("currentPanel",panelToShow);
        switch (panelToShow) {
            case "#portfolio":
                showContainer("#portfolio");
                hideContainer("#about-me");
                hideContainer("#contact-me");
                break;
            case "#about-me":
                showContainer("#about-me");
                hideContainer("#portfolio");
                hideContainer("#contact-me");
                break;
            case "#contact-me":
                showContainer("#contact-me");
                hideContainer("#portfolio");
                hideContainer("#about-me");
                break;
        }

    };
    var panelToShow = localStorage.getItem("currentPanel");
    panelToShow = panelToShow ? panelToShow : "#about-me";
    displayPanel(panelToShow);
    $("#navLinks").on("click", (event) => {
        displayPanel($(event.target).attr("href"));        
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

});