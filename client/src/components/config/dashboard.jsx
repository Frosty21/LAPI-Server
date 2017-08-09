import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid, Segment, Menu, Header, Label, Divider } from 'semantic-ui-react'

class Dashboard extends Component {

  render() {
    let message = null;
    if (this.props.message) message = <Menu.Item><Label>{this.props.message}</Label></Menu.Item>;
    return  (
      <Grid.Row>
        <Segment>
          <Menu secondary>
            <Menu.Item><Header>LiveAPI</Header></Menu.Item>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Messages</Menu.Item>
            {message}
          </Menu>
          <Divider />
          <Grid>
            <Grid.Column width={4}>
              <Menu secondary vertical pointing fluid>
                <Menu.Item>Home</Menu.Item>
                <Menu.Item>Messages</Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={12}>
            </Grid.Column>
          </Grid>
        </Segment>
      </Grid.Row>
    );
  }
}

export default Dashboard;