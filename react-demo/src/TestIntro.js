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
                    element: "#input-group-dropdown-1",
                    intro: "From this menu you can pick the first coin in your pair"
                },
                {
                    element: "#input-group-dropdown-2",
                    intro: "From this menu you can pick the second coin in your pair"
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
    handleSelect=(e)=>{
        console.log(e);
      }


    render() {
        return (
            <div>
                <Steps
                    enabled={this.state.stepsEnabled}
                    steps={this.state.steps}
                    initialStep={this.state.initialStep}
                    onExit={this.onExit}
                />
                <Card className="MainCard" style={{ width: '25rem'}} >
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
                        </DropdownButton>
                        <FormControl aria-label="Text input with dropdown button" />
                    </InputGroup>
                    <label>+</label>
                    <InputGroup  border="info" className="mb-3">
                        <DropdownButton className="btn btn-secondary"
                        variant="outline-info"
                        title="pair 2"
                        id="input-group-dropdown-2"
                        >
                        <Dropdown.Item href="#">BTC</Dropdown.Item>
                        <Dropdown.Item href="#">BNB</Dropdown.Item>
                        <Dropdown.Item href="#">USDT</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-label="Text input with dropdown button" />
                    </InputGroup>
                    <label className="labelPool">Prices and pool share</label>
                    <div className="statsTable">
                    <Table responsive="sm" className="statsTable">
                    <thead>
                    <tr  className="statsTable">
                        <th>BUSD to BNB</th>
                        <th>BNB to BUSD</th>
                        <th>Share of pool</th>
                    </tr>
                    </thead>
                    <tbody  className="statsTable">
                    <tr  className="statsTable">
                        <td>584.934</td>
                        <td>0.00170959</td>
                        <td>0%</td>
                    </tr > 
                    </tbody>
                    </Table>  
                    <label></label>      
                    <br />
                    </div>
                    <Button ariant="primary">Connect Wallet</Button>
                </Card.Body>
                </Card>

            </div>
        );
    }
}

export default TestIntro;