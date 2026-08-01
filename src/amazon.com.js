// Couldn't get this with just css after several attempts. I think due to them using !important?
// Tossed llm at it, this seems to work.
(function () {
    "use strict";

    const rufusSelector = [
        "#nav-flyout-rufus",
        "#nav-rufus-content",
        "#rufus-container",
        "#rufus-drawer",
        "#rufus-content",
        ".nav-rufus-disco",
        ".rufus-conversation-container",
        ".rufus-view-filler",
    ].join(",");
    const dockClasses = ["rufus-docked-left", "rufus-docked-right"];
    const horizontalOffsets = [
        "padding-left",
        "padding-right",
        "margin-left",
        "margin-right",
    ];

    let observedBody;
    let rufusDetected = false;

    function cleanRufus() {
        const rufusElements = document.querySelectorAll(rufusSelector);
        rufusDetected ||= rufusElements.length > 0;
        rufusElements.forEach((element) => element.remove());

        [document.documentElement, document.body].forEach((element) => {
            if (!element) return;

            dockClasses.forEach((className) => {
                if (element.classList.contains(className)) {
                    rufusDetected = true;
                    element.classList.remove(className);
                }
            });
        });

        if (!rufusDetected || !document.body) return;

        horizontalOffsets.forEach((property) => {
            if (document.body.style.getPropertyValue(property)) {
                document.body.style.removeProperty(property);
            }
        });
    }

    function containsRufus(node) {
        return (
            node.nodeType === Node.ELEMENT_NODE &&
            (node.matches(rufusSelector) || node.querySelector(rufusSelector))
        );
    }

    const bodyObserver = new MutationObserver(cleanRufus);

    function observeBody() {
        if (!document.body || document.body === observedBody) return;

        bodyObserver.disconnect();
        observedBody = document.body;
        bodyObserver.observe(observedBody, {
            attributes: true,
            attributeFilter: ["class", "style"],
        });
    }

    const documentObserver = new MutationObserver((mutations) => {
        observeBody();

        if (
            mutations.some((mutation) =>
                Array.from(mutation.addedNodes).some(containsRufus),
            )
        ) {
            cleanRufus();
        }
    });

    const rootObserver = new MutationObserver(cleanRufus);
    rootObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class", "style"],
    });
    documentObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });

    observeBody();
    cleanRufus();
})();
