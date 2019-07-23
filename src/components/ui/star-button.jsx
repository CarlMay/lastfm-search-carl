import React, {Component} from "react";

class StarButton extends Component {
    state = {
        selected: false,
        defaultPrefix: 'Add to ',
        selectedPrefix: 'Remove from ',
    };

    constructor(props) {
        super(props);
        this.toggleSelected = this.toggleSelected.bind(this);
    }

    toggleSelected() {
        const {id, name, removeFromFavorites, addToFavorites} =this.props;
        console.log('---toggleSelected', id, name);
        this.setState({selected: !this.state.selected});

        // const {selected} = this.state;
        if(!this.state.selected){
            console.log('---true', id, name);
            addToFavorites( id, name);
        }else{
            console.log('---false', id, name);
            removeFromFavorites( id, name);
        }
    };

    render(){
        const {defaultPrefix, selectedPrefix, selected} = this.state;
        const title = (selected) ? selectedPrefix : defaultPrefix;

        const selectedClassname = 'star green icon';
        const defaultClassname = 'star outline icon';
        const className = (selected) ? selectedClassname : defaultClassname;

        const favButStyle = {
            cursor: 'pointer'
        };

        return(
            <i aria-hidden="true"
               style={favButStyle}
               title={`${title} favorites`}
               className={className}
               onClick={this.toggleSelected}></i>
        );
    }
}

export default StarButton;
