import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';


    const BackDrop = (props) => {
        return <div className="backdrop" onClick={props.onCloseCart} />
    }

    const ModalContent = (props) => {
        return (
            <div className="modal">
                <h1 className="cart-heading">Cart Items</h1>
                <button className="close-button" onClick={props.onCloseCart}>X</button>
                 {props.children}
            </div>
        );
    }

    const portalElement = document.getElementById('overlay');

    const Modal = (props) => {

    return (
      <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onCloseCart={props.onCloseCart} />,portalElement)}
        {ReactDOM.createPortal(<ModalContent onCloseCart={props.onCloseCart}>{props.children}</ModalContent>,portalElement)}
        </React.Fragment>
    );

};

export default Modal;