import React, { Component } from "react";
import Foot from "./components/Foot/Foot";
import TableOfData from "./components/TableOfData";
import ModalWindow from "./components/ModalWindow";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataOfApi: [],
      dataShowed: [],
      showDataFiltered: false,
      modalActualizar: false,
      modalInsertar: false,
      initialValue: 0,
      secondValue: 10000000000000000,
      form: {
        first_name: "",
        last_name: "",
        email: "",
        created_at: "",
        updated_at: "",
      },
    };
  }

  getData = async () => {
    const response = await fetch(
      "https://norsongranjas.jeanlogistics.com/api/persons"
    );
    const data = await response.json();
    let dataOfApi = data.data;
    dataOfApi.map((element) => {
      element.valueOfDay = parseInt(element.created_at.slice(8, 10));
      element.valueOfMonth = parseInt(element.created_at.slice(5, 7));
      element.valueOfYear = parseInt(element.created_at.slice(0, 4));
    });

    console.log(dataOfApi);
    this.setState({ dataOfApi, dataShowed: dataOfApi });
  };

  changeDataShowed = (
    firstDay,
    firstMonth,
    firstYear,
    secondDay,
    secondMonth,
    secondYear
  ) => {
    let initialValue = firstDay + firstMonth * 1000 + firstYear * 1000000;
    let secondValue = secondDay + secondMonth * 1000 + secondYear * 1000000;

    this.setState({ initialValue, secondValue });
  };

  addElementsOfDateToAPI = (data) => {
    data.map((element) => {
      element.valueOfDay = parseInt(element.created_at.slice(8, 10));
      element.valueOfMonth = parseInt(element.created_at.slice(5, 7));
      element.valueOfYear = parseInt(element.created_at.slice(0, 4));
    });
  };

  editar = (e) => {
    let i = 0;
    let newDate = new Date().toISOString();
    let newDataOfApi = this.state.dataOfApi;
    newDataOfApi.map((element) => {
      if (element.id === e.id) {
        newDataOfApi[i].first_name = e.first_name;
        newDataOfApi[i].last_name = e.last_name;
        newDataOfApi[i].email = e.email;
        newDataOfApi[i].updated_at = newDate;
      }

      i++;
    });

    this.setState({ dataOfApi: newDataOfApi, modalActualizar: false });
  };

  borrar = (id) => {
    let newData = this.state.dataOfApi.filter((data) => data.id !== id);
    console.log(this.state.dataShowed);
    this.setState({ dataOfApi: newData });
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  insertar = () => {
    let valorNuevo = { ...this.state.form };
    if (this.state.dataOfApi.length == 0) {
      valorNuevo.id = 1;
    } else {
      valorNuevo.id = this.state.dataOfApi[this.state.dataOfApi.length - 1].id + 1;
    }

    let newDate = new Date().toISOString();
    console.log(newDate);
    valorNuevo.created_at = newDate;
    valorNuevo.updated_at = newDate;
    var lista = this.state.dataOfApi;
    lista.push(valorNuevo);
    lista.map((element) => {
      element.valueOfDay = parseInt(element.created_at.slice(8, 10));
      element.valueOfMonth = parseInt(element.created_at.slice(5, 7));
      element.valueOfYear = parseInt(element.created_at.slice(0, 4));
    });
    console.log(lista);
    this.setState({ modalInsertar: false, dataOfApi: lista });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <ModalWindow
          modalActualizar={this.state.modalActualizar}
          modalInsertar={this.state.modalInsertar}
          form={this.state.form}
          handleChange={this.handleChange}
          dataOfApi={this.state.dataOfApi}
          cerrarModalInsertar={this.cerrarModalInsertar}
          insertar={this.insertar}
          cerrarModalActualizar={this.cerrarModalActualizar}
          editar={this.editar}
        />
        <TableOfData
          initialValue={this.state.initialValue}
          secondValue={this.state.secondValue}
          dataOfApi={this.state.dataOfApi}
          dataShowed={this.state.dataShowed}
          borrar={this.borrar}
          mostrarModalActualizar={this.mostrarModalActualizar}
          mostrarModalInsertar={this.mostrarModalInsertar}
        />

        <Foot changeDataShowed={this.changeDataShowed} />
      </div>
    );
  }
}
