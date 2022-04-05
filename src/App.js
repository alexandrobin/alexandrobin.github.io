import './App.css';
import styled from "styled-components"
import data from './data';


function App() {
  return (
    <div className="App">
      <ResumeContainer>
        <ResumeHeader>
          <Avatar src={process.env.PUBLIC_URL+"media/profilePicture.jpeg"}></Avatar>
          <section>
            <h1>{data.id.firstname} {data.id.name}</h1>
            <h2>{data.id.currentJob}</h2>
          </section>
          <section>
            <ul>
              <li>
                <a href={"mailto:" + data.id.mail}>{data.id.mail}</a>
              </li>
              <li>
                <a href={"tel:" + data.id.phone}>{data.id.phone}</a>
              </li>
              <li>
                <a href = {data.id.linkedin}>{data.id.linkedin}</a>
              </li>
              <li>
                <a href = "https://alexandrobin.github.io">Check-out on alexandrobin.github.io</a>
              </li>
            </ul>
          </section>
        </ResumeHeader>
        <ResumeMain> 
          <h1 style={{'marginLeft':"2rem","color":"#005f73"}}>Experiences</h1>
          {
          data.experiences.map((e,i)=>  {
          return (
              <Experience>
                <ExperienceDetails>
                <h3>{e.company}</h3>
                <p>{e.period}</p>
                </ExperienceDetails>
                <ExperienceDescription>
                <h3>{e.jobTitle}</h3>
                {e.description.split('\n').map((line) => 
                  <p>{line}</p>)
                }
                </ExperienceDescription>
              </Experience>
          )})}
          <h1 style={{'marginLeft':"2rem","color":"#005f73"}}>Education</h1>
          <Education>
            {data.education.map((e,i)=>  {
            return (
              
                <EducationDetails>
                  <h3>{e.school}</h3>
                  <p>{e.date}</p>
                  <p>{e.name}</p>
                </EducationDetails>
              
          )})}
          </Education>
          
        </ResumeMain>
        <ResumeFooter>
          <h1 style={{'marginLeft':"2rem","color":"#005f73"}}>Skills</h1>
          <SkillsContainer>
            <section>
              <h3>Computer Science</h3>
                <p>Javascript (React/Node)</p>
                <p>HTML/CSS </p>
                <p>Github </p>

            </section>
            <section>
              <h3>Softskills</h3>
                <p>Scrum Master (certified)</p>
                <p>Trained to Workshop facilitation</p>
              

            </section>
            <section>
              <h3>Languages & Hobbies</h3>
                <p>English : fluent</p>
                <p>Lived 7 years abroad (Angola & Syria)</p>
                <p>Guitar, video games & sports</p>
            </section>

          </SkillsContainer>
        </ResumeFooter>
        
      </ResumeContainer>
    </div>
  );
}

const ResumeContainer = styled.div`
    position: relative;
    width: 50rem;
    height: 70.5rem;
    margin: 4rem auto;
    border-radius: 1rem;
    background-color: #fefefe;
    box-shadow: 5px 5px 0 0 #94d2bd;
    overflow: hidden;

    @media print {
      margin:0;
      border-radius:0;
      box-shadow: none;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      justify-content: center;
      align-items: center;
    }
`

const ResumeHeader = styled.header`
    height: 8.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #005f73;
    > section > h1 {
      font-size:1.8rem;
      margin-bottom:0;
      color:white;
    };
    > section > h2 {
      font-size:0.8rem;
      font-weight:lighter;
      margin-top:0;
      color:white;
    }
    > section > ul {
      margin-top:2rem;
      > li {
        text-align:right;
        list-style-type:none;
        > a {
          font-size:0.8rem;
          text-decoration:none;
          color:white;
      }
    }
`
const ResumeMain = styled.main`
    height: 47rem;
    background-color: #f5f5fb;
    padding-top: 1rem;
`

const ResumeFooter = styled.footer`
    height: 13rem;
    width: 100%;
`

const Experience = styled.section `
    display:flex;
    margin-left:5px;
    margin-right:5px;
    margin-bottom:5px;
`

const ExperienceDetails = styled.section`
    flex:0.5;
    margin:0;
    >h3 {
      margin:0;
      text-align:center;
    }
    >p {
      margin:0;
      text-align:center;
      font-size:0.6rem;
      font-weight:lighter;
    }
`

const ExperienceDescription = styled.section`
    flex:2;
    > h3 {
      margin:0;
    };
    > p {
      margin:0;
      font-size:0.8rem;
    }
`

const Avatar = styled.img`
    margin:10px;
    border-radius:50%;
    width:100px;
    height:100px;
`

const Education = styled.section `
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    margin-left:5px;
    margin-right:5px;
    margin-bottom:5px;
`
const EducationDetails = styled.section`
    >h3 {
      margin:0;
      text-align:center;
    }
    >p {
      margin:0;
      text-align:center;
      font-size:0.6rem;
      font-weight:lighter;
    }
`


const SkillsContainer = styled.section`
    display:flex;
    margin:0px 20px 0px 20px;
    justify-content:space-evenly;

    >h1 {
      margin:5px 0px 5px; 0px;
    };
    > section {
      >h3 {
        margin:5px 0px 5px; 0px;
      }
      >p{
        margin:0;
      }
    }
`

export default App;
