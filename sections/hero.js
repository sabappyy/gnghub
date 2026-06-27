function Hero() {
    return `
    <section class="hero">

        <div class="container hero-grid">

            <div class="hero-content">

                <div class="rating">
                    ⭐ ${PRODUCT.rating} | ${PRODUCT.sold} Happy Customers
                </div>

                <div class="offer-badge">
                    🔥 Limited Time Offer
                </div>

                <h1>${PRODUCT.headline}</h1>

                <h2>${PRODUCT.name}</h2>

                <p>${PRODUCT.subtitle}</p>

                <div class="price">

                    <div class="old-price-box">
                        <small>Regular Price</small>
                        <span class="old-price">৳${PRODUCT.oldPrice}</span>
                    </div>

                    <div class="new-price-box">
                        <small>Today's Price</small>
                        <span class="new-price">৳${PRODUCT.price}</span>
                    </div>

                </div>

                <div class="badges">

                    <span>🚚 ${PRODUCT.insideDelivery}</span>

                    <span>💵 Cash On Delivery</span>

                    <span>⚡ 140W Fast Charging</span>

                    <span>🔋 Battery Protection</span>

                    <span>🛡️ 7 Days Replacement</span>

                </div>

                <div class="cta-group">

                    <a href="#order" class="btn hero-btn">
                        🛒 Order Now
                    </a>

                    <div class="stock">
                        🟢 In Stock
                    </div>

                </div>

            </div>

            <div class="hero-image">

                <img src="${PRODUCT.images[0]}" alt="${PRODUCT.name}">

            </div>

        </div>

    </section>
    `;
}