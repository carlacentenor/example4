import React from 'react';
import {connect} from 'react-redux';
function Counter(props){
    console.log(props);
    return (
        <div>
            <h1>I am a counter!</h1>
            <p>Count : {props.count} </p>
            <div>
            <p>Captura : {props.number}</p>
            </div>
            <div>
                <p>Historial</p>
                <div>{props.historial}</div>
                <button onClick={props.onHistorial}>Guardar</button>
            </div>
            <div className="container">
            <div className="row">
            <div className="col-4" onClick={props.onCapture}>1</div>
            <div className="col-4" onClick={props.onCapture2}>2</div>
            <div className="col-4" onClick={props.onCapture3}>3</div>
            </div>
            <div className="row">
            <div className="col-4" onClick={props.onCapture4}>4</div>
            <div className="col-4" onClick={props.onCapture5}>5</div>
            <div className="col-4" onClick={props.onCapture6}>6</div>
            </div>
            <div className="row">
            <div className="col-4" onClick={props.onCapture7}>7</div>
            <div className="col-4" onClick={props.onCapture8}>8</div>
            <div className="col-4" onClick={props.onCapture9}>9</div>
            </div>
            <div className="row">
            <div className="col-4" onClick={props.sum}>+</div>
            <div className="col-4" onClick={props.equal}>=</div>
            </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    console.log('mapStateToProps',state);
    return {
        count: state.count,
        number: state.number,
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrementClick : () =>{
        const action = {
            type :'INCREMENT'
        };
        dispatch(action);
        },
        onDecrementClick : () =>{
            const action = {
                type :'DECREMENT'
            };
            dispatch(action);
            },
         onCapture : () =>{
                const action = {
                    type :'CAPTURE'
                };
                dispatch(action);
                },
         onCapture2 : () =>{
                    const action = {
                        type :'CAPTURE2'
                    };
                    dispatch(action);
                    },
         onCapture3 : () =>{
                        const action = {
                            type :'CAPTURE3'
                        };
                        dispatch(action);
                        },
        onCapture4 : () =>{
                            const action = {
                                type :'CAPTURE4'
                            };
                            dispatch(action);
                            },
        onCapture5 : () =>{
                                const action = {
                                    type :'CAPTURE5'
                                };
                                dispatch(action);
                                },
        onCapture6 : () =>{
                                    const action = {
                                        type :'CAPTURE6'
                                    };
                                    dispatch(action);
                                    },
        onCapture7 : () =>{
                                        const action = {
                                            type :'CAPTURE7'
                                        };
                                        dispatch(action);
                                        },  
        onCapture8 : () =>{
                                            const action = {
                                                type :'CAPTURE8'
                                            };
                                            dispatch(action);
                                            },  
         onCapture9 : () =>{
                                                const action = {
                                                    type :'CAPTURE9'
                                                };
                                                dispatch(action);
                                                },         
         sum : () =>{
                                                    const action = {
                                                        type :'SUM'
                                                    };
                                                    dispatch(action);
                                                    },       
        equal : () =>{
                                                        const action = {
                                                            type :'EQUAL'
                                                        };
                                                        dispatch(action);
                                                        },  
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter); 