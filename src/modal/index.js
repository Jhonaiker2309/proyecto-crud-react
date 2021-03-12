  export const mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  export const mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  export const cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  export const cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };