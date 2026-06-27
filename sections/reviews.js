function Reviews() {

    // Prevent crashes if reviews are missing
    const reviews = PRODUCT.reviews || [];

    // Don't render anything if there are no reviews
    if (reviews.length === 0) {
        return "";
    }

    const cards = reviews.map(review => `
        <div class="review-card">

            <div class="review-stars">
                ${"⭐".repeat(review.rating)}
            </div>

            <p class="review-comment">
                "${review.comment}"
            </p>

            <div class="review-user">

                <h4>${review.name}</h4>

                <span>${review.city}</span>

            </div>

        </div>
    `).join("");

    return `
        <section class="reviews">

            <div class="container">

                <div class="section-title">

                    <h2>⭐⭐⭐⭐⭐ Customer Reviews</h2>

                    <p>Trusted by happy customers across Bangladesh.</p>

                </div>

                <div class="reviews-grid">

                    ${cards}

                </div>

            </div>

        </section>
    `;
}