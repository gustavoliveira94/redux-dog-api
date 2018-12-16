import React, {Component} from 'react'
import {Card, Container, Row, Col} from 'reactstrap'

import SearchBoxContainer from './SearchBoxContainer'
import InfoContainer from './InfoContainer'

class App extends Component {
  render() {
    return (
      <>
        <Row style={{marginTop: '10%'}}>
          <Col sm="12" md={{size: 6, offset: 3}}>
            <Card style={{padding: '20px'}}>
              <Container>
                <SearchBoxContainer />
                <InfoContainer />
              </Container>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}

export default App
