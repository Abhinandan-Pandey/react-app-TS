import React from 'react';
import {render as rtlRender, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import App from './App';
import reducer,{initialState} from "./store/reducer"

describe("test for App component",()=>{

  const render = (
    ui:any,
    {
      initialReducerState = {articles:initialState},
      store = createStore(reducer, initialReducerState),
      ...renderOptions
    } = {},
  ) => {
    const Wrapper = ({children}:any) => <Provider store={store}>{children}</Provider>
  
    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
  }

  test('renders learn react link', async() => {
    render(<App />, {initialReducerState: {
     articles:{ articles: [
        {
          id: 1,
          title: "post test",
          body:
            "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        }]}
    }});
    const linkElement = screen.getByText(/post test/i);
    expect(linkElement).toBeInTheDocument();
    userEvent.type(screen.getByPlaceholderText("Title"),"abhinandan")
    userEvent.type(screen.getByPlaceholderText("Description"),"pandey")
    userEvent.click(screen.getByText("Add article"))
    // await waitFor(()=> expect(screen.getByText('abhinandan')).toBeInTheDocument()) 
  });
})
