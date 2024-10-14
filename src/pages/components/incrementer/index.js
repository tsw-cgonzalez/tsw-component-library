import './index.scss'

const Incrementor = {
    low: 1,
    high: 4,
    init() {
        this.incGroup = document.querySelectorAll(".tsw-incrementor--counter-control")

        if (!this.incGroup.length) {
            return
        }
        this.state = 1,
        this.incrementEl = document.querySelector('.tsw-incrementor--count')
        this.renderState()
        this.renderEvents()
    },
    renderEvents() {
        this.incrementBtnEl = document.querySelector('.tsw-incrementor--btn-increment')
        this.decrementBtnEl = document.querySelector('.tsw-incrementor--btn-decrement')
        this.incrementBtnEl.addEventListener('click', this.updateState.bind(this))
        this.decrementBtnEl.addEventListener('click', this.updateState.bind(this))
    },  
    updateState(e) {
        e.stopPropagation()
        if (e.target.ariaLabel === 'increment') {

            // Incrementing up. Ensure decrement button is selectable 
            if (this.state === this.low) {
                this.updateAria({status: 'decReady'})
            }

            if (this.state !== this.high) { 
                this.state = this.state + 1
                this.renderState()      
            }

            // If max bound reached disable increment button
            if (this.state === this.high) {
                return this.updateAria({status: 'max'})
                
            }
        }
         
        if (e.target.ariaLabel === 'decrement') {

            // Decrementing down. Ensure increment button is selectable 
            if (this.state === this.high) {
                this.updateAria({status: 'incReady'})
            }

            if (this.state !== this.low) { 
                this.state = this.state - 1
                this.renderState() 
            }

            // If low bound reached disable decrement button
            if (this.state === this.low) { 
                return this.updateAria({status: 'min'})
                
            }            
        }
    },
    renderState() {
        this.incrementEl.textContent = this.state;
    },
    updateAria(arg) {
        switch (arg['status']) {
            case 'min':
                this.decrementBtnEl.setAttribute("aria-disabled", true)
                break;
            case 'max':
                console.log("correct")
                this.incrementBtnEl.setAttribute("aria-disabled", true)
                break;
            case 'decReady':
                console.log("decReady")
                
                this.decrementBtnEl.setAttribute("aria-disabled", false)
                break;
            case 'incReady':
                console.log("incReady")
                this.incrementBtnEl.setAttribute("aria-disabled", false)
                break;
            default:
                return
        }
    }
}

Incrementor.init()