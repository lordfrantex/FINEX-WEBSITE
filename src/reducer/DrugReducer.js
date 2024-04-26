export const initialDrugState = {
  paracetamol: 10,
  flagea: 14,
  zinc: 22,
}

export const drugReducer = (state, action) => {
  const { type, payload, name } = action
  switch (type) {
    case "INCREASE":
      return {
        ...state,
        [name]: payload

      }
    // case "DECREASE":
    //   return {
    //     ...state,
    //     [payload.name]: payload.value - 1


    //   }
    // case "RESET":
    //   return {
    //     ...state,
    //     [payload.name]: initialDrugState[payload.name]


    //   }

  }
}