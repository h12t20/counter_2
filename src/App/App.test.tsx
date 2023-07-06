import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

import {reducer} from "../Redux/Reducer";

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
test('test with any state', () => {
    expect(reducer({value: 1, minValue: 0, maxValue: 5, inputMinTitle: 3, inputMaxTitle: 8, error:'Err1'
    },{type:'RESET'})).toStrictEqual({value:0, minValue:0, maxValue:5, inputMinTitle: 0,
        inputMaxTitle: 5, error: ''})

    expect(reducer({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 6, inputMaxTitle: 15, error:'Err2'
    },{type:'RESET'})).toStrictEqual({value:2, minValue:2, maxValue:33, inputMinTitle: 2,
        inputMaxTitle: 33, error: ''})

    expect(reducer({value: 6, minValue: 4, maxValue: 33, inputMinTitle: 6, inputMaxTitle: 15, error:'30'
    },{type:'RESET'})).toStrictEqual({value:4, minValue:4, maxValue:33, inputMinTitle: 4,
        inputMaxTitle: 33, error: ''})

    expect(reducer({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 6, inputMaxTitle: 15, error:'Err2'
    },{type:'MIN_TITLE', payload: {value:'12'}
    })).toStrictEqual({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 12, inputMaxTitle: 15, error:''})

    expect(reducer({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 6, inputMaxTitle: 15, error:''
    },{type:'MIN_TITLE', payload: {value:'-3'}
    })).toStrictEqual({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 6, inputMaxTitle: 15, error:'Err2'})

    expect(reducer({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 6, inputMaxTitle: 15, error:''
    },{type:'MIN_TITLE', payload: {value:'15'}
    })).toStrictEqual({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'})

    expect(reducer({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'
    },{type:'MIN_TITLE', payload: {value:'16'}
    })).toStrictEqual({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'})

    expect(reducer({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'
    },{type:'MIN_TITLE', payload: {value:'14'}
    })).toStrictEqual({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 14, inputMaxTitle: 15, error:''})

    expect(reducer({value: 33, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'
    },{type:'MIN_TITLE', payload: {value:'14'}
    })).toStrictEqual({value: 33, minValue: 2, maxValue: 33, inputMinTitle: 14, inputMaxTitle: 15, error:'33'})

    expect(reducer({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'
    },{type:'MAX_TITLE', payload: {value:'16'}
    })).toStrictEqual({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 16, error:''})

    expect(reducer({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 16, error:''
    },{type:'MAX_TITLE', payload: {value:'15'}
    })).toStrictEqual({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'})

    expect(reducer({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'
    },{type:'MAX_TITLE', payload: {value:'14'}
    })).toStrictEqual({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'})

    expect(reducer({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'
    },{type:'MAX_TITLE', payload: {value:'14'}
    })).toStrictEqual({value: 6, minValue: 2, maxValue: 33, inputMinTitle: 15, inputMaxTitle: 15, error:'Err1'})

    expect(reducer({value: 6, minValue: 2, maxValue: 20, inputMinTitle: 10, inputMaxTitle: 15, error:'Err1'
    },{type:'SET_HANDLER'
    })).toStrictEqual({value: 6, minValue: 2, maxValue: 20, inputMinTitle: 10, inputMaxTitle: 15, error:'Err1'})

    expect(reducer({value: 6, minValue: 2, maxValue: 20, inputMinTitle: 10, inputMaxTitle: 15, error:'8'
    },{type:'SET_HANDLER'
    })).toStrictEqual({value: 10, minValue: 10, maxValue: 15, inputMinTitle: 10, inputMaxTitle: 15, error:''})

    expect(reducer({value: 6, minValue: 2, maxValue: 20, inputMinTitle: 10, inputMaxTitle: 15, error:''
    },{type:'INC_HANDLER'
    })).toStrictEqual({value: 7, minValue: 2, maxValue: 20, inputMinTitle: 10, inputMaxTitle: 15, error:''})

    expect(reducer({value: 20, minValue: 2, maxValue: 20, inputMinTitle: 10, inputMaxTitle: 15, error:''
    },{type:'INC_HANDLER'
    })).toStrictEqual({value: 20, minValue: 2, maxValue: 20, inputMinTitle: 10, inputMaxTitle: 15, error:'20'})

    expect(reducer({value: 21, minValue: 2, maxValue: 20, inputMinTitle: 10, inputMaxTitle: 15, error:'20'
    },{type:'INC_HANDLER'
    })).toStrictEqual({value: 20, minValue: 2, maxValue: 20, inputMinTitle: 10, inputMaxTitle: 15, error:'20'})
})
