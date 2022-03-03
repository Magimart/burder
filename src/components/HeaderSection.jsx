import React, {useState, useEffect} from 'react';



export const HeaderSection = () => {

     const [showPage, setShowPage] = useState(false);

     const handleOnClick = () => {
         console.log("testing button")
         setShowPage(true);
         setTimeout(() => setShowPage(false), 7000);
     }

  
   
     return (
       <>
              <section className="headerWrapper">
                          <div>
                             <h1>
                              Burda Media Assignment
                             </h1>
                          </div> 
                      <button className="viewAppBtn"
                         onClick={handleOnClick}
                      >
                        view App Performace on 
                        <span>live demo</span>
                    </button>
 
            </section>
              {/* live performance  */}
              {showPage && showPage? (<> 
                                            <ViewPerformance/>
                                          </> ): ""} 

       </>
     )
   }
   

   export const ViewPerformance = () => {

      const performanceImage = "/performanceImage.png"
  
   
    return (
      <>
             <section className="viewPeformanceWrapper">

             <img  src={performanceImage} id="bg"
                className="performanceImage"
             />  

              <div className="perBtnWrapper">
                       <div>
                            <h2>
                                Continue with button to the Project 
                            </h2>
                        </div> 
                    <a href='https://github.com/Magimart/burder/'>
                        <button className="viewPerformanceBtn">
                                view source code
                            <span className="viewBtnLive">git rep</span>
                        </button>
                    </a>

              </div>

           </section>
      </>
    )
  }