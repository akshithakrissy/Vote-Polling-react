import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../component/topNav';
import Modal from 'react-bootstrap/Modal';
import '../style/style.css';

function Team() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);
    const [val, setvalue] = useState({
        candidate: '',
        name: '',
        id: '',
    });
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [sonika,setsonika]=useState();
    const [Akshitha,setAkshitha]=useState();
    const [Dharaniya,setDharaniya]=useState();
    const [Pavithra,setPavithra] = useState();

    useEffect(() => {
        GetData();
        console.log(data);
        console.log(sonika);
    }, []);

    const GetData = async () => {
        try {
            
            const count1 = await axios.get(`/sonika`);
            setsonika(count1.data);
            const count2 = await axios.get(`/Pavithra`);
            setPavithra(count2.data);
            const count3 = await axios.get(`/Akshitha`);
            setAkshitha(count3.data);
            const count4 = await axios.get(`/Dharaniya`);
            setDharaniya(count4.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const input = (e) => {
        const { name, value } = e.target;
        setvalue({ ...val, [name]: value });
    };


    return (
        <>
            <Nav />
            <div>
                <div></div>
                <div className="play_back">
                <div className="w-75"> 
                        <div>
                            <div className="inside_play mt-3 d-flex flex-column justify-content-center align-items-center">
                            <div>Akshitha</div>
                            <div className='h3 mt-2'>{Akshitha}</div>
                            </div>
                        </div>
                </div>
                    <div className="w-75">  
                            <div>
                                <div className="inside_play mt-3 d-flex flex-column justify-content-center align-items-center">
                                <div>Pavithra</div>
                                <div className='h3 mt-2'>{Pavithra}</div>
                                </div>
                            </div>
                    </div>
                    <div className="w-75">
                            <div>
                                <div className="inside_play mt-3 d-flex flex-column justify-content-center align-items-center">
                                <div>Sonika</div>
                                <div className='h3 mt-2'>{sonika}</div>
                                </div>
                            </div>
                    </div>
                    <div className="w-75">
                            <div>
                                <div className="inside_play mt-3 d-flex flex-column justify-content-center align-items-center">
                                <div>Dharaniya</div>
                                <div className='h3 mt-2'>{Dharaniya}</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
