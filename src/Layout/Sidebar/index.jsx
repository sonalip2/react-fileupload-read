import React, { Component } from 'react';
import s from './Sidebar.module.scss';
import { connect } from 'react-redux';
import { addEditHourLog } from '../../actions';

class Sidebar extends Component {
    state = {
        src: '',
        value: '',
        selected: 0
    };
    
    handleClick = () => {
        let input = this.refs.input_reader;
        input.click();
    };

    inputFileChanged = (e) => {
        if(window.FileReader){
            let file = e.target.files[0], reader = new FileReader(), self = this;
            reader.onload = (r) => {
                const { addEditHourLog } = this.props
                this.setState({
                    src: r.target.result
                });
                const num = Object.keys(this.props.hourData).length
                const data = {
                    [num+1]: this.state
                }
                addEditHourLog({ data });
            }
            reader.readAsDataURL(file);
            this.setState({value:reader});
        }
        else {
            alert('Soryy, your browser does\'nt support for preview');
        }
    }
    render(){
        const { accept, capture, multiple } = this.props, { src, value } = this.state;
        return(
            <div className={`${s.sidebar}`}>
                <div className={`${s.title}`}>Files</div>
                <button className={`${s.upload}`} onClick={this.handleClick}>Upload</button>
                <input type="file" ref="input_reader" accept={Array.isArray(accept) ? accept.join(',') : accept} multiple={multiple} capture={capture} style={{display:'none'}} onChange={this.inputFileChanged}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        hourData: state.hourLog
    }
}
function mapDispatchToProps(dispatch) {
    return ({
        addEditHourLog: (data) => {
            dispatch(addEditHourLog(data.data));
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);