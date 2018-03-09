import {createStore } from 'redux';


const initialState = {
count :8,
number : 0,
numberCalculator :0,
operator:null,
};

const reducer =  (state = initialState,action) =>{
    console.log('reducer running',action);
    
    switch (action.type){
       /*  case 'INCREMENT' : 
        return Object.assign({},state,{ count :state.count +1});
        case 'DECREMENT' : 
        return Object.assign({},state,{ count :state.count -1}); */
        case 'CAPTURE' : 
        return Object.assign({},state,{ number : parseInt(state.number+'1')   });
        case 'CAPTURE2' : 
        return Object.assign({},state,{ number :parseInt(state.number+'2')   });
        case 'CAPTURE3' : 
        return Object.assign({},state,{ number :parseInt(state.number+'3')   });
        case 'CAPTURE4' : 
        return Object.assign({},state,{ number :parseInt(state.number+'4' )  });
        case 'CAPTURE5' : 
        return Object.assign({},state,{ number :parseInt(state.number+'5')   });
        case 'CAPTURE6' : 
        return Object.assign({},state,{ number :parseInt(state.number+'6' )  });
        case 'CAPTURE7' : 
        return Object.assign({},state,{ number :parseInt(state.number+'7' )  });
        case 'CAPTURE8' : 
        return Object.assign({},state,{ number :parseInt(state.number+'8' )  });
        case 'CAPTURE9' : 
        return Object.assign({},state,{ number :parseInt(state.number+'9')   });
        case 'HISTORIAL' : 
        return Object.assign({},state,{ historial:state.number  });
        case 'SUM' : 
        return Object.assign({},state,{ numberCalculator: state.number,
                                        number:0,operator:'+' });
        case 'EQUAL' : 
        return Object.assign({},state,{ number:opera(state.numberCalculator,state.number) });
        default : 
        return state;
    }
    return state;
}

function opera(num1,num2,operator){
    switch (operator){
        case operator
    }

}

const store = createStore(reducer);

export default store;