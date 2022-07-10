export default class Card {
  constructor(someProduct) {
    this.state=someProduct;
    this.myRender();


 // console.log(this.button)


  }
  HTMLForm(){
    return `
 <div class="product shadows">
       <div class="product-img"> <img src=${this.state.images[0]} alt="photo-product"></div>
        <div class="rating-price">
        <div class="rating"><p>${this.state.rating}</p><i class="bi bi-star"></i></div>
    <p>${this.state.price}</p>
  </div>
  <p>${this.state.title}</p>
  <p>${this.state.category}</p>
  <button class="button-add-to-cart" data-element="button-add-to-cart">ADD TO CART</button>
  </div>`
  }


  update(data={}){
    this.state=data;
    this.componentElement.innerHTML=this.HTMLForm();

  }
  myRender() {
    let elements = document.createElement('div');
    elements.className = "card-shop";
    elements.innerHTML=this.HTMLForm();
    this.componentElement = elements;
  }
}
