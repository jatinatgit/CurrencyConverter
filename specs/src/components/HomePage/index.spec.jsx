import React from 'react';
import { mount } from 'enzyme';
import { HomePage } from 'components';

describe("HomePage", () => {

  const defaultProps = {
    conversions: {
      dataList: []
    },
    CurrencyService: {
      convertCurrency: jest.fn()
    }
  };

  const renderComponent = props => (
    mount(<HomePage {...props} />)
  );

  it('component should render as expected', ()=> {
    const component = renderComponent(defaultProps);
    expect(component.find('Table').length).toEqual(0);
  });

  it('component should render as expected in case of error', ()=> {
    const component = renderComponent({...defaultProps, conversions: { ...defaultProps.conversions, error: 'Error'}});
    expect(component.find('Message').length).toEqual(1);
  });

  it('component should render as expected with dataList', ()=> {
    const component = renderComponent({...defaultProps, conversions: { dataList: [
      {fromCurr: 'USD', fromAmount: '1', toCurr: 'EUR', toAmount: '1.89'}
    ]}});
    expect(component.find('Table').length).toEqual(1);
  });
  
  it('should simulate dropdown change', ()=> {
    const component = renderComponent(defaultProps);
    component.find('Dropdown').at(0).simulate('change', { e: {}}, { value: 'GBP' });
  });

  it('should simulate 2nd dropdown change', ()=> {
    const component = renderComponent(defaultProps);
    component.find('Dropdown').at(1).simulate('change', { e: {}}, { value: 'GBP' });
  });

  it('should simulate Input change', ()=> {
    const component = renderComponent(defaultProps);
    component.find('Input').at(0).simulate('change', { e: {}}, { value: '10' });
  });

});
