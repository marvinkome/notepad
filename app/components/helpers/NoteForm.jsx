/**
 * .app/components/helpers/NoteForm.jsx
 */

// React import 
import React from 'react';

// react materialize
import {Row, Input} from 'react-materialize';

// react router
import history from '../../js/router/history';

// helper components
import Fab from './FAB.jsx';

// react redux
import {connect} from 'react-redux';
import {addNote} from '../../js/actions/index';
import uuidv1 from 'uuid';

const mapDispatchToProps = dispatch => {
    return {
        addNote: note => dispatch(addNote(note))
    }
};

class NoteFormToConnect extends React.Component{   
    constructor(props){
        super(props)
        this.state = {
            title: '',
            note: '',
            category: 'personal'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('Fab clicked');

        let id  = uuidv1();
        const {title, note, category} = this.state;
        const date = new Date().toDateString();
                    

        if (note == ''){
            history.push('/');
            return;
        }
        this.props.addNote({
            title: title,
            entry: note,
            category: category,
            date: date,
            id: id
        });
        
        history.push('/');
    }
    render(){
        return(
            <Row>
		        <Input s={12} id='title' label="Title"
                  onChange={this.handleChange} required/>
		        <Input id='note' type='textarea' label='Note' s={12}
                  onChange={this.handleChange} required/>

                <Input id='category' s={12} type='select'
                  label="Select category" onChange={this.handleChange}
                  defaultValue='0'>
                    <option value='' disabled>Choose Category</option>
		            <option value='personal'>Personal</option>
		            <option value='school'>School</option>
		            <option value='work'>Work</option>
	            </Input>
                <Fab onClick={this.handleSubmit} icon='fa fa-plus' 
                  type='submit'/>
            </Row>
        );
    }
}

const NoteForm = connect(
    null, mapDispatchToProps)(NoteFormToConnect    
)

export default NoteForm