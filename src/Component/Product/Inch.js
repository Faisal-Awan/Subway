import React, {useState} from 'react';
import {inch} from "./InchData"

import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Inch = () => {

    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = React.useState('Male');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
   
    return(

        <div className="container">

            <div>
                <div className="d-flex flex-wrap align-content-start bg-light">
                    {
                        inch.map(p =>

                            <div class="card" id="card1">
                                <div>
                                    <img class="card-img-left" src={p.image} alt="Card" width="200" height="195" />
                                </div>
                                <div class="setD">
                                    <div className="setD2">
                                        <h6 class="card-title">{p.name1}</h6>
                                        <h6 class="card-title">{p.name2}</h6>
                                    </div>
                                    <div className="setD3">
                                        <p class="priceA">{p.price}</p>
                                        <div>
                                            <Button variant="warning" onClick={handleShow}>
                                                Add to Cart
                                                </Button>

                                            <Modal show={show} onHide={handleClose} animation={false}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Modal heading</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>

                                                    <div>

                                                        <FormControl component="fieldset">
                                                            <FormLabel class="HeadingSet">Bread(required)</FormLabel>
                                                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                                <FormControlLabel value="Se" control={<Radio />} label="Sesame" />
                                                                <FormControlLabel value="Ho" control={<Radio />} label="Honey Oat" />
                                                                <FormControlLabel value="Wh" control={<Radio />} label="Wheat" />
                                                                <FormControlLabel value="Po" control={<Radio />} label="Parmesan Oregano" />
                                                                <FormControlLabel value="It" control={<Radio />} label="Italian" />
                                                            </RadioGroup>
                                                            <FormLabel class="HeadingSet">Sauces(required)</FormLabel>
                                                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                                <FormControlLabel value="Ti" control={<Radio />} label="Thousand Island" />
                                                                <FormControlLabel value="Sc" control={<Radio />} label="South West Chipotle" />
                                                                <FormControlLabel value="Oo" control={<Radio />} label="Olive Oil" />
                                                                <FormControlLabel value="Ms" control={<Radio />} label="Mustard Sauce" />
                                                                <FormControlLabel value="Ma" control={<Radio />} label="Mayonnaise" />
                                                            </RadioGroup>
                                                            <FormLabel class="HeadingSet">Veggies(required)</FormLabel>
                                                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                                <FormControlLabel value="Ta" control={<Radio />} label="Tomato" />
                                                                <FormControlLabel value="Pi" control={<Radio />} label="Pickles" />
                                                                <FormControlLabel value="On" control={<Radio />} label="Onion" />
                                                                <FormControlLabel value="Ol" control={<Radio />} label="Olives" />
                                                                <FormControlLabel value="Ja" control={<Radio />} label="Jalapeno" />
                                                            </RadioGroup>
                                                        </FormControl>

                                                    </div>

                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                        </Button>
                                                    <Button variant="primary" onClick={handleClose}>
                                                        Save Changes
                                                        </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>

            </div>
        </div>        




    )   

};

export default Inch;
