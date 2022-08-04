import React from 'react';

const RegisterModul = ({registerModul}) => {
    const {name, email,} = registerModul;
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-green-500 text-lg">Congratulations {name}</h3>
                <p className="py-4">You are successfully apply Nobojagormon Academy</p>
                <div className="modal-action">
                <label for="my-modal-6" className="btn">Yay!</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default RegisterModul;