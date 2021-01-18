const TOKEN = 'APP_USR-1523441364517935-011721-c748c16ce869e3854709da8aad497b6d-359798454';
const URL = `https://api.mercadolibre.com/sites/MCO/search?category=MCO1430`;
const headers = {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
}

export async function getApiData() {
    const response = await fetch(URL, headers);
    const jsonResponse = await response.json();
    const items = jsonResponse.results;
    return items.map((product) => {
        const price = product.price;
        const priceSale = product.sale_price;
        let discount = priceSale / price * 100;
        let currentPrice;
        let oldPrice;
        let discountTag;

        if (priceSale) {
            currentPrice = `$${priceSale}`;
            oldPrice = `$${price}`;
            discountTag = `-${discount}`
        } else {
            currentPrice = `$${product.price}`;
            oldPrice = "";
            discountTag = "";
        };
        return {
            image: product.thumbnail,
            title: product.title,
            oldPrice: oldPrice,
            newPrice: currentPrice,
            discountTag: discountTag,

        }
    });
};