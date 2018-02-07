/**
 * .app/components/helpers/EditForm.jsx
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
import {editNote} from '../../js/actions/index';
import uuidv1 from 'uuid';

const mapDispatchToProps = dispatch => {
    return {
        editNote: (note, id) => dispatch(editNote(note, id))
    }
};

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
};

class EditFormToConnect extends React.Component{   
    constructor(props){
        super(props);

        this.id = this.props.noteId;
        this.note = this.props.notes.find( obj => obj.id == this.id);

        this.state = {
            title: this.note.title,
            note: this.note.entry,
            category: this.note.category
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

        const {title, note, category} = this.state;              
        console.log(note);

        if (note == ''){
            history.push('/note/'+this.id);
            return;
        }
        this.props.editNote({
            title: title,
            entry: note,
            category: category
        }, this.id);

        console.log(this.note)
        history.push('/note/'+this.id);
    }
    render(){
        return(
            <Row>
		        <Input s={12} id='title' label="Title"
                  onChange={this.handleChange} required
                  defaultValue={this.note.title}/>
		        <Input id='note' type='textarea' label='Note' s={12}
                  onChange={this.handleChange} required
                  defaultValue={this.note.entry}/>

                <Input id='category' s={12} type='select'
                  label="Select category" onChange={this.handleChange}
                  defaultValue={this.note.category}>
                    <option value='' disabled>Choose Category</option>
		            <option value='personal'>Personal</option>
		            <option value='school'>School</option>
		            <option value='work'>Work</option>
	            </Input>
                <Fab onClick={this.handleSubmit} icon='fa fa-save'
                  type='submit'/>
            </Row>
        );
    }
}

const EditForm = connect(
    mapStateToProps, mapDispatchToProps)(EditFormToConnect    
);

export default EditForm;