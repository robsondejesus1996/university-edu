import { ArrowCircleRight } from 'phosphor-react';
import './Campus.css';

const Campus = () => {
  return (
        <div className="campus">
          <div className="gallery">
            <img src="https://images.unsplash.com/photo-1505766358654-db278b02c108?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1576164285450-6d26c5b1a2a6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1518707332890-e05af3c6bfff?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://plus.unsplash.com/premium_photo-1683887034491-f58b4c4fca72?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <button className="btn dark-btn">See more here <ArrowCircleRight size={32} /> </button>
        </div>
    )
}


export default Campus;