import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Checkbox } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {}

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    // make token symbol uppercase
    data.set('tokenSymbol', data.get('tokenSymbol').toUpperCase());
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

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
            <Form
              noValidate='true' 
              onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Field fluid='true'>
                  <label htmlFor='ethAddress'></label>
                  <input required name='ethAddress' placeholder='Enter your ETH Address' />
                </Form.Field>
                <Form.Field fluid='true'>
                  <label htmlFor='tokenQuantity'></label>
                  <input 
                    required
                    pattern='\d+' 
                    name='tokenQuantity' 
                    placeholder='Enter quantity of tokens required eg. 1000000' />
                </Form.Field>
                <Form.Field fluid='true'>
                  <label htmlFor='tokenName'></label>
                  <input 
                    required 
                    name='tokenName'
                    type='text' 
                    placeholder='Enter your token name eg. Nakamoto' />
                </Form.Field>
                <Form.Field fluid='true'>
                  <label htmlFor='tokenSymbol'></label>
                  <input 
                    required 
                    name='tokenSymbol'
                    type='text' 
                    placeholder='Enter your token symbol eg. NKM' />
                </Form.Field>
                <Form.Field fluid='true'>
                  <label htmlFor='decimals'></label>
                  <input 
                    required
                    pattern='\d+'
                    name='decimals' 
                    placeholder='Enter number of decimal places eg. 4' />
                </Form.Field>
                <Button.Group 
                  toggle
                  active={active}
                  size='large' 
                  buttons={['Presale', 'Offering', 'ICO']}
                />
                <br />
                <br />
                <Checkbox htmlFor='checkbox' label='Do you wish to proceed?' />
                <br />
                <br />
                <Button primary fluid size='large'>Submit</Button>
              </Segment>
            </Form>
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