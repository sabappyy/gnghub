function Features() {

    const cards = PRODUCT.features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">${feature.icon}</div>

            <h3>${feature.title}</h3>

            <p>${feature.description}</p>
        </div>
    `).join("");

    return `
        <section class="features">

            <div class="container">

                <div class="section-title">

                    <h2>Why Choose X01?</h2>

                    <p>Designed to protect your phone while making charging safer and smarter.</p>

                </div>

                <div class="features-grid">

                    ${cards}

                </div>

            </div>

        </section>
    `;

}