import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../../components/FormInput';

const props = {
  input: {
    name: 'name'
  },
  label: 'Name:',
  type: '',
  placeholder: '',
  meta: {
    error: null,
    touched: false,
  },
}

describe('Input', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<FormInput {...props} />)
  })

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  })

  it('wraps content in a div.uk-margin', () => {
    expect(wrapper.find('div.uk-margin').length).toEqual(1);
  })

  it('contains an input tag with props for input, type & placeholder and .uk-input class', () => {
    const input = wrapper.find('input');
    expect(input.length).toEqual(1);
    expect(input.props()).toEqual({
      className: 'uk-input', name: 'name', type: '', placeholder: ''
    })
  })

  it('contains a label tag with label prop value as the innerHTML', () => {
    const label = wrapper.find('label');
    expect(label.length).toEqual(1);
    expect(label.childAt(0).text()).toEqual('Name:');
  })

  describe('if errors and touched', () => {
    let errorProps;
    
    beforeEach(() => {
      errorProps = Object.assign({}, props, {
        meta: {
          error: 'Name is required!',
          touched: true,
        }
      });
      wrapper = shallow(<FormInput {...errorProps} />);
    })

    it('renders a div.uk-alert-danger', () => {
      expect(wrapper.find('div.uk-alert-danger').length).toEqual(1);
    })

    it('renders the the error message', () => {
      expect(wrapper.find('div.uk-alert-danger').childAt(0).text()).toEqual('Name is required!');
    })
  })
})