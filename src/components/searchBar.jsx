import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
    };

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }


    // onInputChange = (e) => {
    //     const value = e.target.value;
    //     console.log('onInputChange', value);
    //     this.setState({ term: value});
    // };
    //
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('form submit!');
    // };

    onInputChange(e) {
        const value = e.target.value;
        this.setState({term: value});
    };

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    };

    render() {

        const {term} = this.state;

        return (
            <form className={'ui form'} onSubmit={this.onSubmit}>
                <div className={'field'}>
                    <input
                        type="text"
                        value={term}
                        onChange={this.onInputChange}
                        // onChange={e => this.setState({term : e.target.value})}
                    />
                </div>
            </form>
        );
    }
}

export default SearchBar;