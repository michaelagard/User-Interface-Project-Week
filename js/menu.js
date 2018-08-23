class MenuConstructor {
    constructor(element) {
      this.element = element;
      this.openButton = element.querySelector('.menu-open');
      this.closeButton = element.querySelector('.menu-close');
      this.content = element.querySelector('.menu-content');
      this.openButton.addEventListener('click', () => {this.toggleContent()});
      this.closeButton.addEventListener('click', () => {this.toggleContent()});
      this.link = element.querySelectorAll('.menu-link')
    }
    toggleContent() {
      this.content.classList.toggle('hidden');
      this.closeButton.classList.toggle('hidden');
      this.openButton.classList.toggle('hidden');
      console.log(this.closeButton.classList)
      console.log('activating menu')
    }
  }
let mainMenu = document.querySelectorAll('.menu');
mainMenu = Array.from(mainMenu).map( mainMenuArray => new MenuConstructor(mainMenuArray));
console.log('Project by:')
console.log('  __  __  ____    ____  \n |  |/ / |    \\\  |    | \n |     \\\ |     \\\ |    | \n |__|\\\__\\\|__|\\\__\\\|____| \n')