document.addEventListener("submit", async function (e) {

    if (e.target.id !== "order-form") return;

    e.preventDefault();

    const status = document.getElementById("order-status");

    status.innerHTML = "⏳ Sending your order...";

    const form = new FormData(e.target);

const data = {

    product: PRODUCT.name,

    price: PRODUCT.price,

    quantity: form.get("quantity"),

    name: form.get("name"),

    phone: form.get("phone"),

    address: form.get("address"),

    note: form.get("note"),

};

    try {

        const response = await fetch(STORE.api, {

            method: "POST",

            redirect: "follow",

            headers: {

                "Content-Type": "text/plain;charset=utf-8"

            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        if (result.success) {

            status.innerHTML = `

                <div class="success-box">

                    <h3>✅ Order Confirmed!</h3>

                    <p>Your Order ID:</p>

                    <strong>${result.orderID}</strong>

                </div>

            `;

            document.getElementById("order-form").reset();

            // Meta Pixel (later)
            if (typeof fbq === "function") {
                fbq("track", "Lead");
            }

        } else {

            status.innerHTML = "❌ " + result.error;

        }

    } catch (err) {

        console.error(err);

        status.innerHTML = "❌ Failed to connect to server.";

    }

});