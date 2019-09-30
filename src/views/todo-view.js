import { LitElement, html } from 'lit-element';

import Style1 from './style.scss?include';
class TodoView extends LitElement {
  static get styles() {
		return [Style1];
  }
  onTodoViewClick() {
    this.dispatchEvent(new CustomEvent('kick', {detail: {kicked: true}}));
  }
  render() {
    return html`
      <button class="yellow">Hello World</button>
      <p @click="${this.onTodoViewClick}">todo-view</p>
    `;
  }
}

customElements.define('todo-view', TodoView);
