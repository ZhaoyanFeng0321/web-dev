import {useState} from 'react';
const GBAXF = () => {
    const [xiv, setXiv] = useState({gcliad: 5});
    return (
        <div>
            <button
                onClick={
                    () => setXiv({
                                     ...xiv,
                                     gcliad: xiv.gcliad + 5
                                 })}>
                Fup
            </button>
            <h1>{xiv.gcliad}</h1>
            <button
                onClick={
                    () => setXiv({
                                     ...xiv,
                                     gcliad: xiv.gcliad - 4
                                 })}>
                Qdewaesf
            </button>
        </div>
    )
}
