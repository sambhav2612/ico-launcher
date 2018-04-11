import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Checkbox } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  state = {}

  handleSubmit = () => {}

  handleClick = () => 
    this.setState({
      active: !this.state.active
    });

  render() {
    const { active } = this.state;

    return (
      <div className='token-form'>
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.token-form {
        height: 100%;
      }
      `}</style>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: '450' }}>
            <Header as='h2' color='teal' textAlign='center'>
              Create your own ICO Token based on ERC20 Standard
            </Header>
            <Form onSubmit={this._onSubmit}>
              <Segment stacked>
                <Form.Field fluid='true'>
                  <input placeholder='Enter your ETH Address' />
                </Form.Field>
                <Form.Field fluid='true'>
                  <input placeholder='Enter quantity of tokens required eg. 1000000' />
                </Form.Field>
                <Form.Field fluid='true'>
                  <input placeholder='Enter your token name eg. Nakamoto' />
                </Form.Field>
                <Form.Field fluid='true'>
                  <input placeholder='Enter your token symbol eg. NKM' />
                </Form.Field>
                <Form.Field fluid='true'>
                  <input placeholder='Enter number of decimal places eg. 4' />
                </Form.Field>
                <Button.Group 
                  toggle
                  size='large' 
                  buttons={['Presale', 'Offering', 'ICO']}
                />
              </Segment>
            </Form>
            <br />
            <Checkbox label='Do you wish to proceed?' />
            <br />
            <br />
            <Button primary fluid size='large'>Submit</Button>
            <br />
            <br />
            <br />
            <Message>&copy; Brought to you by 
              <a 
                href="https://github.com/BlockchainDevs/" 
                target="_blank" 
                rel='noopener noreferrer'
                >{' '}BlockchainDevs</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
};

export default App;