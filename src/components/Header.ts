export class Header {
  private element: HTMLElement;

  constructor(text: string) {
    this.element = document.createElement("header");
    this.element.innerHTML = `<h1>${text}</h1>`;
  }

  render(): HTMLElement {
    return this.element;
  }
}
