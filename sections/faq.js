function FAQ() {

    const items = (PRODUCT.faq || []).map((item, index) => `
        <div class="faq-item">

            <button class="faq-question" onclick="toggleFAQ(${index})">

                <span>${item.question}</span>

                <span id="faq-icon-${index}">+</span>

            </button>

            <div class="faq-answer" id="faq-${index}">

                ${item.answer}

            </div>

        </div>
    `).join("");

    return `

<section class="faq">

<div class="container">

<div class="section-title">

<h2>Frequently Asked Questions</h2>

<p>Everything you need to know before ordering.</p>

</div>

${items}

</div>

</section>

`;

}