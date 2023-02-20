export default function Youtube ({props}) {

    const {id, title} = props;
    return (

        <div style={{margin: "2em 0"}}>

            <iframe

                width="100%"

                height="450"

                src={"https://www.youtube.com/embed/" + id}

                title={title}

                frameBorder="0"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

            ></iframe>

        </div>

    );

}
