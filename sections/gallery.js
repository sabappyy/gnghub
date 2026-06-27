function Gallery() {

    const thumbs = PRODUCT.images.map((img,index)=>`

        <img
            src="${img}"
            class="gallery-thumb ${index===0?'active':''}"
            onclick="changeGallery('${img}',this)"
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

<div class="gallery-container">

<img
id="gallery-main"
class="gallery-main"
src="${PRODUCT.images[0]}"
alt="${PRODUCT.name}"
>

<div class="gallery-thumbs">

${thumbs}

</div>

</div>

</div>

</section>

`;

}