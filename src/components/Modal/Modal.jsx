
import  ReactDOM  from "react-dom";
import './Modal.css'

const Modal = ({closeModal}) => {
    return ReactDOM.createPortal ( 
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e)=>e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Hi, Check out my other projects</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <h3>Have a look at my other projects</h3>
                    <p>I have created some other amazing projects, check out these projects.</p>
                    <p>You may like that projects too.</p>
                </div>
                <div className="lower-section">
                    <button onClick={closeModal} className="modal-btn btn-red">Close</button>
                    <a href="http://github.com/Rohit-Nandagawali/" target="_blank" rel="noreferrer" className="modal-btn btn-green">Check Projects</a>

                </div>

            </div>
        </div>,
        document.getElementById('modal')
     );
}
 
export default Modal;