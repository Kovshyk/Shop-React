import Card from "./card.js";
export default class CardsList {
  constructor(data=[]) {
    this.data=data;
    this.render();
    this.renderCards();
    let anotherObj = {
      move: function() {
      }
    };

  }
  getTemplate(){
    return `

    <div class="products-list"  data-element="productList">
    </div>
`
}
  render () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }
  renderCards(){
    const cards=this.data.map(item => {
      const card = new Card(item);

      return card.componentElement;

    });
    const productList = this.element.querySelector('[data-element="productList"]')
    productList.innerHTML='';
    productList.append(...cards);
  }
  update(data=[]){
    this.data=data;
    this.renderCards();
  }
}
