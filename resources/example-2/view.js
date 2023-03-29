class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }
  addParagraph(){
    const newPara = document.createElement('p');
    newPara.innerText ='This paragraph has been dynamically added by JavaScript!';
    this.mainContainerEl.append(newPara);
  }
  clearParagraphs(){
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(paragraph => {
      paragraph.remove()
    });
  }
}

module.exports = View;