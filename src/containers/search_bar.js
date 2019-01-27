import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: '' };
        
        // un peu bizzare on ecrase la methode par la meme attachée a je ne sais quoi
        // sinon on avait une erreur de this undefined
        // en fait ca arrive si il y a un callback (ex dans le return du render) qui fait reference a this
        // on avait deux possibilités : le binder, ou utilise la fat arrow function
        this.onInputChange = this.onInputChange.bind(this);

        // on doit binder le contexte
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        // we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render(){
        return(
            <form onSubmit = {this.onFormSubmit} className="input-group">
                <input 
                placeholder="get  a five day forcast in your favortie cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }

    

}

function mapDispatchToProps(dispatch){
    // action flows downs to middle ware and then reducer inside our redux app
    return bindActionCreators({fetchWeather},dispatch);
}

// on enelve le export default de la classe principale si on fait ca
// on met null en premier arg car on se fout de state
export default connect(null, mapDispatchToProps)(SearchBar);