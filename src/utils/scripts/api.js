const TOKEN = 'APP_USR-1523441364517935-011822-49df2ed9f1bde22df4a060313bfd7c45-359798454';
const BASE_URL = 'https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&limit=20'
const headers = {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
}

export async function getApiData(value) {
    const URL = value ? `${BASE_URL}&q=${value}` : BASE_URL;
    const response = await fetch(URL, headers);
    const jsonResponse = await response.json();
    const items = jsonResponse.results;
    return items.map((product) => {
        const { thumbnail, title, price, original_price } = product;

        let discount = Math.round((1 - (price / original_price)) * 100);
        let currentPrice;
        let originalPrice;
        let discountTag;

        if (original_price) {
            currentPrice = `$${price}`;
            originalPrice = `$${original_price}`;
            discountTag = `-${discount}%`
        } else {
            currentPrice = `$${price}`;
            originalPrice = "";
            discountTag = "";
        };
        return {
            image: thumbnail,
            title: title,
            oldPrice: originalPrice,
            newPrice: currentPrice,
            discountTag: discountTag,

        }
    });
};