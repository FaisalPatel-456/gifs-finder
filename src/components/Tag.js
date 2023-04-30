
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { saveAs } from "file-saver";
//import ImageDownload from "./ImageDownload";

const Tag = () => {

    //const [gif, setGif] = useState("");
    //const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState("car");
    
    // async function fetchData() {

    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( () => {

    //     fetchData();
    // }, [])

    const {gif, loading, fetchData} = useGif(tag);

    function clickHandler() {
        fetchData();
    }

    function changeHandler(event) {
        setTag(event.target.value);
    }

    const downloadHandler = () => {

        saveAs(gif, "random-gif.gif");

    }

    return(

        <div className="w-full rounded-lg border flex flex-col items-center gap-5
        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">

            <h1 className="text-2xl text-[#1e24e1] mt-5 uppercase font-bold">
            {
                tag.trim().length === 0 ?
                (`A Random Gif`) :
                (`A ${tag} Gif`)
            }
            
            </h1>

            {
                loading ?
                (
                    <div className="w-100 h-80">

                        <Spinner />
                        
                    </div>
                ) : 
                (
                    <div className="w-100 h-80">

                        <img src={gif} className="w-full h-full object-scale-down" alt="random gif"/>

                    </div>
                )
            }

            <div className="w-10/12 flex gap-2">

                <input className="w-[60%] md:w-[80%] text-lg py-2 rounded-lg text-center border border-gray-500" onChange={changeHandler}
                 value={tag} placeholder="Enter anything here to get gifs"
                />

                <button onClick={clickHandler} className="w-[40%] md:w-[20%] bg-[#3f44de] hover:bg-[#1e24e1] text-white font-bold 
                transition ease-linear duration-200 text-md md:text-lg py-2 rounded-lg">
                    Generate
                </button>

            </div>

            <button onClick={downloadHandler} className="w-10/12 mb-5 bg-[#f03131] hover:bg-[#e51515] text-white font-bold
             text-lg py-2 rounded-lg transition ease-linear duration-200" >
                Download
            </button>

        </div>
    );
}

export default Tag;