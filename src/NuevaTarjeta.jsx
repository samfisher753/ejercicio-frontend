import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from "reactstrap";

class NuevaTarjeta extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titulo: "",
            descripcion: "",
            imagen: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.nuevaTarjeta = this.nuevaTarjeta.bind(this);
    }

    handleChange(e){
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    nuevaTarjeta(){
        let { titulo, descripcion, imagen } = this.state;
        titulo = titulo.trim();
        descripcion = descripcion.trim();
        imagen = imagen.trim();

        if (titulo === ""){
            alert("La tarjeta debe tener un título");
            return;
        }

        if (descripcion === ""){
            alert("La tarjeta debe tener una descripción");
            return;
        }

        let tarjeta = { titulo, descripcion, imagen, fecha: new Date() };
        this.props.nuevaTarjeta(tarjeta);

        this.setState({
            titulo: "",
            descripcion: "",
            imagen: ""
        });

        this.props.toggle();
    }

    render() {
        const modal = this.props.isOpen;
        const toggle = this.props.toggle;

        return (
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Nueva tarjeta</ModalHeader>
            <ModalBody>
                <Input onChange={this.handleChange} type="text" name="titulo" id="titulo" placeholder="Título" className="my-3" value={this.state.titulo} />
                <Input onChange={this.handleChange} type="text" name="descripcion" id="descripcion" placeholder="Descripción" className="my-3" value={this.state.descripcion} />
                <Input onChange={this.handleChange} type="text" name="imagen" id="imagen" placeholder="Imagen (Url)" className="my-3" value={this.state.imagen} />
            </ModalBody>
            <ModalFooter className="justify-content-center">
                <Button onClick={this.nuevaTarjeta} color="danger">Añadir</Button>
            </ModalFooter>
          </Modal>
        );
    }
}

export default NuevaTarjeta;