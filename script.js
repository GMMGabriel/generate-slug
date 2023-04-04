const temp = "Teste para ver como que... fica! É isso, muito bem.".toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
console.log(temp)
