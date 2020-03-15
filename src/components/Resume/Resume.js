import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={require('../../assets/self.jpg')}
                                alt='avatar'
                                style={{ height: '300px', borderRadius: '50%' }} />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Tad Hemingway</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>I graduated with a Bachelors in Finance in 2010, then decided to go back and get a Masters in Accounting. Since I have graduated with my masters degree, I have obtained CMA designation and accumulated 6 years of experience, mostly as a financial analyst. Not until a few years into my career as a financial analyst did I realize that my passion was not in finance. However, what I did realize is that I loved everything about Excel, building financial models, creating complex formulas, and creating macros for reducing the time it takes for repetitive tasks. It took a little bit of time to put myself in the right position, but I am now attending the coding bootcamp at UT Austin and know that I have made the right choice.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>3201 Duval Rd, Austin, TX 78759</p>
                        <h5>Phone</h5>
                        <p>(806) 280-0429</p>
                        <h5>Email</h5>
                        <p>tadhemingway@hotmail.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName='The University of Texas at Austin – Center for Professional Education'
                            schoolDescription='Full Stack Web Development'
                        />

                        <Education
                            startYear={2011}
                            endYear={2013}
                            schoolName='Texas A&M University at Commerce, Commerce, Texas'
                            schoolDescription='Master of Science in Accounting'
                        />

                        <Education
                            startYear={2006}
                            endYear={2010}
                            schoolName='University of North Texas, Denton, Texas'
                            schoolDescription='Bachelor of Business Administration in Finance'
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2018}
                            endYear={'Present'}
                            jobName='Erin Condren, Austin, Texas'
                            jobDescription='Financial Analyst' />

                        <Experience
                            startYear={2016}
                            endYear={2018}
                            jobName='L3 Technologies, Greenville, Texas'
                            jobDescription='Program Controls Analyst' />

                        <Experience
                            startYear={2015}
                            endYear={2016}
                            jobName='Innovation First International – REC Foundation, Greenville, Texas'
                            jobDescription='Finance Manager' />

                        <Experience
                            startYear={2014}
                            endYear={2015}
                            jobName='Innovation First International, Greenville, Texas'
                            jobDescription='Financial Analyst' />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Skills</h2>

                        <Skills
                            skill='HTML/CSS'
                            progress={80} />

                        <Skills
                            skill='JavaScript'
                            progress={60} />

                        <Skills
                            skill='React'
                            progress={30} />

                        <Skills
                            skill='NodeJS'
                            progress={50} />

                        <Skills
                            skill='MySQL'
                            progress={25} />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;