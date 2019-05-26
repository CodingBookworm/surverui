 import React from 'react'
 import { Card, CardImg, CardText, CardBody,
     CardTitle, CardSubtitle} from 'reactstrap';

 class RenderNumeric extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            questionInfo: this.props.questionInfo,
        }
    }


     render() {
                 
      var answers = [];
       var answer = "";
            for (var j=0; j<this.state.questionInfo.allAnswers.length; j++){
              answer = this.state.questionInfo.allAnswers[j];
              
          
              answers.push(answer)
          } 

         return (
                <div>
                
                                                  
          <Card>
            <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Red_Checkmark.svg/341px-Red_Checkmark.svg.png" alt="Card image cap" style={{width: 50, height: 50, justifyContent: 'center'}}></CardImg>
            <CardBody>
              <CardTitle><b>Question:</b> {this.state.questionInfo.question}</CardTitle>
              <CardSubtitle><b>Question Type:</b> {this.state.questionInfo.questionType}</CardSubtitle>
              
              <CardText><b>Answers:</b></CardText>
                          { answers.map(t=> <CardText>{t}</CardText>)}   
           </CardBody>
          </Card>

        </div>);    
        
    }
    

//     componentWillMount(){
        
//        this.setState({question:this.props.questions})
//        this.setState({ready: true})
    
// }


 }
 export default RenderNumeric;