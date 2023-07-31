import {reducer} from "./reducer";

test('differentStateTest', () => {
    expect(reducer({
        value: 1,
        minValue: 0,
        maxValue: 5,
        inputMinTitle: 3,
        inputMaxTitle: 8,
        error: 'Err1',
        displaySet: false
    }, {type: 'RESET'})).toStrictEqual({
        value: 0,
        minValue: 0,
        maxValue: 5,
        inputMinTitle: 0,
        inputMaxTitle: 5,
        error: '',
        displaySet: false
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 6,
        inputMaxTitle: 15,
        error: 'Err2',
        displaySet: false
    }, {type: 'RESET'})).toStrictEqual({
        value: 2,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 2,
        inputMaxTitle: 33,
        error: '',
        displaySet: false
    })

    expect(reducer({
        value: 6,
        minValue: 4,
        maxValue: 33,
        inputMinTitle: 6,
        inputMaxTitle: 15,
        error: '30',
        displaySet: false
    }, {type: 'RESET'})).toStrictEqual({
        value: 4,
        minValue: 4,
        maxValue: 33,
        inputMinTitle: 4,
        inputMaxTitle: 33,
        error: '',
        displaySet: false
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 6,
        inputMaxTitle: 15,
        error: 'Err2',
        displaySet: true
    }, {
        type: 'MIN_TITLE',
        payload: {value: '12'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 12,
        inputMaxTitle: 15,
        error: '',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 6,
        inputMaxTitle: 15,
        error: '',
        displaySet: true
    }, {
        type: 'MIN_TITLE',
        payload: {value: '-3'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: -1,
        inputMaxTitle: 15,
        error: 'Err2',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 6,
        inputMaxTitle: 15,
        error: '',
        displaySet: true
    }, {
        type: 'MIN_TITLE',
        payload: {value: '15'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    }, {
        type: 'MIN_TITLE',
        payload: {value: '18'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 0,
        inputMaxTitle: 0,
        error: '',
        displaySet: true
    }, {
        type: 'MIN_TITLE',
        payload: {value: '-1'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: -1,
        inputMaxTitle: 0,
        error: 'Err1',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    }, {
        type: 'MIN_TITLE',
        payload: {value: '14'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 14,
        inputMaxTitle: 15,
        error: '',
        displaySet: true
    })

    expect(reducer({
        value: 33,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    }, {
        type: 'MIN_TITLE',
        payload: {value: '14'}
    })).toStrictEqual({
        value: 33,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 14,
        inputMaxTitle: 15,
        error: '33',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    }, {
        type: 'MAX_TITLE',
        payload: {value: '16'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 16,
        error: '',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: -1,
        inputMaxTitle: 120,
        error: '',
        displaySet: true
    }, {
        type: 'MAX_TITLE',
        payload: {value: '0'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: -1,
        inputMaxTitle: 0,
        error: 'Err1',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: -1,
        inputMaxTitle: 0,
        error: 'Err1',
        displaySet: true
    }, {
        type: 'MAX_TITLE',
        payload: {value: '1'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: -1,
        inputMaxTitle: 1,
        error: 'Err2',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 16,
        error: '',
        displaySet: true
    }, {
        type: 'MAX_TITLE',
        payload: {value: '15'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 16,
        error: '',
        displaySet: true
    }, {
        type: 'MAX_TITLE',
        payload: {value: '-15'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 16,
        error: 'Err1',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    }, {
        type: 'MAX_TITLE',
        payload: {value: '14'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    }, {
        type: 'MAX_TITLE',
        payload: {value: '14'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 16,
        error: 'Err2',
        displaySet: true
    }, {
        type: 'MAX_TITLE',
        payload: {value: '14'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 16,
        error: 'Err1',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    }, {
        type: 'MAX_TITLE',
        payload: {value: '14'}
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 33,
        inputMinTitle: 15,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: true
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: 10,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: false
    }, {
        type: 'SET_HANDLER'
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: 10,
        inputMaxTitle: 15,
        error: 'Err1',
        displaySet: false
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: 10,
        inputMaxTitle: 15,
        error: '8',
        displaySet: true
    }, {
        type: 'SET_HANDLER'
    })).toStrictEqual({
        value: 10,
        minValue: 10,
        maxValue: 15,
        inputMinTitle: 10,
        inputMaxTitle: 15,
        error: '',
        displaySet: false
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: -2,
        inputMaxTitle: 15,
        error: 'Err2',
        displaySet: false
    }, {
        type: 'SET_HANDLER'
    })).toStrictEqual({
        value: 6,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: -2,
        inputMaxTitle: 15,
        error: 'Err2',
        displaySet: false
    })

    expect(reducer({
        value: 6,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: 10,
        inputMaxTitle: 15,
        error: '',
        displaySet: false
    }, {
        type: 'INC_HANDLER'
    })).toStrictEqual({
        value: 7,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: 10,
        inputMaxTitle: 15,
        error: '',
        displaySet: false
    })

    expect(reducer({
        value: 20,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: 10,
        inputMaxTitle: 15,
        error: '',
        displaySet: false
    }, {
        type: 'INC_HANDLER'
    })).toStrictEqual({
        value: 20,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: 10,
        inputMaxTitle: 15,
        error: '20',
        displaySet: false
    })

    expect(reducer({
        value: 21,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: 10,
        inputMaxTitle: 15,
        error: '20',
        displaySet: false
    }, {
        type: 'INC_HANDLER'
    })).toStrictEqual({
        value: 20,
        minValue: 2,
        maxValue: 20,
        inputMinTitle: 10,
        inputMaxTitle: 15,
        error: '20',
        displaySet: false
    })

    expect(reducer({
        value: 21,
        minValue: 2,
        maxValue: 27,
        inputMinTitle: 10,
        inputMaxTitle: 10,
        error: 'Err1',
        displaySet: false
    }, {
        type: 'INC_HANDLER'
    })).toStrictEqual({
        value: 21,
        minValue: 2,
        maxValue: 27,
        inputMinTitle: 10,
        inputMaxTitle: 10,
        error: 'Err1',
        displaySet: false
    })

    expect(reducer({
        value: 21,
        minValue: 2,
        maxValue: 27,
        inputMinTitle: 10,
        inputMaxTitle: 10,
        error: 'Err2',
        displaySet: false
    }, {
        type: 'INC_HANDLER'
    })).toStrictEqual({
        value: 21,
        minValue: 2,
        maxValue: 27,
        inputMinTitle: 10,
        inputMaxTitle: 10,
        error: 'Err2',
        displaySet: false
    })

    expect(reducer({
        value: -21,
        minValue: -2,
        maxValue: -27,
        inputMinTitle: -10,
        inputMaxTitle: -10,
        error: 'Err1',
        displaySet: false
    }, {
        type: 'INC_HANDLER'
    })).toStrictEqual({
        value: -21,
        minValue: -2,
        maxValue: -27,
        inputMinTitle: -10,
        inputMaxTitle: -10,
        error: 'Err1',
        displaySet: false
    })
})

