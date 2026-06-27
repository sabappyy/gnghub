function FloatingButtons(){

return `

<div class="floating-whatsapp">

<a
href="https://wa.me/${STORE.whatsapp}?text=Hi%20Gadget%20%26%20Glamour%20Hub!%20I%20want%20to%20order%20${encodeURIComponent(PRODUCT.name)}"
target="_blank">

<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp">

</a>

</div>

<div class="sticky-order">

<div class="sticky-price">

<span>Today Only</span>

<strong>৳${PRODUCT.price}</strong>

</div>

<a href="#order" class="sticky-btn">

🛒 Order Now

</a>

</div>

`;

}