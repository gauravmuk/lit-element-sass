import { LitElement, html } from 'lit-element';

import Style1 from './style.scss?include';
class TodoView extends LitElement {
  static get styles() {
		return [Style1];
  }
  render() {
    return html`
      <button class="yellow">Hello World</button>
      <p>todo-view</p>
    `;
  }
}

customElements.define('todo-view', TodoView);
