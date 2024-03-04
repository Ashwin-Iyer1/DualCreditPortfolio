import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Ashwin from './Ashwin.jpg';
import Cameron from './Cameron.jpg';
import Jonathan from './Jonathan.jpg'
import Bailey from './Bailey.png'
import Catalina from './Catalina.jpg'
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import AgeOfRevNotes from './ItemsPhotos/AgeOfRevNotes.JPG'
import NeoclassNotes from './ItemsPhotos/NeoclassNotes.JPG'
import DigitalMedium from './ItemsPhotos/DigitalMedium.JPG'
import LitCircle from './ItemsPhotos/LitCircle.JPG'
import DualEssay from './ItemsPhotos/DualEssay.JPG'
import NeoclassPreset from './ItemsPhotos/NeoclassPres.JPG'
import TudorAgeNotes from './ItemsPhotos/TudorAgeNotes.JPG'
import LitCircle26 from './ItemsPhotos/LitCircle26.png'
import PortfolioReflection from './ItemsPhotos/PortfolioReflection.png'
function App() {
  return (
    <div className="App">
      
      <ReactFullpage
      
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    autoScrolling = {true}
    scrollBar = {true}
    fixedElements = {'#header, .footer, #head'}
    paddingBottom='22px'
     /* Options here */
    

    render={({ state, fullpageApi }) => {
      
      return (
        
        <ReactFullpage.Wrapper>
          
          <div className="section">
          <header>Dual Credit Brtitish Literature I Portfolio</header>
            <div class="slide" data-anchor="slide1" style={{background: '#7a706b'}}>
              <img src={Ashwin} id={'person'}></img>
              <h1>Ashwin Iyer</h1>
              <button onClick={() => fullpageApi.moveSectionDown()} id={'invis'}>
                <AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionDown()}>Click me to move down</AwesomeButton>
              </button>
            </div> 
            <div class="slide" data-anchor="slide2" style={{background: '#483122'}}>
              <img src={Bailey} id={'person'}></img>
              <h1>Bailey Frazier</h1>
              <button onClick={() => fullpageApi.moveSectionDown()} id={'invis'}>
                <AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionDown()}>Click me to move down</AwesomeButton>
              </button>
            </div>
            <div class="slide" data-anchor="slide3" style={{background:'#907a64'}}> 
              <img src={Cameron} id={'person'}/>
              <h1>Cameron Chin</h1>
              <button onClick={() => fullpageApi.moveSectionDown()} id={'invis'}>
                <AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionDown()}>Click me to move down</AwesomeButton>
              </button>

            </div>
            <div class="slide" data-anchor="slide4" style={{background:'#847966'}}> 
            <img src={Catalina} id={'person'} style={{maxHeight: '300px'}}/>
              <h1>Catalina Lanuza</h1>
              <button onClick={() => fullpageApi.moveSectionDown()} id={'invis'}>
                <AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionDown()}>Click me to move down</AwesomeButton>
              </button>

            </div>
            <div class="slide" data-anchor="slide5" style={{background:'#877b5f'}}> 
            <img src={Jonathan} id={'person'}/>
              <h1>Jonathan Heidebrecht</h1>
              <button onClick={() => fullpageApi.moveSectionDown()} id={'invis'}>
                <AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionDown()}>Click me to move down</AwesomeButton>
              </button>
            </div>
          </div>
          <div className="section">
          <div class="slide" data-anchor="slide1">
            <button onClick={() => fullpageApi.moveSectionUp()} id={'invis'}>
            <AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionUp()}>Click me to move up</AwesomeButton>
            </button>
                <h1>Portfolio Reflection</h1>
              <div className="items">
          
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1StY3kzAhgMFClTs3N59t7MTxA7bNlhRSpJgMNubRC7o/edit?usp=sharing'} target='_blank'>
                  <img src={PortfolioReflection} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1StY3kzAhgMFClTs3N59t7MTxA7bNlhRSpJgMNubRC7o/edit?usp=sharing'} target='_blank'>
                    Dual Credit British Literature I Portfolio Reflection
                    </a>
                    </p>
                </div>
              
              </div>
              
              
            </div>

            <div class="slide" data-anchor="slide1">
            <button onClick={() => fullpageApi.moveSectionUp()} id={'invis'}>
            <AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionUp()}>Click me to move up</AwesomeButton>
            </button>
                <h1>Course Goal 1</h1>
                <h3>Identifying Key Ideas</h3>
              <div className="items">
          
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1hJCxSkC2fG8HpG5Wu16AFAFXfB22eCT96VBOxyQE2xw/edit?usp=sharing'} target='_blank'>
                  <img src={AgeOfRevNotes} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1hJCxSkC2fG8HpG5Wu16AFAFXfB22eCT96VBOxyQE2xw/edit?usp=sharing'} target='_blank'>
                    Age of Revolution Cornell Notes
                    </a></p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1PDvRxHQgScttq4h57XqKNi9JrN_SVuYIbtEEx5voy3Q/edit?usp=sharing'} target='_blank'>
                  <img src={NeoclassNotes} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1PDvRxHQgScttq4h57XqKNi9JrN_SVuYIbtEEx5voy3Q/edit?usp=sharing'} target='_blank'>
                    Neoclassicism Cornell Notes
                    </a>
                    </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1IjoLBisKwZhtU9lN-Xjw00YddExrjpm9kI4jURHx3S0/edit?usp=sharing'} target='_blank'>
                  <img src={TudorAgeNotes} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1IjoLBisKwZhtU9lN-Xjw00YddExrjpm9kI4jURHx3S0/edit?usp=sharing'} target='_blank'>
                    Tudor Age Cornell Notes
                    </a>
                    </p>
                </div>
              
              </div>
              
              
            </div>
            <div class="slide" data-anchor="slide3"> 
            <button onClick={() => fullpageApi.moveSectionUp()} id={'invis'}>
            <AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionUp()}>Click me to move up</AwesomeButton>
            </button>
                <h1>Course Goal 2</h1>
                <h3>Analyzing Literary Works</h3>
              <div className="items">
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1aknfhrteHnwHD3UU8y802ig0wym2o9VCuuPMN8IqXIA/edit?usp=sharing'} target='_blank'>
                  <img src={LitCircle} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1aknfhrteHnwHD3UU8y802ig0wym2o9VCuuPMN8IqXIA/edit?usp=sharing'} target='_blank'>
                    Literature Circle (January 30)
                  </a>
                    </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1eHFI-gxXO0LkvWeIh5WYuRWTDos2iKKIR4Vz5iFkDZI/edit?usp=sharing'} target='_blank'>
                  <img src={DualEssay} id={'Doc'}/>
                  </a>
                  <p>
                    <a href={'https://docs.google.com/document/d/1eHFI-gxXO0LkvWeIh5WYuRWTDos2iKKIR4Vz5iFkDZI/edit?usp=sharing'} target='_blank'>
                    <i>Pride and Prejudice</i> Essay
                    </a>
                  </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1H0xZJXFTozsVcZFuD5JB5J3P3w8Z_vul8sxf6btq9q4/edit?usp=sharing'} target='_blank'>
                    <img src={LitCircle26} id={'Doc'}/>
                  </a>
                  <p>
                    <a href={'https://docs.google.com/document/d/1H0xZJXFTozsVcZFuD5JB5J3P3w8Z_vul8sxf6btq9q4/edit?usp=sharing'} target='_blank'>
                      Literature Circle (Feb 26-29) & One Pager
                    </a>
                  </p>
                  </div>
              </div>
            </div>
            <div class="slide" data-anchor="slide4"> 
            <button onClick={() => fullpageApi.moveSectionUp()} id={'invis'}>
<AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionUp()}>Click me to move up</AwesomeButton>

            </button>
                <h1>Course Goal 3</h1>
                <h3>Demonstration of Knowledge</h3>
              <div className="items">
              <div className="content">
                  <a href={'https://docs.google.com/presentation/d/12aEndSC90ePPdfy4t0Lhcjhznsc9kKQpIRlcGChtjbo/edit?usp=sharing'} target='_blank'>
                  <img src={NeoclassPreset} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/presentation/d/12aEndSC90ePPdfy4t0Lhcjhznsc9kKQpIRlcGChtjbo/edit?usp=sharing'} target='_blank'>
                    Neoclassicism Presentation
                    </a>
                    </p>
                </div>
              
              </div>
            </div>
            <div class="slide" data-anchor="slide5"> 
            <button onClick={() => fullpageApi.moveSectionUp()} id={'invis'}>
              <AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionUp()}>Click me to move up</AwesomeButton>
            </button>
                <h1>Course Goal 4</h1>
                <h3>Articulating Aesthetic Principles</h3>
              <div className="items">
              <div className="content">
                  <a href={'https://docs.google.com/document/d/1RinwnkyQC7mDUTNIEI8juDxi1EGEy6wQffFEto_xyvE/edit?usp=sharing'} target='_blank'>
                  <img src={DigitalMedium} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1RinwnkyQC7mDUTNIEI8juDxi1EGEy6wQffFEto_xyvE/edit?usp=sharing'} target='_blank'>
                    Digital Medium Project
                    </a>
                    </p>
                </div>
                
              </div>
            </div>
            <div class="slide" data-anchor="slide6"> 
            <button onClick={() => fullpageApi.moveSectionUp()} id={'invis'}>
<AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionUp()}>Click me to move up</AwesomeButton>

            </button>
                <h1>Course Goal 5</h1>
                <h3>Research-Based Critical Papers</h3>
              <div className="items">
              <div className="content">
                  <a href={'https://docs.google.com/document/d/1eHFI-gxXO0LkvWeIh5WYuRWTDos2iKKIR4Vz5iFkDZI/edit?usp=sharing'} target='_blank'>
                  <img src={DualEssay} id={'Doc'}/>
                  </a>
                  <p>
                    <a href={'https://docs.google.com/document/d/1eHFI-gxXO0LkvWeIh5WYuRWTDos2iKKIR4Vz5iFkDZI/edit?usp=sharing'} target='_blank'>
                    <i>Pride and Prejudice</i> Essay
                    </a>
                  </p>
                  
                </div>
               
              </div>
            </div>
            <div class="slide" data-anchor="slide7">
            <button onClick={() => fullpageApi.moveSectionUp()} id={'invis'}>
<AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionUp()}>Click me to move up</AwesomeButton>

            </button>
                <h1>Course Goal 6</h1>
                <h3>Critical Thinking Skills</h3>
              <div className="items">
              <div className="content">
                  <a href={'https://docs.google.com/document/d/1hJCxSkC2fG8HpG5Wu16AFAFXfB22eCT96VBOxyQE2xw/edit?usp=sharing'} target='_blank'>
                  <img src={AgeOfRevNotes} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1hJCxSkC2fG8HpG5Wu16AFAFXfB22eCT96VBOxyQE2xw/edit?usp=sharing'} target='_blank'>
                    Age of Revolution Cornell Notes
                    </a></p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1PDvRxHQgScttq4h57XqKNi9JrN_SVuYIbtEEx5voy3Q/edit?usp=sharing'} target='_blank'>
                  <img src={NeoclassNotes} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1PDvRxHQgScttq4h57XqKNi9JrN_SVuYIbtEEx5voy3Q/edit?usp=sharing'} target='_blank'>
                    Neoclassicism Cornell Notes
                    </a>
                    </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1IjoLBisKwZhtU9lN-Xjw00YddExrjpm9kI4jURHx3S0/edit?usp=sharing'} target='_blank'>
                  <img src={TudorAgeNotes} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1IjoLBisKwZhtU9lN-Xjw00YddExrjpm9kI4jURHx3S0/edit?usp=sharing'} target='_blank'>
                    Tudor Age Cornell Notes
                    </a>
                    </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1RinwnkyQC7mDUTNIEI8juDxi1EGEy6wQffFEto_xyvE/edit?usp=sharing'} target='_blank'>
                  <img src={DigitalMedium} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1RinwnkyQC7mDUTNIEI8juDxi1EGEy6wQffFEto_xyvE/edit?usp=sharing'} target='_blank'>
                    Digital Medium Project
                    </a>
                    </p>
                </div>
               
              </div>
            </div>
            <div class="slide" data-anchor="slide8"> 
            <button onClick={() => fullpageApi.moveSectionUp()} id={'invis'}>
<AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionUp()}>Click me to move up</AwesomeButton>

            </button>
                <h1>Course Goal 7</h1>
                <h3>Communication Skills</h3>
              <div className="items">
              <div className="content">
                  <a href={'https://docs.google.com/document/d/1aknfhrteHnwHD3UU8y802ig0wym2o9VCuuPMN8IqXIA/edit?usp=sharing'} target='_blank'>
                  <img src={LitCircle} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1aknfhrteHnwHD3UU8y802ig0wym2o9VCuuPMN8IqXIA/edit?usp=sharing'} target='_blank'>
                    Literature Circle (January 30)
                    </a>
                    </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/presentation/d/12aEndSC90ePPdfy4t0Lhcjhznsc9kKQpIRlcGChtjbo/edit?usp=sharing'} target='_blank'>
                  <img src={NeoclassPreset} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/presentation/d/12aEndSC90ePPdfy4t0Lhcjhznsc9kKQpIRlcGChtjbo/edit?usp=sharing'} target='_blank'>
                    Neoclassicism Presentation
                    </a>
                    </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1eHFI-gxXO0LkvWeIh5WYuRWTDos2iKKIR4Vz5iFkDZI/edit?usp=sharing'} target='_blank'>
                  <img src={DualEssay} id={'Doc'}/>
                  </a>
                  <p>
                    <a href={'https://docs.google.com/document/d/1eHFI-gxXO0LkvWeIh5WYuRWTDos2iKKIR4Vz5iFkDZI/edit?usp=sharing'} target='_blank'>
                    <i>Pride and Prejudice</i> Essay
                    </a>
                  </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1H0xZJXFTozsVcZFuD5JB5J3P3w8Z_vul8sxf6btq9q4/edit?usp=sharing'} target='_blank'>
                    <img src={LitCircle26} id={'Doc'}/>
                  </a>
                  <p>
                    <a href={'https://docs.google.com/document/d/1H0xZJXFTozsVcZFuD5JB5J3P3w8Z_vul8sxf6btq9q4/edit?usp=sharing'} target='_blank'>
                      Literature Circle (Feb 26-29) & One Pager
                    </a>
                  </p>
                  </div>
              </div>
            </div>
            <div class="slide" data-anchor="slide9"> 
            <button onClick={() => fullpageApi.moveSectionUp()} id={'invis'}>
<AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionUp()}>Click me to move up</AwesomeButton>

            </button>
                <h1>Course Goal 8</h1>
                <h3>Personal Responsibility</h3>
              <div className="items">
              <div className="content">
                  <a href={'https://docs.google.com/document/d/1hJCxSkC2fG8HpG5Wu16AFAFXfB22eCT96VBOxyQE2xw/edit?usp=sharing'} target='_blank'>
                  <img src={AgeOfRevNotes} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1hJCxSkC2fG8HpG5Wu16AFAFXfB22eCT96VBOxyQE2xw/edit?usp=sharing'} target='_blank'>
                    Age of Revolution Cornell Notes
                    </a></p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1PDvRxHQgScttq4h57XqKNi9JrN_SVuYIbtEEx5voy3Q/edit?usp=sharing'} target='_blank'>
                  <img src={NeoclassNotes} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1PDvRxHQgScttq4h57XqKNi9JrN_SVuYIbtEEx5voy3Q/edit?usp=sharing'} target='_blank'>
                    Neoclassicism Cornell Notes
                    </a>
                    </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1IjoLBisKwZhtU9lN-Xjw00YddExrjpm9kI4jURHx3S0/edit?usp=sharing'} target='_blank'>
                  <img src={TudorAgeNotes} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1IjoLBisKwZhtU9lN-Xjw00YddExrjpm9kI4jURHx3S0/edit?usp=sharing'} target='_blank'>
                    Tudor Age Cornell Notes
                    </a>
                    </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1RinwnkyQC7mDUTNIEI8juDxi1EGEy6wQffFEto_xyvE/edit?usp=sharing'} target='_blank'>
                  <img src={DigitalMedium} id={'Doc'}/>
                  </a>
                  <p>
                  <a href={'https://docs.google.com/document/d/1RinwnkyQC7mDUTNIEI8juDxi1EGEy6wQffFEto_xyvE/edit?usp=sharing'} target='_blank'>
                    Digital Medium Project
                    </a>
                    </p>
                </div>
                
               
              </div>
            </div>
            <div class="slide" data-anchor="slide10"> 
            <button onClick={() => fullpageApi.moveSectionUp()} id={'invis'}>
<AwesomeButton id={'coolbutton'}onPress={() => fullpageApi.moveSectionUp()}>Click me to move up</AwesomeButton>

            </button>
                <h1>Course Goal 9</h1>
                <h3>Social Responsibility</h3>
              <div className="items">
              <div className="content">
                  <a href={'https://docs.google.com/document/d/1aknfhrteHnwHD3UU8y802ig0wym2o9VCuuPMN8IqXIA/edit?usp=sharing'} target='_blank'>
                  <img src={LitCircle} id={'Doc'}/>
                  </a>
                                    <p>
                  <a href={'https://docs.google.com/document/d/1aknfhrteHnwHD3UU8y802ig0wym2o9VCuuPMN8IqXIA/edit?usp=sharing'} target='_blank'>
                    Literature Circle (January 30)
                    </a>
                    </p>

                </div>
                <div className="content">
                  <a href={'https://docs.google.com/presentation/d/12aEndSC90ePPdfy4t0Lhcjhznsc9kKQpIRlcGChtjbo/edit?usp=sharing'} target='_blank'>
                  <img src={NeoclassPreset} id={'Doc'}/>
                  </a>
                  
                  <p>
                  <a href={'https://docs.google.com/presentation/d/12aEndSC90ePPdfy4t0Lhcjhznsc9kKQpIRlcGChtjbo/edit?usp=sharing'} target='_blank'>
                    Neoclassicism Presentation
                    </a>
                    </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1eHFI-gxXO0LkvWeIh5WYuRWTDos2iKKIR4Vz5iFkDZI/edit?usp=sharing'} target='_blank'>
                  <img src={DualEssay} id={'Doc'}/>
                  </a>
                  <p>
                    <a href={'https://docs.google.com/document/d/1eHFI-gxXO0LkvWeIh5WYuRWTDos2iKKIR4Vz5iFkDZI/edit?usp=sharing'} target='_blank'>
                    <i>Pride and Prejudice</i> Essay
                    </a>
                  </p>
                </div>
                <div className="content">
                  <a href={'https://docs.google.com/document/d/1H0xZJXFTozsVcZFuD5JB5J3P3w8Z_vul8sxf6btq9q4/edit?usp=sharing'} target='_blank'>
                    <img src={LitCircle26} id={'Doc'}/>
                  </a>
                  <p>
                    <a href={'https://docs.google.com/document/d/1H0xZJXFTozsVcZFuD5JB5J3P3w8Z_vul8sxf6btq9q4/edit?usp=sharing'} target='_blank'>
                      Literature Circle (Feb 26-29) & One Pager
                    </a>
                  </p>
                  </div>
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
    </div>
  );
}

export default App;
