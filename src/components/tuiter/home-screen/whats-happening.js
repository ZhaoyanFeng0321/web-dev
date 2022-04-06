import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
                     type: 'create-tuit',
                     tuit: whatsHappening
                 });
        setWhatsHappening('');
    }

    return (
        <>
            <div className="d-flex">
                <img src="https://static.boredpanda.com/blog/wp-content/uploads/2020/07/funny-expressive-dog-corgi-genthecorgi-1-1-5f0ea719ea38a__700.jpg" className="wd-profile-pic ms-3 me-3"/>
                <div className="wd-full-width">
                    <textarea className="wd-whats-happening-text" placeholder="What's Happening?" value={whatsHappening}
                              onChange={(event) => setWhatsHappening(event.target.value)}>
                    </textarea>
                    <div className="row">
                        <div className="mb-2">
                            <span>
                                <a href="#"><i className="fas fa-image me-3"></i></a>
                                <a href="#"><i className="fas fa-chart-line me-3"></i></a>
                                <a href="#"><i className="fas fa-smile me-3"></i></a>
                                <a href="#"><i className="fas fa-calendar me-3"></i></a>
                            </span>
                            <button className="btn btn-primary fa-pull-right rounded-pill pt-1 pb-1"
                                    onClick={tuitClickHandler}>
                                Tuit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default WhatsHappening;