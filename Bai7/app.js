var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove-all')

var tags = ['Nodejs', 'Reactjs']

function render() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fa-solid fa-xmark close" onclick="removeTag(${i})"></i>
                            </li>`
        
    }
    content.appendChild(input)
    input.focus()
}

function removeTag(index){
    tags.splice(index, 1)
    render()
}

render()

input.addEventListener('keydown', function(e){
    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        input.value = ''
        render()
    }
})

btnRemoveAll.addEventListener('click', function(){
    tags = []
    render()
})
