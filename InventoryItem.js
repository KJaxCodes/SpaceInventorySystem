function InventoryItem({ name, type, quantity, price }) {
    return (
        <li>
            <h2>{name} ({type})</h2>
            <p>{quantity < 5 ? "⚠️ Low Stock! Only " + quantity + " left!" : null}</p>
            <p>{price > 1000 ? "💎 High Value - consider extra protection!" : null} </p>
        </li>
    );
}



/* /* <!-- TODO: Render the low stock alert based on the quantity of the item. -->
<!-- TODO: Render the high value alert based on the total value of the item. --> */

