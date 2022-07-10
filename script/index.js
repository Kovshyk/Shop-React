import CardsList from './cards-list.js'
import Pagination from "./pagination.js";

//const card = new Card(product);
//const pagination = new Pagination({activePageIndex:2});

const BACKEND_URL='https://online-store.bootcamp.place/api/';

export default class OnlineStorePage {
    constructor (products) {
        this.pagesSize=12;
        this.url = new URL('products', BACKEND_URL);

        this.products=[];
        this.brands=[];

        this.url.searchParams.set('_limit', this.pagesSize)
        this.components={};
        this.initComponents()
        //console.log(this.products)
        this.render()
        this.renderComponents()
        this.initEventListeners()

        this.update(1);
      //  this.clickFilters(1)

    }
    async loadData(pageNumber){

        this.url.searchParams.set('_page', pageNumber)

        //if (category!==undefined){
        //this.url.searchParams.append('category', category)}
       // else {this.url.searchParams.delete('category',category)}
        const response = await fetch(this.url)
        const products=  await response.json();
        //console.log(this.url)
        return products;

    }
   // async clickFilters(index) {
   //      let  filtersButtons= await  document.querySelectorAll('.category-checkbox')
   //     for (const filtersButton of filtersButtons){
   //     await filtersButton.addEventListener('click', event=>{
   //         const elementId=filtersButton.id;
   //         if(!filtersButton.classList.contains('active')){
   //             filtersButton.classList.add('active')
   //             this.initEventListeners(elementId)
   //             this.update(1, elementId)
   //             }
   //         else{
   //             filtersButton.classList.remove('active')
   //             this.update(index, undefined )
   //         }
   //
   //     })
   //     }
   //  }


    async counterForCart(){
    let cartCounter = await document.querySelector('.counter');

    let CountButtonHomeClicks =  0;
    let button= await  document.querySelectorAll('[data-element="button-add-to-cart"]')


    for await (const buttons of button) {
        buttons.addEventListener('click', event => {

            CountButtonHomeClicks += 1;
            cartCounter.innerHTML = CountButtonHomeClicks;
        })
            }
}
    getTemplate () {
        return `
      <div>
        <div  data-element="cardsList">
        <!-- Card Component -->
</div>
        <div data-element="pagination">
        <!-- -->
</div>
      </div>
    `;
    }
    initComponents(){

        this.products.length = 100;
        const totalPages=Math.ceil(this.products.length / this.pagesSize)
        const cardsList = new CardsList(this.products.slice(0, this.pagesSize));
        const pagination = new Pagination({activePageIndex:0}, totalPages)
        this.components.cardsList=cardsList;
        this.components.pagination=pagination;
    }
    renderComponents(){
        const cardsListContainer = this.element.querySelector('[data-element="cardsList"]');
        const paginationContainer = this.element.querySelector('[data-element="pagination"]')

        cardsListContainer.append(this.components.cardsList.element)
        paginationContainer.append(this.components.pagination.element)

    }
    render () {
        const wrapper = document.createElement('div');

        wrapper.innerHTML = this.getTemplate();

        this.element = wrapper.firstElementChild;
    }
    initEventListeners() {


        this.components.pagination.element.addEventListener('page-changer', event => {
            const pageIndex = event.detail;

            this.update(pageIndex+1);
          //  this.clickFilters(pageIndex+1)

        });
    }
    async update(pageNumber,category){
        //const start = pageIndex * this.pagesSize;
        //const end = start + this.pagesSize;
        //this.components.cardsList.update(this.products.slice(start, end));
        console.log(category)
        const data= await this.loadData(pageNumber);

        this.components.cardsList.update(data);


        this.counterForCart()

    }
}




