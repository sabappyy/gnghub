function Gallery() {

    const slides = PRODUCT.images.map((img, index) => `
        <img
            src="${img}"
            class="gallery-slide ${index===0 ? 'active' : ''}"
            alt="Product Image ${index+1}"
        >
    `).join("");

    return `

<section class="gallery">

<div class="container">

<div class="section-title">
<h2>Product Gallery</h2>
<p>See every detail before you order.</p>
</div>

<div class="gallery-slider">

<button class="gallery-prev" onclick="prevSlide()">❮</button>

<div class="gallery-wrapper">
${slides}
</div>

<button class="gallery-next" onclick="nextSlide()">❯</button>

</div>

</div>

</section>

`;

}