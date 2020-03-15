import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className='projects-grid'>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://powerful-brook-65322.herokuapp.com/assets/img/burger.png) center / cover' }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Eat da Burger!
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                        <a href='https://ancient-beyond-01017.herokuapp.com/' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://journal.ahima.org/wp-content/uploads/2019/03/Coding-Quiz-Time-Featured-Image.jpg) center / cover' }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Code Quiz
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                        <a href='https://tadhemingway.github.io/04_Code_Quiz/' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://us.123rf.com/450wm/yupiramos/yupiramos1607/yupiramos160716844/59901132-stock-vector-secutiy-lock-key-object-icon-vector-illustration.jpg?ver=6) center / cover' }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Password Generator
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                        <a href='https://tadhemingway.github.io/03_random_password_generator/' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.storybench.org/wp-content/uploads/2018/01/nytdev.jpg) center / cover' }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            NYT API
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                        <a href='https://tadhemingway.github.io/NYT_API/' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className='projects-grid'>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://as2.ftcdn.net/jpg/00/82/35/99/500_F_82359910_L1SQ8T2W6qh57sD0N0nnWho1e2Zh6AUH.jpg) center / cover' }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Austin Tribune
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                        <a href='https://tadhemingway.github.io/Project-1/' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/code-512.png) center / cover' }}></CardTitle>
                        <CardText style={{ color: 'black', fontSize: '25px', textAlign: 'center' }}>
                            Code Tag
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                        <a href='https://rocky-dawn-34385.herokuapp.com/' rel='noopener noreferrer' target='_blank'><Button colored>Link</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            );
        }
    }

    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Homework</Tab>
                    <Tab>Group Projects</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;