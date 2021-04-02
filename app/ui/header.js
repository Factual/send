const html = require('choo/html');
const Component = require('choo/component');
const Account = require('./account');
const assets = require('../../common/assets');
const { platform } = require('../utils');

class Header extends Component {
  constructor(name, state, emit) {
    super(name);
    this.state = state;
    this.emit = emit;
    this.account = state.cache(Account, 'account');
  }

  update() {
    this.account.render();
    return false;
  }
  createElement() {
    const title =
      platform() === 'android'
        ? html`
            <a class="flex flex-row items-center">
              <img src="${assets.get('sendpass_logo.png')}#logo " style="padding-top:30%;width:300px;height:400px;"/>
            </a>
          `
        : html`
            <a class="flex flex-row items-center" href="/">
<<<<<<< HEAD
              <img src="${assets.get('sendpass_logo.png')}#logo" style="padding: 0; display: block;margin: 0 auto;max-height: 100%;max-width: 100%;"/>
=======
              <img
                alt="${this.state.translate('title')}"
                src="${assets.get('icon.svg')}"
              />
              <svg viewBox="66 0 340 64" class="w-48 md:w-64">
                <use xlink:href="${assets.get('wordmark.svg')}#logo" />
              </svg>
>>>>>>> 11319080a8fe012cc6bde61b4ad4ccdec3c2e618
            </a>
          `;
    return html`
      <header
        class="main-header relative flex-none flex flex-row items-center justify-between w-full px-6 md:px-8 h-16 md:h-24 z-20 bg-transparent"
      >
        ${title} ${this.account.render()}
      </header>
    `;
  }
}

module.exports = Header;
