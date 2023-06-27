
let $ = document
let autoCompleteWrapper = $.querySelector('.search-input')
let searchInputElem = $.querySelector('input')
let autoComplete = $.querySelector('.autocom-box')

addEventListener('keyup' , () => {
    let searchValue = searchInputElem.value

    if (searchValue) {
        autoCompleteWrapper.classList.add('active')
        let filteredWord = suggestions.filter(item => {
            return item.toLowerCase().startsWith(searchValue.toLowerCase())
        })

        suggestionsWordsGenerator(filteredWord)

    } else {
        autoCompleteWrapper.classList.remove('active')
    }
})

let suggestionsWordsGenerator = (word) => {
   let listArrayItem = word.map(item => {
        return `<li>${item}</li>`
    })


    let customListItem

    if ( !listArrayItem.length ) {
         customListItem = `<li>${searchInputElem.value}</li>`
    } else {
         customListItem = listArrayItem.join('')
    }

    autoComplete.innerHTML = customListItem

    select()

    console.log(customListItem);
}

let select = () => {
    let allListItem = autoComplete.querySelectorAll('li')
    allListItem.forEach (item => {
        item.addEventListener('click' , (e) => {
            searchInputElem.value = e.target.textContent
            autoCompleteWrapper.classList.remove ('active')
        })
    })
}