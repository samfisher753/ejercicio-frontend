import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from "reactstrap";

class EditarTarjeta extends React.Component {
    constructor(props){
        super(props);

        this.editar = this.editar.bind(this);
    }

    editar(){
        let { titulo, descripcion, imagen, fecha } = this.props.datos;
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

        let tarjeta = { titulo, descripcion, imagen, fecha };
        this.props.editar(tarjeta, this.props.index);

        this.props.toggle();
    }

    render() {
        const modal = this.props.isOpen;
        const toggle = this.props.toggle;

        const { titulo, descripcion, imagen } = this.props.datos;
        const handleChange = this.props.handleChange;
        const editar = this.editar;

        return (
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Editar tarjeta</ModalHeader>
            <ModalBody>
                <Input onChange={handleChange} type="text" name="titulo" id="titulo" placeholder="Título" className="my-3" value={titulo} />
                <Input onChange={handleChange} type="text" name="descripcion" id="descripcion" placeholder="Descripción" className="my-3" value={descripcion} />
                <Input onChange={handleChange} type="text" name="imagen" id="imagen" placeholder="Imagen (Url)" className="my-3" value={imagen} />
            </ModalBody>
            <ModalFooter className="justify-content-center">
                <Button onClick={editar} color="danger">Guardar cambios</Button>
            </ModalFooter>
          </Modal>
        );
    }
}

export default EditarTarjeta;