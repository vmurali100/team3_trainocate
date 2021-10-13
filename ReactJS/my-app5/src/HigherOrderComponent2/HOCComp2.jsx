import React from 'react'

const HOCComp2 = (OriginalComponent) => {
    class NewComp extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
        incrementCount = () => {
            this.setState({count:this.state.count+1});
        }    

        render() {
            return (
                <div>
                    <OriginalComponent 
                        count={this.state.count} 
                        incrementCount={this.incrementCount}/>
                </div>
            )
        }
    }

    return NewComp
}

export default HOCComp2;