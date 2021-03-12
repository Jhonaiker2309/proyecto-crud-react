  export const editar = (e) => {
    let i = 0;
    let newDataOfApi = this.state.dataOfApi;
    newDataOfApi = newDataOfApi.map(element => {
      if (element.id === e.id) {
        newDataOfApi[i].first_name = e.first_name;
        newDataOfApi[i].last_name = e.last_name;
        newDataOfApi[i].email = e.email;
      }

      i++;
  });

    this.setState({ dataOfApi: newDataOfApi, modalActualizar: false });
  };

  export const borrar = (id) => {
    console.log(id)
    let newData = this.state.dataOfApi.filter(data => data.id !== id)
    this.setState({dataOfApi: newData})
  };

  export const insertar= ()=>{
    let valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }