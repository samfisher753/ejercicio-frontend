import React from "React";
import { Col, Card, CardBody, CardImg, CardTitle, CardText, Button } from "reactstrap";
import EditarTarjeta from "./EditarTarjeta";
import "./css/tarjeta.css";

class Tarjeta extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            titulo: "",
            descripcion: "",
            imagen: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleChange(e){
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    toggleModal() {
        if (!this.state.showModal){
            let { titulo, descripcion, imagen } = this.props.datos;
            this.setState({
                showModal: !this.state.showModal,
                titulo,
                descripcion,
                imagen
            });
        }
        else {
            this.setState({showModal: !this.state.showModal});
        }
    }

    render() {
        let { titulo, descripcion, imagen } = this.props.datos;
        if (imagen === "") imagen = this.props.defaultImage;

        const isOpen = this.state.showModal;
        const toggle = this.toggleModal;

        const datos = {
            titulo: this.state.titulo,
            descripcion: this.state.descripcion,
            imagen: this.state.imagen,
            fecha: this.props.datos.fecha
        };

        return (
            <Col xs="12" md="4">
                <Card className="my-2">
                    <CardImg top width="100%" src={imagen} alt="No se puede mostrar la imagen" />
                    <CardBody>
                        <CardTitle tag="h5">{titulo}</CardTitle>
                        <CardText>{descripcion}</CardText>
                        <div className="tarjeta-botones">
                            <Button onClick={this.toggleModal}>Editar</Button>
                            <Button onClick={() => {this.props.eliminar(this.props.index)}} color="danger" className="float-right">Eliminar</Button>
                        </div>
                    </CardBody>
                </Card>

                <EditarTarjeta isOpen={isOpen} toggle={toggle} editar={this.props.editar} 
                    datos={datos} handleChange={this.handleChange} index={this.props.index} />
            </Col> 
        );
    }
}

export default Tarjeta;