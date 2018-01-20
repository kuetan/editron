import React from "react";
import Editor from "./Editor"
import style from "./EditorUI.css";

export default class EditorUI extends React.Component {
    constructor(props) {
	super(props);
	this.state = {text:""};
	this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(e){
	this.setState({text:e.target.value});
    }

     render(){
       return (
       <div className={style.Editor}>
       <Editor 
	   className={style.editorArea}
	   value={this.state.text}
	   onChange={this.onChangeText}
       />
       </div>
       );
     }
}
