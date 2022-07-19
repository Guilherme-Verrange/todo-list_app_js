
const Main = {

    init: function(){
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
 
        this.$checkButtons = document.querySelectorAll('.check-list')
        this.$inputTaskEnter = document.querySelector('#input-task')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove-task')

    },

    bindEvents: function(){
        const self = this

        this.$checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click

        })

        this.$inputTaskEnter.onkeypress = self.Events.inputTask_keypress.bind(this)
        this.$removeButtons.forEach(function(button){

            button.onclick = self.Events.removeButton_click
        })

    },

    Events: {

        checkButton_click: function (e) {
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')
            
           if(!isDone){
            li.classList.add('done')
            return
           }
           li.classList.remove('done')
        },

        
        inputTask_keypress: function(e){
            const key = e.key
            const value = e.target.value

            if(key === 'Enter') {
                this.$list.innerHTML += `
                <li>
                    <div class="check-list"></div>
                    <label class="task">
                        ${value}
                    </label>
                    <button class="remove-task"></button>
                </li>
                
                `
                e.target.value = ''
                this.cacheSelectors()
                this.bindEvents()
                
            }
            
        },

        removeButton_click: function(e){
            let li = e.target.parentElement

            li.classList.add('hidden')
        }




    }
}

 Main.init()