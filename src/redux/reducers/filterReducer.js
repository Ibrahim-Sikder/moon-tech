import { TOGGLE_BRANDS, TOGGLE_STOCK } from "../actionTypes/actionTypes"

const initialState = {
	filters: {
		brands: [],
		stock: false
	},
	keyboards: ''
}

export const filterReducer = (state = initialState, action) => {
	

    switch(action.type){
        case TOGGLE_BRANDS:{
            if(!state.filters.brands.includes(action.payload)){
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        brands: [...state.filters.brands, action.payload]
                    },
                }
            }else{
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        brands: state.filters.brands.filter((brand)=> brand !== action.payload )
                    },
                }
            }
        }

        case TOGGLE_STOCK:{
            return {
                ...state,
                filters:{
                    ...state.filters,
                    stock: !state.filters.stock,
                }
            }
        }

        default:
            return state
    }
}
