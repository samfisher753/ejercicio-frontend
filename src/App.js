import React from "react";
import { Container, Row, Button } from "reactstrap";
import NuevaTarjeta from "./NuevaTarjeta";
import Tarjeta from "./Tarjeta";
import tarjetasEjemplo from "./datos/tarjetas";

class App extends React.Component {
  constructor(props){
    super(props);

    let tarjetas = localStorage.getItem("tarjetas");
    if (tarjetas!==null && JSON.parse(tarjetas).length > 0){
      tarjetas = JSON.parse(tarjetas);
    }
    else {
      tarjetas = tarjetasEjemplo();
      localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
    }

    this.state = {
      defaultImage: "https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg",
      showModal: false,
      tarjetas
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.nuevaTarjeta = this.nuevaTarjeta.bind(this);
    this.eliminarTarjeta = this.eliminarTarjeta.bind(this);
    this.editarTarjeta = this.editarTarjeta.bind(this);
    this.guardarLocalStorage = this.guardarLocalStorage.bind(this);
    this.cargarTarjetasEjemplo = this.cargarTarjetasEjemplo.bind(this);
    this.ordenarTituloAsc = this.ordenarTituloAsc.bind(this);
    this.ordenarTituloDesc = this.ordenarTituloDesc.bind(this);
    this.ordenarCreacionAsc = this.ordenarCreacionAsc.bind(this);
    this.ordenarCreacionDesc = this.ordenarCreacionDesc.bind(this);
  }

  toggleModal(){
    this.setState({ showModal: !this.state.showModal});
  }

  nuevaTarjeta(tarjeta){
    let tarjetas = this.state.tarjetas;
    tarjetas.push(tarjeta);
    this.setState({tarjetas}, this.guardarLocalStorage);
  }

  eliminarTarjeta(index){
    let tarjetas = this.state.tarjetas;
    tarjetas.splice(index, 1);
    this.setState({tarjetas}, this.guardarLocalStorage);
  }

  editarTarjeta(tarjeta, index){
    let tarjetas = this.state.tarjetas;
    tarjetas[index] = tarjeta;
    this.setState({tarjetas}, this.guardarLocalStorage);
  }

  cargarTarjetasEjemplo(){
    let tarjetas = tarjetasEjemplo();
    this.setState({tarjetas}, this.guardarLocalStorage);
  }

  guardarLocalStorage(){
    localStorage.setItem("tarjetas", JSON.stringify(this.state.tarjetas));
  }

  ordenarTituloAsc(){
    let tarjetas = this.state.tarjetas;
    tarjetas.sort((a,b) => {
      if (a.titulo < b.titulo) return -1;
      if (a.titulo > b.titulo) return 1;
      return 0;
    });
    this.setState({tarjetas});
  }

  ordenarTituloDesc(){
    let tarjetas = this.state.tarjetas;
    tarjetas.sort((a,b) => {
      if (a.titulo > b.titulo) return -1;
      if (a.titulo < b.titulo) return 1;
      return 0;
    });
    this.setState({tarjetas});
  }

  ordenarCreacionAsc(){
    let tarjetas = this.state.tarjetas;
    tarjetas.sort((a,b) => {
      if (a.fecha < b.fecha) return -1;
      if (a.fecha > b.fecha) return 1;
      return 0;
    });
    this.setState({tarjetas});
  }

  ordenarCreacionDesc(){
    let tarjetas = this.state.tarjetas;
    tarjetas.sort((a,b) => {
      if (a.fecha > b.fecha) return -1;
      if (a.fecha < b.fecha) return 1;
      return 0;
    });
    this.setState({tarjetas});
  }

  render() { 
    const isOpen = this.state.showModal;
    const toggle = this.toggleModal;

    const tarjetas = this.state.tarjetas.map((el, i) => 
      <Tarjeta datos={el} index={i} key={i} eliminar={this.eliminarTarjeta} editar={this.editarTarjeta} defaultImage={this.state.defaultImage} />
    );

    return (
      <>
        <Container>
          <Button onClick={this.ordenarTituloAsc} className="my-3 mx-2">Ordenar por título asc</Button>
          <Button onClick={this.ordenarTituloDesc} className="my-3 mx-2">Ordenar por título desc</Button>
          <Button onClick={this.ordenarCreacionAsc} className="my-3 mx-2">Ordenar por creación asc</Button>
          <Button onClick={this.ordenarCreacionDesc} className="my-3 mx-2">Ordenar por creación desc</Button><br/>

          <Button onClick={toggle} color="primary" className="my-3 mx-2">Añadir tarjeta</Button>
          <Button onClick={this.cargarTarjetasEjemplo} color="success" className="my-3 mx-2">Recargar tarjetas iniciales</Button>

          <Row>
            {tarjetas}
          </Row>

          <NuevaTarjeta isOpen={isOpen} toggle={toggle} nuevaTarjeta={this.nuevaTarjeta}/>
        </Container>
      </>
    );
  }
}

export default App;