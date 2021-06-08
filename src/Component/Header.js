import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';



import { Popover, PopoverHeader, PopoverBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { UncontrolledPopover } from 'reactstrap';

// import {  } from 'reactstrap';



// import { Button} from 'react-bootstrap';


// import Overlay from 'react-bootstrap/Overlay'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { Component } from "react";
// import { Popover, PopoverHeader, PopoverBody } from "reactstrap";



// import { Popover } from 'antd';

// import { useRef } from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
// // import BaseOverlay, {
// //   OverlayProps as BaseOverlayProps,
// // } from 'react-overlays/Overlay';
// import safeFindDOMNode from 'react-overlays/safeFindDOMNode';
// import { componentOrElement, elementType } from 'prop-types-extra';
// // import usePopperMarginModifiers from './usePopperMarginModifiers';
// // import Fade from './Fade';
// // import { TransitionType } from './helpers';







const Header = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // const content = (
    //     <div>
    //         <p>Content</p>
    //         <p>Content</p>
    //         <p>Content</p>
    //         <p>Content</p>
    //         <p>Content</p>
    //         <p>Content</p>
    //     </div>
    // );


    // const popover = (
    //     <Popover id="popover-basic">
    //       <Popover.Title as="h3">Popover right</Popover.Title>
    //       <Popover.Content>
    //         And here's some <strong>amazing</strong> content. It's very engaging.
    //         right?
    //       </Popover.Content>
    //     </Popover>
    // );

    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);


    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle1 = () => setDropdownOpen(prevState => !prevState);



    return (

        <div>


            {/* <DropdownToggle caret>
                Dropdown's menu is right-aligned
        </DropdownToggle> */}



            <div className="fixed-top">
                <div className="header2">

                    <div className="loaction">


                        <Button variant="none" onClick={handleShow}>
                            Change Loaction
                        </Button>

                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="text-center"><img src="./subwaym.jpg" alt="subway" width="30%" height="30%" /></div>
                                <div className="text-center">Select Your Location</div>
                               
                                <div>


                                    <Dropdown isOpen={dropdownOpen} toggle={toggle1}>
                                        <DropdownToggle caret center>
                                            Select City
                                        </DropdownToggle>
                                        <DropdownMenu center>
                                            {/* <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem> */}
                                            <ul>
                                            <li>a</li>
                                            <li>a</li>
                                            <li>a</li>
                                                
                                            </ul>
                
                                        </DropdownMenu>
                                    </Dropdown>


                                    {/* <DropdownMenu right>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
                                        </DropdownMenu> */}

                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                {/* <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button> */}
                                <Button variant="primary" width="100%" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                    <div className="subWay"><img src="./subwaym.jpg" alt="subway" width="100%" height="100%" /></div>
                    <div className="register" >SignIn / Register </div>

                    <div className="main2">

                        <div className="main">
                            <div className="quantity"><p> 0</p></div>
                            <div className="cart"><img src="cart.jpg" alt="cart" width="100%" height="100%" id="PopoverLegacy" /></div>



                            {/* <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                <Button variant="success">Click me to see</Button>
                            </OverlayTrigger> */}

                            {/* <div>
                            
                            </div> */}
 

                            <div className="arow">
                                {/* <Popover content={content} title="Title" className="tooltip" trigger="click"> */}
                                {/* <img src="./Arrow.jpg" alt="Arow" width="100%" height="100%" id="Popover1" type="button" /> */}
                                {/* <Button >
                                    Launch Popover
                                </Button> */}
                                {/* <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                                    <PopoverHeader>Popover Title</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                </Popover> */}


                                {/* </Popover> */}
                                <img src="./Arrow.jpg" alt="Arow" width="100%" height="100%" id="PopoverLegacy" type="button" />
                                {/* <Button id= type="button">
                                    Launch Popover (Legacy)
                                </Button> */}

                                <UncontrolledPopover caret trigger="legacy" placement="bottom" target="PopoverLegacy">
                                    <PopoverHeader>Legacy Trigger</PopoverHeader>
                                    <PopoverBody>
                                        Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.</PopoverBody>
                                </UncontrolledPopover>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="pic">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-50 slider_image"
                            src="./subway.jpg"
                            alt="First slide"
                            width="300px"
                            height="350px"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-50 slider_image"
                            src="./subway2.jpg"
                            alt="Second slide"
                            width="300px"
                            height="350px"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}

export default Header;