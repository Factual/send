const html = require('choo/html');
const assets = require('../../common/assets');

module.exports = function intro(state) {
  return html`
    <send-intro
      class="flex flex-col items-center justify-center bg-white px-6 md:py-0 py-6 mb-0 h-full w-full dark:bg-grey-90"
    >
      <div class="mt-12 flex flex-col h-full">
        <h1 class="text-3xl font-bold md:pb-2">
          ${state.translate('introTitle')}
        </h1>
        <p class="max-w-sm leading-loose mt-6 md:mt-2 md:pr-14">
          ${state.translate('introDescription')}
        </p>
        <ol type="a">
        <li>1. Upload the secret file.</li>
        <li>2. Copy and Paste your secret text anywhere on the page beside the upload box.</li>
        </ol>
        <img class="intro" src="https://imgur.com/o3Zi7pz.gif" style="width:450px;height:300px;"/>
      </div>
    </send-intro>
  `;
};
