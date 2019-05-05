import React, { Component } from 'react'
import { Comment, Icon } from 'semantic-ui-react'
import Axios from 'axios';

class comment extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            username: '',
            date: '',
            comment: ''
        }
    }

    render() {
        return(
            <Comment.Group>
                <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                <Comment.Content>
                    <Comment.Author>{this.props.comment.Name}</Comment.Author>
                    <Comment.Metadata>
                    <div>{this.props.comment.Date}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                    {this.props.comment.Comment}
                    </Comment.Text>
                </Comment.Content>
                </Comment>
            </Comment.Group>
        )}
}

export default comment