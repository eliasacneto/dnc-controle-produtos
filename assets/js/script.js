class Product{

  constructor(){
    this.id = 1
    this.arrayProducts = []
  }
  Add(){
    let product = this.ReadData()
    if(this.Validate(product) == true){
      this.Save(product)
    }
    this.List()
    this.Clear()
  }

  ReadData(){
    let product = {}

    product.id = this.id
    product.productName = document.getElementById('product').value
    product.productPrice = document.getElementById('price').value

    return product
  }

  Validate(product){
    let msg = '';

    if(product.productName == ''){
      msg += 'Por favor, insira o Nome do produto! \n'
    }
    if(product.productPrice == ''){
      msg += 'Por favor, insira o Valor do produto! \n'
    }
    if(msg != ''){
      alert(msg)
      return false
    }
    return true
  }

  Save(product){
    this.arrayProducts.push(product)
    this.id++
  }

  List(){
    let tbody = document.getElementById('tbody')
    tbody.innerText = ''

    for(let i=0; i<this.arrayProducts.length; i++){
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_name = tr.insertCell();
      let td_price = tr.insertCell();
      let td_remove = tr.insertCell();

      td_id.innerText = this.arrayProducts[i].id;
      td_name.innerText = this.arrayProducts[i].productName;
      td_price.innerText = "R$"+this.arrayProducts[i].productPrice;

      let image = document.createElement('img')
      image.src = 'assets/images/trash.png'
      image.setAttribute("onclick", "product.Remove("+this.arrayProducts[i].id+")")
      td_remove.appendChild(image)


    }
  }

  Clear(){
    document.getElementById('product').value = ''
    document.getElementById('price').value = ''
  }

  Remove(id){
    let tbody = document.getElementById('tbody')
    let remove = confirm('Você tem certeza que deseja excluir o item? \n\n ⚠️ Esta ação não poderá ser desfeita!')
    if(remove ==true){
      for(let i=0;i<this.arrayProducts.length;i++){
        if(this.arrayProducts[i].id == id){
          this.arrayProducts.splice(i, 1)
          tbody.deleteRow(i)
        }
      }
      alert('O item foi apagado com sucesso!')
    }

  



  }

}

var product = new Product()