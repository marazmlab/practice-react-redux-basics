import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

class UserList extends React.Component {
    state = {
        userName: '',
    }

    handleInputChange = (event) => {
        this.setState({ userName: event.target.value });
    };

    handleAddUser = (event) => {
        event.preventDefault();
        const { userName } = this.state;
        const { users, addUser } = this.props;

        if (userName.trim() !== '') {
            const newUser = {
                id: users.length > 0 ? users[users.length -1].id + 1 : 1,
                name: userName,
            };
            addUser(newUser);
            this.setState({ userName: '' });
        }
    };

    render() {
        const { users } = this.props;

        return (
            <>
                <form onSubmit={this.handleAddUser}>
                    <div>
                        <input
                            value={this.state.userName}
                            onChange={this.handleInputChange}
                        />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {users.map(user => (
                        <UserItem key={user.id} id={user.id} name={user.name} />
                    ))}
                </ul>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
    addUser: (user) => dispatch({ type: 'addUser', payload: user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);