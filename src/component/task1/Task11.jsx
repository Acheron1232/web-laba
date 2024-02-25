import  { useState } from 'react';
import {useNavigate} from "react-router-dom";

export default function Task11({setRes}) {
    const redirect = useNavigate();
    const [hp, setHp] = useState('');
    const [cp, setCp] = useState('');
    const [sp, setSp] = useState('');
    const [np, setNp] = useState('');
    const [op, setOp] = useState('');
    const [wp, setWp] = useState('');
    const [ap, setAp] = useState('');

    const handleInputChange = (event, setValue) => {
        setValue(event.target.value);
    };


    const calculate = () => {
        const inputValues = {
            'H^P': hp,
            'C^P': cp,
            'S^P': sp,
            'N^P': np,
            'O^P': op,
            'W^P': wp,
            'A^P': ap,
        };

        const KPC = 100 / (100 - wp);
        const KPG = 100 / (100 - wp - ap);

        const hc = hp * KPC;
        const cc = cp * KPC;
        const sc = sp * KPC;
        const nc = np * KPC;
        const oc = op * KPC;
        const ac = ap * KPC;

        console.log(hc + cc + sc + nc + oc + ac);
//!
        const hg = hp * KPG;
        const cg = cp * KPG;
        const sg = sp * KPG;
        const ng = np * KPG;
        const og = op * KPG;

        console.log(hg + cg + sg + ng + og);

        const QPH =  339*cp+1030*hp-108.8*(op-sp)-25*wp;
        console.log(QPH)

        const QCH = (QPH/1000 + 0.025*wp)*(100/(100-wp));

        console.log(QCH)

        const QGH = (QPH/1000 +0.025*wp)*(100/(100-wp-ap));
//!
        console.log(QGH)

        console.log(inputValues);

        setRes({
            hg,
            cg,
            sg,
            ng,
            og,
            QPH,
            QCH,
            QGH
        })

        redirect("/result");

    }





    return (
        <>

            <div>
                <label htmlFor="H^P">
                    H^P
                    <input id="H^P" value={hp} onChange={(event) => handleInputChange(event, setHp)} />
                </label>
            </div>
            <div>
                <label htmlFor="C^P">
                    C^P
                    <input id="C^P" value={cp} onChange={(event) => handleInputChange(event, setCp)} />
                </label>
            </div>
            <div>
                <label htmlFor="S^P">
                    S^P
                    <input id="S^P" value={sp} onChange={(event) => handleInputChange(event, setSp)} />
                </label>
            </div>
            <div>
                <label htmlFor="N^P">
                    N^P
                    <input id="N^P" value={np} onChange={(event) => handleInputChange(event, setNp)} />
                </label>
            </div>
            <div>
                <label htmlFor="O^P">
                    O^P
                    <input id="O^P" value={op} onChange={(event) => handleInputChange(event, setOp)} />
                </label>
            </div>
            <div>
                <label htmlFor="W^P">
                    W^P
                    <input id="W^P" value={wp} onChange={(event) => handleInputChange(event, setWp)} />
                </label>
            </div>
            <div>
                <label htmlFor="A^P">
                    A^P
                    <input id="A^P" value={ap} onChange={(event) => handleInputChange(event, setAp)} />
                </label>
            </div>

            <div>
                <button onClick={calculate}>Submit</button>
            </div>
        </>
    );
}
