export class Inventory {
  private items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  removeItem(item: string) {
    this.items = this.items.filter(
      i => i !== item
    );
  }

  listItems() {
    return this.items;
  }
}
