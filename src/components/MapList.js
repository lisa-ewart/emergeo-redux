import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
export default class PickerCustomBackButtonExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected3: "key3"
    };
  }
  onValueChange3(value: string) {
    this.setState({
      selected3: value
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent headerBackButtonText="Baaack!" onPress={() => this.props.navigation.goBack()}>
              
            </Button>
          </Left>
          <Body>
            <Title>Custom Back Button</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              headerBackButtonText="Baaack!"
              selectedValue={this.state.selected3}
              onValueChange={this.onValueChange3.bind(this)}
            >
              <Item label="Wallet" value="key0" />
              <Item label="ATM Card" value="key1" />
              <Item label="Debit Card" value="key2" />
              <Item label="Credit Card" value="key3" />
              <Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}