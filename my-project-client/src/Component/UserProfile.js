import React from 'react'
import {Link} from 'react-router-dom'
import { List, Image, Grid } from 'semantic-ui-react'

class UserProfile extends React.Component {
    
    render(){
        return(
            
        <>
        <Grid>
            <Grid.Column width={4}>
                
                <h1>{this.props.user.name}</h1>
                <Image src={this.props.user.image} size='medium' circular/>
                <p>{this.props.user.username}</p>
                <p>{this.props.user.city}, {this.props.user.state}</p>
                <p>{this.props.user.email}</p>
                <p>{this.props.user.bio}</p>
                <p>{this.props.user.age}</p>
                <p>{this.props.user.birthday}</p>
                
            </Grid.Column>

            <Grid.Column width={4}>
                
                    <h1>My Events</h1>
                    <List>
                        {this.props.user.events.map(event => {
                            return <List.Item as={Link} to={`/events/${event.id}`}>{event.title}</List.Item>
                        })
                        }
                    </List>
             
                    <h1>My Groups</h1>
                    <List>
                        {this.props.user.member_user_groups.map(group => {
                            return <List.Item as={Link} to={`/groups/${group.id}`}>{group.group.name}</List.Item>
                        })
                        }
                    </List>


            
            </Grid.Column>
        </Grid>
        </>
        )
    }
}

export default UserProfile