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

    useEffect(() => {
        GetData();
        console.log(data);
    }, []);

    const GetData = async () => {
        try {
            const response = await axios.get(`/Voter`);
            setData(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const input = (e) => {
        const { name, value } = e.target;
        setvalue({ ...val, [name]: value });
    };

    const Submit = async (e) => {
        e.preventDefault();
        console.log(val);
        try {
            const create = await axios.post('/Voter', val);
            if (create.data === "done") {
                window.location.reload();
            } else {
                window.location.reload();
            }
        } catch (error) {
            console.error('Error creating game:', error);
        }
    };

    const deletename = async (e) => {
        console.log(val);
        try {
            const create = await axios.delete(`/delete/${e}`);
            if (create.data === "deleted") {
                window.location.reload();
            }
        } catch (error) {
            console.error('Error creating game:', error);
        }
    };

    const updated = (d) => {
        const up = axios.put(`/update/${d}`, val);
        console.log(up.data);
        if (up.data === 'update') {
        }
        window.location.reload();
    };

    return (
        <>
            <Nav />
            <div className="background-container">
                <button
                    onClick={handleShow}
                    className="m-3 bt"
                    style={{ width: '130px', fontSize: '18px', backgroundColor: '#ae0c00' }}
                >
                    Make Vote
                </button>
                <div></div>
                <div className="play_back">
                    <div className="w-75">
                        {data.map((value) => (
                            <div key={value.id}>
                                <div className="inside_play mt-3">
                                    <div className="m-2">
                                        Selected Candidate  {value.candidate}
                                    </div>
                                    <div className='m-2'> Voter Name : {value.name}</div>
                                    <div className='m-2'> Voter ID : {value.id}</div>
                                    <div className='d-flex'>
                                        <div><button className='bt2 ms-2' onClick={handleShow2}>Edit</button></div>
                                        <div><button className='bt2 ms-2' onClick={() => { deletename(value.id) }}>Delete</button></div>
                                    </div>
                                </div>
                                <Modal show={show2} onHide={handleClose2} centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit</Modal.Title>
                                    </Modal.Header>
                                    <div>
                                        <div className="modal_in m-3"></div>
                                        <div className="modal_in m-3">
                                            <label>Voter Name</label>
                                            <input
                                                className="mt-1 p-1 inp"
                                                name="name"
                                                min={1}
                                                max={100}
                                                style={{ width: '90%' }}
                                                onChange={input}
                                            />
                                        </div>
                                        <div className="modal_in m-3">
                                            <label>Voter ID</label>
                                            <input
                                                className="mt-1 p-1 inp"
                                                name="id"
                                                min={1}
                                                max={100}
                                                style={{ width: '90%' }}
                                                onChange={input}
                                            />
                                        </div>
                                        <button
                                            className="ms-3 mb-3 bt"
                                            style={{ width: '100px', fontSize: '17px' }}
                                            onClick={() => { updated(value.id) }}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </Modal>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>VOTING APPLICATION</Modal.Title>
                </Modal.Header>
                <div>
                    <div className="modal_in m-3">
                        <select className='inp' onChange={input} name='candidate'>
                            <option>Select Candidate </option>
                            <option>Akshitha</option>
                            <option>Dharaniya</option>
                            <option>Sonika</option>
                            <option>Pavithra</option>
                        </select>
                    </div>
                    <div className="modal_in m-3">
                        <label>Voter Name</label>
                        <input
                            className="mt-1 p-1 inp"
                            name="name"
                            min={1}
                            max={100}
                            style={{ width: '90%' }}
                            onChange={input}
                        />
                    </div>
                    <div className="modal_in m-3">
                        <label>Voter ID</label>
                        <input
                            className="mt-1 p-1 inp"
                            name="id"
                            min={1}
                            max={100}
                            style={{ width: '90%' }}
                            onChange={input}
                        />
                    </div>
                    <button
                        className="ms-3 mb-3 bt"
                        style={{ width: '100px', fontSize: '17px' }}
                        onClick={Submit}
                    >
                        Vote
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default Team;
