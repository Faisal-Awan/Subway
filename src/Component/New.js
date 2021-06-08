import React from 'react'
import { useState } from 'react'


<AddTripButton addTrip={this.triggerAddTripState} />
const [state, setState] = useState('start')

function App() {
  const [state, setState] = useState('start')

  triggerAddTripState = () => {
    setState('add-trip')
  }

  return (
    <div>
      {state === 'start' && (
        <AddTripButton addTrip={this.triggerAddTripState} />
      )}

      {state === 'add-trip' && <AnotherComponent />}
    </div>
  )
}


// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { isEmptyState: true }
//   }

//   triggerAddTripState = () => {
//     this.setState({
//       ...this.state,
//       isEmptyState: false,
//       isAddTripState: true
//     })
//   }
// }




export default AddTripButton