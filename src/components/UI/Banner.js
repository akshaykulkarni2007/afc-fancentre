import React from 'react';


const Banner = props => {
    const styles = {
        backgroundImg: {
            backgroundImage: `url(${props.img})`,
            height: props.height,
            width: 100 + '%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: props.imgPosition
        },
        title: {
            margin: 0,
            padding: '5rem 2rem 2rem',
            maxWidth: '500px'
        },
        content: {
            margin: 0,
            padding: '0 2rem 2rem',
            maxWidth: '500px'
        }
    }

    return(
        <div style={styles.backgroundImg}>
            <h1 style={styles.title}>{props.title}</h1>
            <h4 style={styles.content}>{props.children}</h4>
        </div>
    )
}

export default Banner;