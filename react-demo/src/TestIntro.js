import React, {Component} from 'react';
import { Steps } from "intro.js-react";
import { Card, Button, InputGroup, Dropdown, DropdownButton, FormControl, Table} from 'react-bootstrap'
import './introStyle.css'
import 'bootstrap'
class TestIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepsEnabled: true,
            initialStep: 0,
            steps: [
                {
                    element: "#hello",
                    intro: "Click on this to login"
                },
                {
                    element: ".world",
                    intro: "Click on this to view the tutorial again"
                }
            ],
            hintsEnabled: false,
            hints: [
                {
                    element: ".hello",
                    hint: "Hello hint",
                    hintPosition: "middle-right"
                }
            ]
        };
    }


    onExit = () => {
        this.setState(() => ({ stepsEnabled: false }));
    };

    toggleSteps = () => {
        this.setState(prevState => ({ stepsEnabled: !prevState.stepsEnabled }));
    };



    render() {
        return (
            <div>
                <Steps
                    enabled={this.state.stepsEnabled}
                    steps={this.state.steps}
                    initialStep={this.state.initialStep}
                    onExit={this.onExit}
                />
                <Card className="MainCard" style={{ width: '40rem'}} >
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        Add Liquidity demo
                    </Card.Text>

                    <InputGroup colour="white" border="info" className="mb-3">
                        <DropdownButton
                        variant="outline-info"
                        title="pair 1"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item href="#">BTC</Dropdown.Item>
                        <Dropdown.Item href="#">BNB</Dropdown.Item>
                        <Dropdown.Item href="#">USDT</Dropdown.Item>
                        <Dropdown.Divider />
                        </DropdownButton>
                        <FormControl aria-label="Text input with dropdown button" />
                    </InputGroup>
                    <label>+</label>
                    <InputGroup  border="info" className="mb-3">
                        <DropdownButton className="btn btn-secondary"
                        variant="outline-info"
                        title="pair 1"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item href="#">BTC</Dropdown.Item>
                        <Dropdown.Item href="#">BNB</Dropdown.Item>
                        <Dropdown.Item href="#">USDT</Dropdown.Item>
                        <Dropdown.Divider />
                        </DropdownButton>
                        <FormControl aria-label="Text input with dropdown button" />
                    </InputGroup>
                    <label className="labelPool">Prices and pool share</label>   
                    <label >0.0   0.0   0.0</label>
                    <label></label>      
                    <br />
                    <Button ariant="primary">Connect Wallet</Button>
                </Card.Body>
                </Card>

            </div>
        );
    }
}

export default TestIntro;