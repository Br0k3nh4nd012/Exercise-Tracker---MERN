import React , { Component } from "react";
import axios from 'axios';

class UserList extends Component {
    constructor(props){
        super(props);

        this.state={
            users : []
        }
        
    }

    componentDidMount(){
        axios.get('http://localhost:5000/users/')
            .then(res => {

                if(res.data.length > 0){
                    this.setState({
                      users : res.data.map(user => user.username),
                      
    
                    })
                  }
                
            });
        
        
    }

    

    render() { 
        return ( 
            <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
            </tr>
          </thead>
          
              {this.state.users.map((user) => {
                  return (
                     <tbody>
                         <tr>
                             <td>{user}</td>
                         </tr>
                     </tbody>

                  )
              })}
             
          
        </table>
         );
    }
}
 
export default UserList;