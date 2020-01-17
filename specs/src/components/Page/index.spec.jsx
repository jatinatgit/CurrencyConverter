import React from 'react';
import { shallow } from 'enzyme';
import { Page } from 'components';

describe("Page", () => {

  const renderComponent = props => (
    shallow(<Page {...props} />)
  );

  it('component should render as expected', ()=> {
    const component = renderComponent();
    expect(component.find('Table').length).toEqual(0);
  });
});
