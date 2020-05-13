import React from 'react';
import { Button, message } from 'antd';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import './style.css';

interface State {
  loaded: boolean;
  isLogin: boolean;
}

class Home extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loaded: false,
      isLogin: true,
    };
  }
  componentDidMount() {
    Axios.get('/api/isLogin')
      .then((result) => {
        if (!result.data?.data) {
          this.setState({
            isLogin: false,
            loaded: true,
          });
        } else {
          this.setState({
            loaded: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleLogOut = (e: React.MouseEvent) => {
    Axios.get('/api/logout')
      .then((result) => {
        if (result.data?.data) {
          this.setState({
            isLogin: false,
          });
        } else {
          message.error('log out faield');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { isLogin, loaded } = this.state;
    if (isLogin) {
      if (loaded) {
        return (
          <div className='home-page'>
            <Button type='primary' style={{ marginLeft: '10px' }}>
              get data
            </Button>
            <Button type='primary'>show data</Button>
            <Button type='primary' onClick={this.handleLogOut}>
              log out
            </Button>
          </div>
        );
      }
      return null;
    }
    return <Redirect to='/login' />;
  }
}

export default Home;
