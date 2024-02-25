import  { useState } from 'react';
import {useNavigate} from "react-router-dom";


export default function Task12({setRes}) {
    const redirect = useNavigate();

    const [carbon, setCarbon] = useState('');
    const [hydrogen, setHydrogen] = useState('');
    const [oxygen, setOxygen] = useState('');
    const [sulfur, setSulfur] = useState('');
    const [vanadium, setVanadium] = useState('');
    const [Qdaf, setQdaf] = useState('');
    const [moisture, setMoisture] = useState('');
    const [ashContent, setAshContent] = useState('');

    const handleInputChange = (event, setValue) => {
        setValue(event.target.value);
    };


    const calculate = () => {
        const inputValues = {
            'carbon': carbon,
            'hydrogen': hydrogen,
            'oxygen': oxygen,
            'sulfur': sulfur,
            'vanadium': vanadium,
            'Qdaf': Qdaf,
            'moisture': moisture,
            'ashContent': ashContent
        };

        const carbonR = carbon*(100 - moisture - ashContent)/100;
        const hydrogenR = hydrogen*(100 - moisture - ashContent)/100;
        const oxygenR = oxygen*(100-moisture/10-ashContent/10)/100;
        const sulfurR = sulfur*(100-moisture-ashContent)/100;
        const ashR = ashContent*(100-moisture)/100;
        const vanadiumR = vanadium*(100 - moisture)/100;

        const Qr = Qdaf*((100-moisture-ashContent)/100)-0.025*moisture;

        setRes({
            carbonR,
            hydrogenR,
            oxygenR,
            sulfurR,
            ashR,
            vanadiumR,
            Qr
        })
        console.log(inputValues);
        redirect("/result");
    }





    return (
        <>

            <div>
                <label htmlFor="carbon">
                    carbon
                    <input id="carbon" value={carbon} onChange={(event) => handleInputChange(event, setCarbon)}/>
                </label>
            </div>
            <div>
                <label htmlFor="hydrogen">
                    hydrogen
                    <input id="hydrogen" value={hydrogen} onChange={(event) => handleInputChange(event, setHydrogen)}/>
                </label>
            </div>
            <div>
                <label htmlFor="oxygen">
                    oxygen
                    <input id="oxygen" value={oxygen} onChange={(event) => handleInputChange(event, setOxygen)}/>
                </label>
            </div>
            <div>
                <label htmlFor="sulfur">
                    sulfur
                    <input id="sulfur" value={sulfur} onChange={(event) => handleInputChange(event, setSulfur)}/>
                </label>
            </div>
            <div>
                <label htmlFor="vanadium">
                    vanadium
                    <input id="vanadium" value={vanadium} onChange={(event) => handleInputChange(event, setVanadium)}/>
                </label>
            </div>
            <div>
                <label htmlFor="Qdaf">
                    Qdaf
                    <input id="Qdaf" value={Qdaf} onChange={(event) => handleInputChange(event, setQdaf)}/>
                </label>
            </div>
            <div>
                <label htmlFor="moisture">
                    moisture
                    <input id="moisture" value={moisture} onChange={(event) => handleInputChange(event, setMoisture)}/>
                </label>
            </div>
            <div>
                <label htmlFor="ashContent">
                    ashContent
                    <input id="ashContent" value={ashContent} onChange={(event) => handleInputChange(event, setAshContent)}/>
                </label>
            </div>
            <div>
                <button onClick={calculate}>Submit</button>
            </div>
        </>
    );
}
