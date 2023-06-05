import React from "react";

const styles = {
    welcomeSection: {
        color: 'Black',
        paddingTop:'5px',
        // backgroundImage: `url("assets/PostIt500.png")`,
        // backgroundSize: '650px 650px',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
    },
    welcomeBlurb: {
        display:'flex',
        justifyContent: 'center',
        // height:'50%',
        // width: '50%',
        fontSize: '18px',
        paddingTop: '15px',
    },

};

export default function Welcome() {
    return (
        <div style={styles.welcomeSection}>
            <h2>Welcome!</h2>
            <p style={styles.welcomeBlurb}>
                Noted is an application which is designed to help you keep track of some of the many things we all worry about in our daily lives.
                From what to prepare for dinner, to what kind of weather to dress for. Even remembering what time your upcoming appointment 
                is scheduled for. With the app’s large catalog of recipes you will always have new ideas of meals at your disposal which you can find and 
                save in the app for later. Not sure if you’re going to need to wear a jacket or just a T-shirt today? Just input your area code and find 
                out the current weather conditions. Last but not least you can write and save notes with whatever message you’d like. We all lead busy lives 
                with jam-packed schedules and the Noted app is the perfect tool to help organize your thoughts and ease your mind.
            </p>
        </div>
    );
}