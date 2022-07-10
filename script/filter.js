
export default class Filter {
    constructor(base) {


        this.base= base


this.addComponents()
        this.render()
    }

    addComponents(){

        const brands = this.base.map(item => {
            return`<li><input type="checkbox" id="${item}" name="${item}">
          <label for="${item}">${item}</label></li>`

        })
        return brands.join('')
    }


    filtersTemplate(){return`
    <ul>
             ${this.addComponents()}   
              </ul>`

    }
    render () {
        const wrapper = document.createElement('div');

        wrapper.innerHTML = this.filtersTemplate();

        this.element = wrapper.firstElementChild;

    }


}