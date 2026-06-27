function OrderForm(){

return`

<section id="order" class="order">

<div class="container">

<div class="section-title">

<h2>Place Your Order</h2>

<p>Fill in the form below and we'll contact you shortly.</p>

</div>

<form id="order-form">

<input
type="text"
name="name"
placeholder="Full Name"
required
>

<input
type="tel"
name="phone"
placeholder="Mobile Number"
required
>

<textarea
name="address"
placeholder="Full Address"
required
></textarea>

<input
type="number"
name="quantity"
value="1"
min="1"
required
>

<textarea
name="note"
placeholder="Optional Note"
></textarea>

<button type="submit" class="btn">

🛒 Confirm Order

</button>

</form>

<div id="order-status"></div>

</div>

</section>

`;

}