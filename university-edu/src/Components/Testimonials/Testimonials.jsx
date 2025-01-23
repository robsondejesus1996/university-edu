import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import "./Testimonials.css";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <ArrowCircleRight size={32} className="next-btn" onClick={slideForward} />
      <ArrowCircleLeft size={32} className="back-btn" onClick={slideBackward} />
      <img src="" alt="" className="naxt-btn" />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-inf">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                possimus impedit aut dolor aspernatur debitis doloremque laborum
                voluptas delectus temporibus.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-inf">
                <img
                  src="https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                possimus impedit aut dolor aspernatur debitis doloremque laborum
                voluptas delectus temporibus.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-inf">
                <img
                  src="https://images.unsplash.com/photo-1505682614136-0a12f9f7beea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                possimus impedit aut dolor aspernatur debitis doloremque laborum
                voluptas delectus temporibus.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-inf">
                <img
                  src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                possimus impedit aut dolor aspernatur debitis doloremque laborum
                voluptas delectus temporibus.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
