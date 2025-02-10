function InventoryItem({ name, type, quantity = 0, price = 0 }) {

    const lowStockThreshold = 5;
    const highValueThreshold = 1000;
    const totalValue = price * quantity;

    return (
        <li>
            <h2>{name} ({type})</h2>
            {
                quantity < lowStockThreshold
                &&
                <Message>
                    <p><span>⚠️</span> Low Stock! Only {quantity} left!</p>
                </Message>
            }
            {
                totalValue > highValueThreshold
                &&
                <Message>
                    <p><span>💎</span> High Value - consider extra protection!</p>
                </Message>
            }

        </li>
    );
}



/* /* <!-- TODO: Render the low stock alert based on the quantity of the item. -->
<!-- TODO: Render the high value alert based on the total value of the item. --> */



/* <p>{quantity < 5 ? "⚠️ Low Stock! Only " + quantity + " left!" : null}</p>
<p>{price > 1000 ? "💎 High Value - consider extra protection!" : null} </p> */