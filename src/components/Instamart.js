import React, { useState } from "react";

const Section = ({ description, title, isVisible, setIsVisible }) => {
   return (
      <div className="border-2 border-black m-1 p-1">
         <h2 className="text-xl font-bold">{title}</h2>
         {isVisible ? (
            <button onClick={() => setIsVisible(false)}>Hide</button>
         ) : (
            <button onClick={() => setIsVisible(true)}>Show</button>
         )}
         {isVisible && <h3>{description}</h3>}
      </div>
   );
};

const Instamart = () => {
   const [sectionConfig, setSectionConfig] = useState({
      showAbout: false,
      showTeam: false,
   });

   return (
      <>
         <h1 className="p-2 font-extrabold text-5xl">Instamart</h1>

         <Section
            title="About Instamart"
            description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
            isVisible={sectionConfig.showAbout}
            setIsVisible={() =>
               setSectionConfig({
                  showAbout: true,
                  showTeam: false,
               })
            }
         />

         <Section
            title="Team Instamart"
            description="Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."
            isVisible={sectionConfig.showTeam}
            setIsVisible={() =>
               setSectionConfig({
                  showAbout: false,
                  showTeam: true,
               })
            }
         />
      </>
   );
};

export default Instamart;
