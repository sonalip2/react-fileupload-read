import React, { Component } from 'react';
import s from './UploadFile.module.scss';
import Header from '../../Layout/Header';
import Sidebar from '../../Layout/Sidebar';
import { connect } from 'react-redux';

class UploadReadFiles extends Component {
    state = {
            selected: 0
        };

    handleChange = (index) => {
        this.setState({selected:index})
    }

    render(){
        const { hourData } = this.props, { selected } = this.state;
        const index = hourData[selected] && hourData[selected]['src'];
        return(
            <div>
                <Header index={selected} />
                <Sidebar/>
                <div className={`${s.inline}`}>
                    {hourData && Object.values(hourData).map((elem,index)=>{
                    let style = (index+1) == selected ? 'selected': '';
                    return <div className={style ? s.selected : s.notselected} key={index} onClick={(e) => this.handleChange(index+1)}>{`Document ${index+1}`}</div>
                    })}
                </div>
                {hourData && <div className={`${s.tabContent}`}><iframe src={index} frameBorder="0" height="800" width="70%" style={{float:'right'}}/></div>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        hourData: state.hourLog
    }
}
export default connect(mapStateToProps, null)(UploadReadFiles);