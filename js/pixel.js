// =====================================
// Meta Pixel Event Functions
// Gadget & Glamour Hub
// =====================================

let checkoutTracked = false;

// -------------------------------
// View Product
// -------------------------------
function trackViewContent() {

    if (typeof fbq !== "function") return;

    fbq("track", "ViewContent", {

        content_name: PRODUCT.name,
        content_ids: [PRODUCT.id],
        content_type: "product",
        content_category: "Mobile Accessories",

        value: PRODUCT.price,
        currency: "BDT"

    });

}

// -------------------------------
// Order Button Click
// -------------------------------
function trackInitiateCheckout() {

    if (typeof fbq !== "function") return;

    fbq("track", "InitiateCheckout", {

        content_name: PRODUCT.name,
        content_ids: [PRODUCT.id],
        content_type: "product",

        value: PRODUCT.price,
        currency: "BDT"

    });

}

// -------------------------------
// Successful Order
// -------------------------------
function trackLead(orderID = "") {

    if (typeof fbq !== "function") return;

    fbq("track", "Lead", {

        content_name: PRODUCT.name,
        content_ids: [PRODUCT.id],
        content_type: "product",

        value: PRODUCT.price,
        currency: "BDT",

        order_id: orderID

    });

}

// -------------------------------
// WhatsApp Click
// -------------------------------
function trackContact() {

    if (typeof fbq !== "function") return;

    fbq("track", "Contact", {

        method: "WhatsApp"

    });

}

// -------------------------------
// Hero Order Button
// -------------------------------
function handleOrderClick() {

    if (!checkoutTracked) {

        trackInitiateCheckout();

        checkoutTracked = true;

    }

    return true;

}