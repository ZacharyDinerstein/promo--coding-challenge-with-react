import React from 'react';
import ReactDOM from 'react-dom';

export function Modal(props) {

  return (
    <section className="modal d-none">
      <div id="modal__wrapper" className="modal__wrapper">
        <div className="modal__container">
          <h3 id="modal__header" className="modal__header">Leave us your email :-)</h3>
        </div> 
      </div>
    </section>
  );
}
