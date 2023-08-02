import './css/Menu.css';

function Menu() {
    return (
        <section className="main-container">
            <section className="Bowls">
                <h2 className="category">Bowls</h2>
                <p>Spice 'n' Sprout</p>
                <p>Eat the Rainbow</p>
                <p>Tempting Tempeh</p>
                <p>Tropical Bliss</p>
            </section>

            <section className="snacks">
                <h2 className="category">Snacks</h2>
                <p>Zesty Kale Chips</p>
                <p>Quinoa Energy Balls</p>
                <p>Oatmeal Raisin Cake</p>
                <p>Almond Butter Slice</p>
            </section>

            <section className="juice">
                <h2 className="category">Juice</h2>
                <p>Berry Burst</p>
                <p>Green Goddess</p>
                <p>Citrus Splash</p>
                <p>Beetroot Blast</p>
            </section>

            <section className="coffee">
                <h2 className="category">Coffee</h2>
                <p>Coconut Latte</p>
                <p>Cinnamon Spice Cappuccino</p>
                <p>Oat Milk Mocha</p>
                <p>Chamomile Citrus Tea</p>
                <p>Earl Grey Lavender Tea</p>
            </section>

        </section>
    );
}

export default Menu;