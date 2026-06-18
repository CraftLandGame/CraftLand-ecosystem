export class Marketplace {
  createListing(
    seller: string,
    item: string,
    price: number
  ) {
    return {
      seller,
      item,
      price
    };
  }

  buy(
    buyer: string,
    item: string
  ) {
    return {
      buyer,
      item,
      success: true
    };
  }
}
