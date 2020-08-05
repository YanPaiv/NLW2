document.querySelector("#addTime").addEventListener('click', cloneField)

function cloneField(){
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  const fields = newFieldContainer.querySelectorAll('input')

  fields.forEach(function(field){
     field.value = ""

  })

  document.querySelector('#scherdule-items').appendChild(newFieldContainer)
}





