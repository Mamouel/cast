import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('App component', () => {
  test('should shallow correctly', () => {
      expect(shallow(
        <App />
      )).toMatchSnapshot() 
  })
  test('should mount correctly', () => {
      expect(mount(
        <Router>
          <App />
        </Router>
      )).toMatchSnapshot() 
  })
  test('should render correctly', () => {
      expect(render(
        <Router>
          <App />
        </Router>
      )).toMatchSnapshot() 
  })
})